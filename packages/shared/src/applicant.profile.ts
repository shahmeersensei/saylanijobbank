import { z } from 'zod';
import { currentMonth, monthSchema, optionalText, unique } from './applicant.fields';
import { LANGUAGE_PROFICIENCIES, SKILL_LEVELS } from './applicant.labels';
import { masterDataCodeSchema } from './master-data';

export const educationItemSchema = z.object({
  levelCode: masterDataCodeSchema,
  institution: optionalText(160),
  fieldOfStudy: optionalText(120),
  completionYear: z
    .number()
    .int()
    .min(1950)
    .max(new Date().getUTCFullYear() + 6)
    .nullish()
    .transform((v) => v ?? null),
  isCurrent: z.boolean().default(false),
  grade: optionalText(40),
});
export const educationSchema = z.object({ items: z.array(educationItemSchema).max(10) });
export type EducationInput = z.infer<typeof educationSchema>;

export const experienceItemSchema = z
  .object({
    employerName: z.string().trim().min(2, 'Enter the employer').max(160),
    jobTitle: z.string().trim().min(2, 'Enter your job title').max(120),
    categoryCode: masterDataCodeSchema.nullish().transform((v) => v ?? null),
    startMonth: monthSchema,
    endMonth: monthSchema.nullish().transform((v) => v ?? null),
    isCurrent: z.boolean().default(false),
    description: optionalText(1000),
  })
  .superRefine((item, ctx) => {
    if (item.startMonth > currentMonth())
      ctx.addIssue({ code: 'custom', path: ['startMonth'], message: 'Cannot be in the future' });
    if (item.isCurrent && item.endMonth)
      ctx.addIssue({
        code: 'custom',
        path: ['endMonth'],
        message: 'Leave the end empty for your current job',
      });
    if (!item.isCurrent && !item.endMonth)
      ctx.addIssue({ code: 'custom', path: ['endMonth'], message: 'Enter when this job ended' });
    if (item.endMonth && item.endMonth < item.startMonth)
      ctx.addIssue({ code: 'custom', path: ['endMonth'], message: 'Must be after the start' });
    if (item.endMonth && item.endMonth > currentMonth())
      ctx.addIssue({ code: 'custom', path: ['endMonth'], message: 'Cannot be in the future' });
  });
export const experienceSchema = z
  .object({ hasNoExperience: z.boolean(), items: z.array(experienceItemSchema).max(15) })
  .refine((v) => !(v.hasNoExperience && v.items.length > 0), {
    message: 'Remove the jobs, or untick "I have no work experience"',
    path: ['hasNoExperience'],
  });
export type ExperienceInput = z.infer<typeof experienceSchema>;

export const skillsSchema = z.object({
  items: z
    .array(
      z.object({
        skillCode: masterDataCodeSchema,
        level: z.enum(SKILL_LEVELS),
        years: z.number().int().min(0).max(50),
      }),
    )
    .max(30)
    .refine(...unique((s: { skillCode: string }) => s.skillCode, 'Each skill only once')),
});
export type SkillsInput = z.infer<typeof skillsSchema>;

export const languagesSchema = z.object({
  items: z
    .array(
      z.object({ languageCode: masterDataCodeSchema, proficiency: z.enum(LANGUAGE_PROFICIENCIES) }),
    )
    .max(10)
    .refine(...unique((l: { languageCode: string }) => l.languageCode, 'Each language only once')),
});
export type LanguagesInput = z.infer<typeof languagesSchema>;

export const certificationsSchema = z.object({
  items: z
    .array(
      z
        .object({
          name: z.string().trim().min(2, 'Enter the certificate name').max(160),
          issuer: optionalText(160),
          issuedMonth: monthSchema.nullish().transform((v) => v ?? null),
          expiresMonth: monthSchema.nullish().transform((v) => v ?? null),
        })
        .refine((c) => !c.issuedMonth || !c.expiresMonth || c.expiresMonth >= c.issuedMonth, {
          message: 'Must be after the issue date',
          path: ['expiresMonth'],
        }),
    )
    .max(15),
});
export type CertificationsInput = z.infer<typeof certificationsSchema>;
