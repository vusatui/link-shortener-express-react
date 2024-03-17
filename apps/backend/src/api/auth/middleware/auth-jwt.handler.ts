import { passport } from "../strategy";

const authJwtHandler = (): ReturnType<typeof passport.authenticate> => passport.authenticate("jwt", { session: false })

export default authJwtHandler;
