import { z } from 'zod';
import { pakistanPointSchema } from './applicant';
import {
  ntnSchema,
  optionalEmail,
  optionalText,
  pkPhoneSchema,
  reason,
  websiteSchema,
} from './company.fields';
import { COMPANY_SIZE_BANDS, LEGAL_STRUCTURES } from './company.reference';
import { DOCUMENT_MIME_TYPES, masterDataCodeSchema } from './master-data';

const companyFields = {
  legalName: z
    .string('Enter the registered company name')
    .trim()
    .min(2, 'Enter the registered company name')
    .max(160),
  tradeName: optionalText(160),
  legalStructure: z.enum(LEGAL_STRUCTURES, 'Choose the type of business'),
  ntn: ntnSchema,
  registrationNo: optionalText(60),
  industryCode: masterDataCodeSchema,
  sizeBand: z.enum(COMPANY_SIZE_BANDS, 'Choose the company size'),
  website: websiteSchema,
  description: optionalText(1000),
};

export const registerCompanySchema = z.object(companyFields);
export type RegisterCompanyInput = z.infer<typeof registerCompanySchema>;

export const updateCompanySchema = z.object(companyFields).partial();
export type UpdateCompanyInput = z.infer<typeof updateCompanySchema>;

export const COMPANY_LEGAL_FIELDS = [
  'legalName',
  'legalStructure',
  'ntn',
  'registrationNo',
] as const satisfies (keyof UpdateCompanyInput)[];

export const correctCompanySchema = z
  .object(companyFields)
  .partial()
  .extend({ reason })
  .refine((v) => Object.keys(v).some((key) => key !== 'reason'), {
    message: 'Change at least one field',
  });

export const companyContactSchema = z.object({
  name: z.string('Enter a name').trim().min(3, 'Enter the full name').max(120),
  designation: optionalText(120),
  phone: pkPhoneSchema,
  email: optionalEmail,
  isPrimary: z.boolean().default(false),
});

export const companyContactsSchema = z.object({
  items: z
    .array(companyContactSchema)
    .min(1, 'Add at least one contact person')
    .max(5)
    .refine((items) => items.filter((c) => c.isPrimary).length === 1, {
      message: 'Mark exactly one contact as the main contact',
    }),
});
export type CompanyContactsInput = z.infer<typeof companyContactsSchema>;

const addressFields = {
  location: pakistanPointSchema,
  addressLine: z
    .string('Enter the address')
    .trim()
    .min(5, 'Enter the address (building, street, area)')
    .max(300),
  cityCode: masterDataCodeSchema,
  areaCode: masterDataCodeSchema.nullish().transform((v) => v ?? null),
};

export const companyHeadOfficeSchema = z.object({
  ...addressFields,
  branchId: z.uuid('Choose a branch'),
});
export type CompanyHeadOfficeInput = z.infer<typeof companyHeadOfficeSchema>;

export const companySiteSchema = z.object({
  label: z.string('Name this site').trim().min(2, 'Name this site, e.g. "SITE factory"').max(80),
  ...addressFields,
});
export type CompanySiteInput = z.infer<typeof companySiteSchema>;

export const companyPresignSchema = z.object({
  typeCode: masterDataCodeSchema,
  fileName: z.string().trim().min(1).max(200),
  contentType: z.enum(DOCUMENT_MIME_TYPES, 'Upload a PDF, JPG or PNG file'),
  sizeBytes: z.number().int().positive(),
});

export type CompanyPresignInput = z.infer<typeof companyPresignSchema>;
