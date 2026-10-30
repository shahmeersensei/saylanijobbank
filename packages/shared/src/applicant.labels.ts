export const APPLICANT_STATUSES = ['DRAFT', 'ACTIVE', 'INACTIVE', 'RESTRICTED'] as const;
export type ApplicantStatus = (typeof APPLICANT_STATUSES)[number];

export const APPLICANT_STATUS_LABELS: Record<ApplicantStatus, string> = {
  DRAFT: 'Profile incomplete',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  RESTRICTED: 'Restricted',
};

export const IDENTITY_STATUSES = ['UNVERIFIED', 'VERIFIED', 'REJECTED'] as const;
export type IdentityStatus = (typeof IDENTITY_STATUSES)[number];

export const IDENTITY_STATUS_LABELS: Record<IdentityStatus, string> = {
  UNVERIFIED: 'Not verified yet',
  VERIFIED: 'Identity verified',
  REJECTED: 'Identity check failed',
};

export const IDENTITY_METHODS = ['DOCUMENT_REVIEW', 'IN_PERSON'] as const;
export type IdentityMethod = (typeof IDENTITY_METHODS)[number];

export const IDENTITY_METHOD_LABELS: Record<IdentityMethod, string> = {
  DOCUMENT_REVIEW: 'Checked the uploaded CNIC images',
  IN_PERSON: 'Saw the original CNIC in person',
};

export const IDENTITY_OUTCOMES = ['VERIFIED', 'REJECTED'] as const;
export type IdentityOutcome = (typeof IDENTITY_OUTCOMES)[number];

export const GENDERS = ['MALE', 'FEMALE', 'UNDISCLOSED'] as const;
export type Gender = (typeof GENDERS)[number];

export const GENDER_LABELS: Record<Gender, string> = {
  MALE: 'Male',
  FEMALE: 'Female',
  UNDISCLOSED: 'Prefer not to say',
};

export const SKILL_LEVELS = ['BEGINNER', 'INTERMEDIATE', 'EXPERT'] as const;
export type SkillLevel = (typeof SKILL_LEVELS)[number];

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  EXPERT: 'Expert',
};

export const LANGUAGE_PROFICIENCIES = ['BASIC', 'CONVERSATIONAL', 'FLUENT', 'NATIVE'] as const;
export type LanguageProficiency = (typeof LANGUAGE_PROFICIENCIES)[number];

export const LANGUAGE_PROFICIENCY_LABELS: Record<LanguageProficiency, string> = {
  BASIC: 'Basic',
  CONVERSATIONAL: 'Conversational',
  FLUENT: 'Fluent',
  NATIVE: 'Native',
};

export const SHIFTS = ['DAY', 'EVENING', 'NIGHT', 'ROTATING'] as const;
export type Shift = (typeof SHIFTS)[number];

export const SHIFT_LABELS: Record<Shift, string> = {
  DAY: 'Day',
  EVENING: 'Evening',
  NIGHT: 'Night',
  ROTATING: 'Rotating shifts',
};

export const JOB_TYPES = [
  'FULL_TIME',
  'PART_TIME',
  'CONTRACT',
  'INTERNSHIP',
  'TEMPORARY',
  'DAILY_WAGE',
] as const;
export type JobType = (typeof JOB_TYPES)[number];

export const JOB_TYPE_LABELS: Record<JobType, string> = {
  FULL_TIME: 'Full time',
  PART_TIME: 'Part time',
  CONTRACT: 'Contract',
  INTERNSHIP: 'Internship',
  TEMPORARY: 'Temporary',
  DAILY_WAGE: 'Daily wage',
};

export const APPLICANT_DOCUMENT_STATUSES = [
  'PENDING_UPLOAD',
  'UPLOADED',
  'ACCEPTED',
  'REJECTED',
] as const;
export type ApplicantDocumentStatus = (typeof APPLICANT_DOCUMENT_STATUSES)[number];

export const MIN_APPLICANT_AGE = 18;
export const MAX_APPLICANT_AGE = 80;
