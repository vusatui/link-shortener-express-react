import { Router } from "express";
import { swaggerRoute } from "./swagger";
import { pingRoute } from "./ping";
import { authRoute } from "./auth";

export const api = (): Router => {
    const router = Router();

    router.use("/api-docs", swaggerRoute());
    router.use("/ping", pingRoute());
    router.use("/auth", authRoute());

    return router;
};
