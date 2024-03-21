import { RequestHandler } from "express";
import { LinkUpdateSchema, LinkUpdateSchemaType } from "../validation";
import { ZodError } from "zod";
import createHttpError from "http-errors";

const validateLinkUpdateHandler = (): RequestHandler<any, any, LinkUpdateSchemaType> => (req, res, next) => {
    try {
        LinkUpdateSchema.parse(req.body);
        next();
    } catch (err) {
        if (err instanceof ZodError) next(createHttpError(400, "Invalid input", { details: err.errors }));
        else next(err);
    }
};

export default validateLinkUpdateHandler;
