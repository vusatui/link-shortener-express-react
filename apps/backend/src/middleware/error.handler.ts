import { ErrorRequestHandler } from "express";
import createHttpError from "http-errors";
import { logger } from "../service";

const errorHandler = (): ErrorRequestHandler => (err, req, res, next) => {
    // Log unhandled errors
    logger.error(err);

    res.json(new createHttpError.InternalServerError());
};

export default errorHandler;
