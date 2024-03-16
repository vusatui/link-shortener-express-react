import { z } from "zod";

const UserLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;

export default UserLoginSchema;
