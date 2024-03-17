import { RequestHandler } from "express";
import { LinkCreateSchema, LinkCreateSchemaType } from "../validation";
import { ZodError } from "zod";
import createHttpError from "http-errors";

const validateLinkCreateHandler = (): RequestHandler<any, any, LinkCreateSchemaType> => (req, res, next) => {
    try {
        LinkCreateSchema.parse(req.body);
        next();
    } catch (err) {
        if (err instanceof ZodError) next(createHttpError(400, "Invalid input", { details: err.errors }));
        else next(err);
    }
};

export default validateLinkCreateHandler;
