import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { registerApi } from "./api";
import { errorHandler } from "./middleware";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(json());

registerApi(app);

app.use(errorHandler())


