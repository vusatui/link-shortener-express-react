import { Router } from "express";
import { UserCreateSchemaType, UserLoginSchemaType } from "./validation";
import { validateLoginHandler, validateSignupHandler } from "./middleware";
import { IUser, UserModel } from "../../model";
import createHttpError from "http-errors";
import generateTokenUtil from "./util/generate-token.util";
import { passport } from "./strategy";

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

    router.post<{}, {}, UserLoginSchemaType>("/login", validateLoginHandler(), passport.authenticate("local", { session: false }), (req, res) => {
        res.json({ token: generateTokenUtil(req.user as IUser) });
    });

    return router;
};
