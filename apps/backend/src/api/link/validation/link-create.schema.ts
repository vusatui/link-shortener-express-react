import { z } from "zod";

const LinkCreateSchema = z.object({
    originalUrl: z.string().url(),
});

export type LinkCreateSchemaType = z.infer<typeof LinkCreateSchema>;

export default LinkCreateSchema;
