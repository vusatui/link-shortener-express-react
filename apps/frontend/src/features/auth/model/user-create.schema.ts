import { z } from "zod";

const UserCreateSchema = z.object({
    username: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(8),
});

export type UserCreateSchemaType = z.infer<typeof UserCreateSchema>;

export default UserCreateSchema;
