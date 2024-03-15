import { Express, Router } from "express";
import { useSwaggerRoute } from "./swagger";
import { usePingRoute } from "./ping";

export const registerApi = (app: Express) => {
    const router = Router();

    useSwaggerRoute(router);
    usePingRoute(router);

    app.use(router);
};
