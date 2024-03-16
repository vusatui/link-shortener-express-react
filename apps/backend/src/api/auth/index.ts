import { Router } from "express";
import { UserCreateSchemaType } from "./validation";
import { validateLoginHandler, validateSignupHandler } from "./middleware";
import { IUser, UserModel } from "../../model";
import createHttpError from "http-errors";
import generateTokenUtil from "./util/generate-token.util";
import { passport } from "./strategy";

export const useAuthRoute = (router: Router) => {
    const authRouter = Router();

    authRouter.post<{}, {}, UserCreateSchemaType>("/register", validateSignupHandler(), async (req, res, next) => {
        try {
            const user = new UserModel(req.body);
            await user.save();
            const token = generateTokenUtil(user);

            res.status(201).json({ token });
        } catch (err) {
            next(createHttpError.InternalServerError());
        }
    });

    authRouter.post("/login", validateLoginHandler(), passport.authenticate("local", { session: false }), (req, res) => {
        res.json({ token: generateTokenUtil(req.user as IUser) });
    });

    router.use("/auth", authRouter);
};
