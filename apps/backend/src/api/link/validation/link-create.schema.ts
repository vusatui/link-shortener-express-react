import { z } from "zod";

const LinkCreateSchema = z.object({
    originalUrl: z.string().url(),
    displayName: z.string().min(3).max(32),
});

export type LinkCreateSchemaType = z.infer<typeof LinkCreateSchema>;

export default LinkCreateSchema;
