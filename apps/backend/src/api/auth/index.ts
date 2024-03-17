import { Router } from "express";
import { UserCreateSchemaType, UserLoginSchemaType } from "./validation";
import { authLocalHandler, validateLoginHandler, validateSignupHandler } from "./middleware";
import { IUser, UserModel } from "../../model";
import createHttpError from "http-errors";
import generateTokenUtil from "./util/generate-token.util";

export const authRoute = (): Router => {
    const router = Router();

    router.post<{}, {}, UserCreateSchemaType>("/register", validateSignupHandler(), async (req, res, next) => {
        try {
            const user = new UserModel(req.body);
            await user.save();
            const token = generateTokenUtil(user);

            res.status(201).json({ token });
        } catch (err) {
            next(createHttpError.InternalServerError());
        }
    });

    router.post<{}, {}, UserLoginSchemaType>("/login", validateLoginHandler(), authLocalHandler(), (req, res) => {
        res.json({ token: generateTokenUtil(req.user as IUser) });
    });

    return router;
};
