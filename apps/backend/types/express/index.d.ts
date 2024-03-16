import { IUser } from "../../src/model";

declare global {
    namespace Express {
        interface Request {
            user?: IUser;
        }
    }
}
