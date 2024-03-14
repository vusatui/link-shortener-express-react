import { registerRouter } from "./route";
import { Express } from "express";

export const registerApi = (app: Express) => {
    registerRouter(app);
};
