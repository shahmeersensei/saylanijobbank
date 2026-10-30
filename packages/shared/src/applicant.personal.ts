import { z } from 'zod';
import { cnicSchema, dateOfBirthSchema, personName } from './applicant.fields';
import { GENDERS } from './applicant.labels';

const personalFields = {
  fullName: personName('your full name'),
  fatherName: personName("your father's or husband's name"),
  cnic: cnicSchema,
  dateOfBirth: dateOfBirthSchema,
  gender: z.enum(GENDERS, 'Choose an option'),
  email: z
    .email('Enter a valid email address')
    .trim()
    .toLowerCase()
    .max(254)
    .nullish()
    .or(z.literal('').transform(() => null)),
};

export const registerApplicantSchema = z.object(personalFields);
export type RegisterApplicantInput = z.infer<typeof registerApplicantSchema>;

export const updatePersonalSchema = z.object(personalFields).partial();
export type UpdatePersonalInput = z.infer<typeof updatePersonalSchema>;

export const staffEditApplicantSchema = z
  .object(personalFields)
  .partial()
  .extend({ reason: z.string().trim().min(5, 'Give a short reason').max(500) })
  .refine((v) => Object.keys(v).some((key) => key !== 'reason'), {
    message: 'Change at least one field',
  });
