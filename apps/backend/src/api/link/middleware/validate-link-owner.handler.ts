import { RequestHandler } from "express";
import createHttpError from "http-errors";
import { IUser, ShortUrlModel } from "../../../model";

const validateLinkOwnerHandler = (): RequestHandler<{ shortId: string }> => async (req, res, next) => {
    try {
        const { shortId } = req.params;
        const userId = (req.user as IUser)?.id;

        const shortUrl = await ShortUrlModel.findOne({ _id: shortId, userId });

        if (!shortUrl) return next(createHttpError.NotFound());

        res.locals.shortUrl = shortUrl;

        next();
    } catch (err) {
        next(createHttpError.InternalServerError());
    }
};

export default validateLinkOwnerHandler;
