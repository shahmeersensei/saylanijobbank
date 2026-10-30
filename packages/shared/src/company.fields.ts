import { z } from 'zod';

export const ntnSchema = z
  .string('Enter the NTN')
  .transform((value) => value.replace(/\s/g, ''))
  .transform((value) => {
    const short = /^(\d{7})-?(\d)$/.exec(value);
    if (short) return `${short[1]}-${short[2]}`;
    const cnic = value.replace(/-/g, '');
    return /^\d{13}$/.test(cnic) ? cnic : value;
  })
  .pipe(
    z
      .string()
      .regex(/^(\d{7}(-\d)?|[1-9]\d{12})$/, 'Enter the NTN, e.g. 1234567-8 or a 13-digit CNIC'),
  );

export const pkPhoneSchema = z
  .string('Enter a phone number')
  .transform((value) => {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('0092')) digits = digits.slice(4);
    else if (digits.startsWith('92') && digits.length >= 11) digits = digits.slice(2);
    else if (digits.startsWith('0')) digits = digits.slice(1);
    return digits;
  })
  .pipe(z.string().regex(/^[1-9]\d{8,9}$/, 'Enter a Pakistani phone number, e.g. 0300 1234567'))
  .transform((national) => `+92${national}`);

export const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .nullish()
    .transform((value) => (value ? value : null));

export const optionalEmail = z
  .email('Enter a valid email address')
  .trim()
  .toLowerCase()
  .max(254)
  .nullish()
  .or(z.literal('').transform(() => null))
  .transform((value) => value ?? null);

export const websiteSchema = z
  .string()
  .trim()
  .max(200)
  .nullish()
  .transform((value) => {
    if (!value) return null;
    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
  })
  .pipe(z.url('Enter a website address, e.g. www.example.com').nullable());

export const reason = z.string().trim().min(5, 'Give a short reason (at least 5 characters)').max(500);
export const note = (message: string) => z.string().trim().min(10, message).max(2000);
