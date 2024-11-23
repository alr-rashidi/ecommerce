import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().min(10),
  price: z.number().min(0.01),
  category: z.string(),
  stockQuantity: z.number().min(0).default(0), //Using 0 as default instead of null for better database handling.
  images: z.array(z.string().url()),
  createdAt: z.date().default(new Date()), //Using new Date() instead of Date.now for Zod compatibility.
});
