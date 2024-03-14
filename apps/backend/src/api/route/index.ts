import { Express, Router } from "express";
import { usePingRoute } from "./ping";
import { useSwaggerRoute } from "./swagger";

export const registerRouter = (app: Express) => {
    const router = Router();

    usePingRoute(router);
    useSwaggerRoute(router);

    app.use(router);
};
