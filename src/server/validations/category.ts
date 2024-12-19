import { z } from "zod";

export const categorySchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1).max(50),
  icon: z.string(),
});
