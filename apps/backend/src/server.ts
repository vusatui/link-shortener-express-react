import { createServer } from "node:http";
import { app } from "./app";
import { initDb } from "./db";

const PORT = 3000;

const server = createServer(app);

const bootstrap = async () => {
    await initDb();
    server.listen(PORT);
};

bootstrap();


