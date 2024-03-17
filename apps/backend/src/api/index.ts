import { Router } from "express";
import { swaggerRoute } from "./swagger";
import { pingRoute } from "./ping";
import { authRoute } from "./auth";
import { linkRedirectRoute, linkRoute } from "./link";

export const api = (): Router => {
    const router = Router();

    router.use("/api-docs", swaggerRoute());
    router.use("/ping", pingRoute());
    router.use("/auth", authRoute());
    router.use("/link", linkRoute());
    router.use(linkRedirectRoute());

    return router;
};
