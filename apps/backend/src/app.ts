import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { api } from "./api";
import { errorHandler } from "./middleware";

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(json());
app.use(api());
app.use(errorHandler());


