import { Router } from "express";

export const usePingRoute = (router: Router) => {
    const pingRoute = Router();

    pingRoute.get("/", (req, res) => {
        res.json({
            message: "Pong",
        });
    });

    router.use("/ping", pingRoute);
};
