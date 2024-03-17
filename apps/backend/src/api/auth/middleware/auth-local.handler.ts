import { passport } from "../strategy";

const authLocalHandler = (): ReturnType<typeof passport.authenticate> => passport.authenticate("local", { session: false });

export default authLocalHandler;
