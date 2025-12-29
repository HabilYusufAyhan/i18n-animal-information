import { z } from 'zod';

interface TranslationFunction {
  (key: string): string;
}
export const createGlobalSearchSchema = (t: TranslationFunction) =>
  z.object({
    query: z
      .string()
      .min(2, t('app.minLengthError'))
      .max(50, t('app.maxLengthError'))
      .regex(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, t('app.invalidCharsError'))
  });
