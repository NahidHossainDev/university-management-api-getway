import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const envVarsZodSchema = z.object({
  NODE_ENV: z.string(),
  REDIS_URL: z.string(),
  AUTH_SERVICE: z.string(),
  CORE_SERVICE: z.string(),
  PORT: z
    .string()
    .default('3030')
    .refine((val) => Number(val)),
  JWT_SECRET: z.string()
});

const envVars = envVarsZodSchema.parse(process.env);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  authService: envVars.AUTH_SERVICE,
  coreService: envVars.CORE_SERVICE,
  redisURL: envVars.REDIS_URL,
  jwt: {
    secret: envVars.JWT_SECRET
  }
};
