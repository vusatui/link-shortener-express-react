import { Router } from "express";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import swaggerUi from "swagger-ui-express";

const swaggerDocument = JSON.parse(readFileSync(resolve(__dirname, "../../../../swagger.json"), "utf-8"));

export const useSwaggerRoute = (router: Router) => {
    const swaggerRouter = Router();

    swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    router.use(swaggerRouter);
};
