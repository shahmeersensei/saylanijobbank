import { z } from 'zod';
import { note, optionalText, reason } from './company.fields';
import { masterDataCodeSchema } from './master-data';

export const resubmitSchema = z.object({
  note: optionalText(2000),
});

export const releaseSchema = z.object({
  conflict: z.boolean().default(false),
  note: optionalText(500),
});

export const assignVerifierSchema = z.object({
  verifierId: z.uuid('Choose a verifier'),
  reason,
});

export const documentReviewSchema = z
  .object({
    decision: z.enum(['ACCEPTED', 'REJECTED']),
    note: optionalText(500),
  })
  .refine((v) => v.decision === 'ACCEPTED' || (v.note?.length ?? 0) >= 5, {
    message: 'Say what is wrong, so the employer can fix it',
    path: ['note'],
  });
export type DocumentReviewInput = z.infer<typeof documentReviewSchema>;

export const requestInfoSchema = z.object({
  note: note('Say what the employer needs to send or fix (at least 10 characters)'),
});

export const verifyCompanySchema = z.object({ note: optionalText(2000) });

export const rejectCompanySchema = z.object({
  reasonCode: masterDataCodeSchema,
  note: note('Explain the decision (at least 10 characters)'),
});

export const companyStatusSchema = z.object({
  status: z.enum(['SUSPENDED', 'VERIFIED']),
  reason,
});

export const transferCompanySchema = z.object({ branchId: z.uuid('Choose a branch'), reason });
