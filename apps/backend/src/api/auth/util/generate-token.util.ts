import jwt, { Jwt } from "jsonwebtoken";
import { IUser } from "../../../model";
import applicationConfig from "../../../config";

export interface JwtUserPayload {
    id: string
}

const generateTokenUtil = (user: IUser) => jwt.sign({ id: user.id } as JwtUserPayload, applicationConfig.jwtSecret, { expiresIn: "1h" });

export default generateTokenUtil;
