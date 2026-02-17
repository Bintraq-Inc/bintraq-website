import { z } from 'zod';

const envSchema = z.object({
  VITE_API_URL: z.string().url().optional(),
  VITE_ANALYTICS_ID: z.string().optional(),
});

export const ENV = envSchema.parse(import.meta.env);