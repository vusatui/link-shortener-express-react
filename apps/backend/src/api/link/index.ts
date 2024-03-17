import { Router } from "express";
import { authJwtHandler } from "../auth";
import createHttpError from "http-errors";
import { validateLinkCreateHandler } from "./middleware";
import { LinkCreateSchemaType } from "./validation";
import { ClickStatModel, IShortUrl, IUser, ShortUrlModel } from "../../model";
import { nanoid } from "nanoid";
import validateLinkOwnerHandler from "./middleware/validate-link-owner.handler";
import { logger } from "../../service";

export const linkRoute = (): Router => {
    const router = Router();

    router.post<{}, IShortUrl, LinkCreateSchemaType>("/shorten", authJwtHandler(), validateLinkCreateHandler(), async (req, res, next) => {
        try {
            const user = req.user as IUser;
            const shortUrl = await ShortUrlModel.create({
                userId: user._id,
                originalUrl: req.body.originalUrl,
                shortId: nanoid(7),
            });

            res.status(201).json(shortUrl);
        } catch (err) {
            if ((err as any)?.code === 11000) next(createHttpError.BadRequest("A shortened link already exists for this user with the same original URL."));
            else next(err);
        }
    });

    router.get<{ shortId: string }, IShortUrl>("/:shortId", authJwtHandler(), async (req, res, next) => {
        try {
            const user = req.user as IUser;
            const shortUrl = await ShortUrlModel.findOne({ _id: req.params.shortId, userId: user.id });

            if (!shortUrl) return next(createHttpError.NotFound());

            res.json(shortUrl);
        } catch (err) {
            next(err);
        }
    });

    router.delete("/:shortId", authJwtHandler(), validateLinkOwnerHandler(), async (req, res, next) => {
        try {
            await ShortUrlModel.findByIdAndDelete(req.params.shortId);
            res.sendStatus(200);
        } catch (err) {
            next(err);
        }
    });

    return router;
};

export const linkRedirectRoute = () => {
    const router = Router();

    router.get("/:shortId", async (req, res, next) => {
        try {
            const shortUrl = await ShortUrlModel.findOne({ shortId: req.params.shortId });
            if (!shortUrl) return next(createHttpError.NotFound());

            ClickStatModel.create({
                shortUrlId: shortUrl._id,
                clickedAt: new Date(),
                referrer: req.headers.referer || "",
                ipAddress: req.ip,
                userAgent: req.headers["user-agent"] || "",
            })
                .then((clickStat) => logger.info("Click stat logged", clickStat.toJSON()))
                .catch(err => logger.error(err));

            // res.redirect(shortUrl.originalUrl);

            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="refresh" content="1;url=${shortUrl.originalUrl}">
                    <title>Redirecting</title>
                </head>
                <body>
                    <p>You will be redirected in 1 sec on <a href="${shortUrl.originalUrl}">this page</a>.</p>
                </body>
                </html>
            `);
        } catch (err) {
            next(err);
        }
    });

    return router;
};
