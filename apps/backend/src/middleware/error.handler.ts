import { ErrorRequestHandler } from "express";
import { logger } from "../service";

const errorHandler = (): ErrorRequestHandler => (err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message,
        details: err.details || "Internal server error",
    });

    // Log errors
    logger.error(err);
};

export default errorHandler;
