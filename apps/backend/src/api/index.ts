import { Express, Router } from "express";
import { useSwaggerRoute } from "./swagger";
import { usePingRoute } from "./ping";
import { useAuthRoute } from "./auth";

export const registerApi = (app: Express) => {
    const router = Router();

    useSwaggerRoute(router);
    usePingRoute(router);
    useAuthRoute(router);

    app.use(router);
};
