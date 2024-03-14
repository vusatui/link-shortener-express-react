import { Router } from "express";

export const usePingRoute = (parentRoute: Router) => {
    const pingRoute = Router();

    pingRoute.get("/", (req, res) => {
        res.json({
            message: "Pong",
        });
    });

    parentRoute.use("/ping", pingRoute);
};
