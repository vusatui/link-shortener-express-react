import { z } from "zod";

const LinkUpdateSchema = z.object({
    originalUrl: z.string().url().optional(),
    displayName: z.string().min(3).max(32).optional(),
});

export type LinkUpdateSchemaType = z.infer<typeof LinkUpdateSchema>;

export default LinkUpdateSchema;
