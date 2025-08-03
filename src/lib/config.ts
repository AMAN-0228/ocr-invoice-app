import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().url({ message: 'DATABASE_URL must be a valid URL' }),
  GOOGLE_OCR_CREDENTIALS: z.string().min(1, 'GOOGLE OCR Credentials are required'),
  NEXT_PUBLIC_BASE_URL: z.string().url({ message: 'NEXT_PUBLIC_BASE_URL must be a valid URL' }),
  GOOGLE_OCR_PROCESSOR_ID: z.string().min(1, 'Google Processor Id is required')
});

const _env = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  GOOGLE_OCR_CREDENTIALS: process.env.GOOGLE_OCR_CREDENTIALS_BASE64!,
  GOOGLE_OCR_PROCESSOR_ID: process.env.GOOGLE_OCR_PROCESSOR_ID,
};

const parsed = envSchema.safeParse(_env);

if (!parsed.success) {
  const formatted = parsed.error.format();
  const message =
    '❌ Invalid environment variables:\n' +
    Object.entries(formatted)
      .map(([key, val]) => (val && typeof val === 'object' && '_errors' in val ? `${key}: ${val._errors.join(', ')}` : ''))
      .filter(Boolean)
      .join('\n');
  throw new Error(message);
}

export const config = parsed.data;