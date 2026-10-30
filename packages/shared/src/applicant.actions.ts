import { z } from 'zod';
import { optionalText } from './applicant.fields';
import { IDENTITY_METHODS, IDENTITY_OUTCOMES } from './applicant.labels';
import { DOCUMENT_MIME_TYPES, masterDataCodeSchema } from './master-data';

export const presignDocumentSchema = z.object({
  typeCode: masterDataCodeSchema,
  fileName: z.string().trim().min(1).max(200),
  contentType: z.enum(DOCUMENT_MIME_TYPES, 'Upload a PDF, JPG or PNG file'),
  sizeBytes: z.number().int().positive(),
});
export type PresignDocumentInput = z.infer<typeof presignDocumentSchema>;

export const selfStatusSchema = z.object({ status: z.enum(['ACTIVE', 'INACTIVE']) });

const reason = z.string().trim().min(5, 'Give a short reason (at least 5 characters)').max(500);

export const staffStatusSchema = z.object({ status: z.enum(['ACTIVE', 'INACTIVE']), reason });

export const identityVerificationSchema = z
  .object({
    outcome: z.enum(IDENTITY_OUTCOMES),
    method: z.enum(IDENTITY_METHODS),
    notes: optionalText(1000),
  })
  .refine((v) => v.outcome === 'VERIFIED' || (v.notes?.length ?? 0) >= 5, {
    message: 'Explain what was wrong, so the applicant can fix it',
    path: ['notes'],
  });
export type IdentityVerificationInput = z.infer<typeof identityVerificationSchema>;

export const changePhoneSchema = z.object({ phone: z.string().trim().min(10).max(20), reason });
export const transferApplicantSchema = z.object({ branchId: z.uuid('Choose a branch'), reason });
