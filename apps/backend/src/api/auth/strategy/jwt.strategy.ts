import passport, { Strategy } from "passport";
import {
    Strategy as JwtStrategy,
    ExtractJwt,
    StrategyOptionsWithoutRequest,
} from "passport-jwt";
import config from "../../../config";
import { JwtUserPayload } from "../util";
import { UserModel } from "../../../model";
import { JwtPayload } from "jsonwebtoken";

const options: StrategyOptionsWithoutRequest = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
};

const getJwtStrategy = (): Strategy => new JwtStrategy(options, async (payload: JwtUserPayload & JwtPayload, done) => {
    try {
        const user = await UserModel.findById(payload.id);

        if (user) return done(null, user);

        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
});

export default getJwtStrategy;
