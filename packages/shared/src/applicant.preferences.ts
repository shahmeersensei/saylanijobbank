import { z } from 'zod';
import { unique } from './applicant.fields';
import { JOB_TYPES, SHIFTS } from './applicant.labels';
import { masterDataCodeSchema } from './master-data';
import { RADIUS_LIMITS } from './settings';

export const preferencesSchema = z.object({
  categoryCodes: z
    .array(masterDataCodeSchema)
    .min(1, 'Choose at least one kind of job')
    .max(10)
    .refine(...unique((c: string) => c, 'Each category only once')),
  minSalaryPkr: z
    .number()
    .int()
    .min(0)
    .max(10_000_000)
    .nullish()
    .transform((v) => v ?? null),
  shifts: z
    .array(z.enum(SHIFTS))
    .max(SHIFTS.length)
    .refine(...unique((s: string) => s, 'Each shift only once')),
  jobTypes: z
    .array(z.enum(JOB_TYPES))
    .max(JOB_TYPES.length)
    .refine(...unique((s: string) => s, 'Each job type only once')),
  willingRadiusM: z
    .number()
    .int()
    .min(RADIUS_LIMITS.minM, `At least ${RADIUS_LIMITS.minM / 1000} km`)
    .max(RADIUS_LIMITS.maxM, `At most ${RADIUS_LIMITS.maxM / 1000} km`)
    .nullish()
    .transform((v) => v ?? null),
  availableFrom: z.iso
    .date()
    .nullish()
    .transform((v) => v ?? null),
});
export type PreferencesInput = z.infer<typeof preferencesSchema>;
