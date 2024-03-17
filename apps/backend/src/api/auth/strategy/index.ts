import passport from "passport";
import { getLocalStrategy } from "./local.strategy";
import getJwtStrategy from "./jwt.strategy";

passport.use(getLocalStrategy());
passport.use(getJwtStrategy());

export {
    passport,
};
