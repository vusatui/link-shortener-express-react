import { Router } from "express";

export const pingRoute = (): Router => {
    const router = Router();

    router.get("/", (req, res) => {
        res.json({
            message: "Pong",
        });
    });

    return router;
};
