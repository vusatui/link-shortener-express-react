import jwt from "jsonwebtoken";
import { IUser } from "../../../model";
import applicationConfig from "../../../config";

const generateTokenUtil = (user: IUser) => jwt.sign({ id: user.id }, applicationConfig.jwtSecret, { expiresIn: "1d" });

export default generateTokenUtil;
