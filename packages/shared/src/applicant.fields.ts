import { z } from 'zod';
import { MAX_APPLICANT_AGE, MIN_APPLICANT_AGE } from './applicant.labels';

export const cnicSchema = z
  .string('Enter your CNIC number')
  .transform((value) => value.replace(/[\s-]/g, ''))
  .pipe(z.string().regex(/^[1-9]\d{12}$/, 'Enter the 13-digit CNIC number'));

export const personName = (label: string) =>
  z
    .string(`Enter ${label}`)
    .trim()
    .min(3, `Enter ${label} (at least 3 letters)`)
    .max(120)
    .regex(/^[\p{L}\p{M}][\p{L}\p{M}\s.'-]*$/u, 'Use letters only');

export function ageOn(dateOfBirth: string, today: Date = new Date()): number {
  const [y, m, d] = dateOfBirth.split('-').map(Number) as [number, number, number];
  let age = today.getUTCFullYear() - y;
  const month = today.getUTCMonth() + 1;
  if (month < m || (month === m && today.getUTCDate() < d)) age -= 1;
  return age;
}

export const dateOfBirthSchema = z.iso
  .date('Enter your date of birth')
  .refine((dob) => ageOn(dob) >= MIN_APPLICANT_AGE, {
    message: `You must be at least ${MIN_APPLICANT_AGE} years old to register`,
  })
  .refine((dob) => ageOn(dob) <= MAX_APPLICANT_AGE, { message: 'Check the date of birth' });

export const monthSchema = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use the format YYYY-MM');

export const currentMonth = () => new Date().toISOString().slice(0, 7);

export const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .nullish()
    .transform((value) => (value ? value : null));

export const unique = <T>(key: (item: T) => string, message: string) =>
  [(items: T[]) => new Set(items.map(key)).size === items.length, { message }] as const;
