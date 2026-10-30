import { z } from 'zod';
import { passwordSchema, sixDigitCodeSchema } from './auth';

export const employerSignupCodeSchema = z.object({
  email: z.email('Enter a valid email address').trim().toLowerCase().max(254),
});

export const employerSignupSchema = z.object({
  fullName: z.string('Enter your name').trim().min(3, 'Enter your full name').max(120),
  email: z.email('Enter a valid email address').trim().toLowerCase().max(254),
  password: passwordSchema,
  code: sixDigitCodeSchema,
});
export type EmployerSignupInput = z.infer<typeof employerSignupSchema>;
