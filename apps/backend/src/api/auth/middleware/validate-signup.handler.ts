import { RequestHandler } from "express";
import { UserCreateSchema, UserCreateSchemaType } from "../validation";
import { ZodError } from "zod";
import createHttpError from "http-errors";

const validateSignupHandler = (): RequestHandler<{}, {}, UserCreateSchemaType> => (req, res, next) => {
    try {
        UserCreateSchema.parse(req.body);
        next();
    } catch (err) {
        if (err instanceof ZodError) next(createHttpError(400, "Invalid input", { details: err.errors }));
        else next(err);
    }
};

export default validateSignupHandler;
