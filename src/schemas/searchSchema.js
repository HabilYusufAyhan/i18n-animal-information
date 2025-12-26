import { z } from 'zod';

export const createSearchSchema = (t) =>
  z.object({
    query: z
      .string()
      .min(2, t('app.minLengthError'))
      .max(50, t('app.maxLengthError'))
      .regex(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, t('app.invalidCharsError'))
  });
