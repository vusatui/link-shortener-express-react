import { Strategy } from "passport";
import passportLocal from "passport-local";
import { UserModel } from "../../../model";
import bcrypt from "bcrypt";

const LocalStrategy = passportLocal.Strategy;

export const getLocalStrategy = (): Strategy => new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        const user = await UserModel.findOne({ email }).exec();
        if (!user) return done(null, false, { message: "Invalid email" });

        if (!await bcrypt.compare(password, user.password)) return done(null, false, { message: "Invalid password" });

        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

