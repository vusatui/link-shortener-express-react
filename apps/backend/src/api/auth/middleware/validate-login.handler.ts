import { RequestHandler } from "express";
import { UserLoginSchema, UserLoginSchemaType } from "../validation";
import { ZodError } from "zod";
import createHttpError from "http-errors";

const validateLoginHandler = (): RequestHandler<{}, {}, UserLoginSchemaType> => (req, res, next) => {
    try {
        UserLoginSchema.parse(req.body);
        next();
    } catch (err) {
        if (err instanceof ZodError) next(createHttpError(400, "Invalid input", { details: err.errors }));
        else next(err);
    }
};

export default validateLoginHandler;
