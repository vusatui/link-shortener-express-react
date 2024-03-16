import passport from "passport";
import { getLocalStrategy } from "./local.strategy";

passport.use(getLocalStrategy());

export {
    passport,
};
