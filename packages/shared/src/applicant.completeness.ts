export const PROFILE_SECTIONS = [
  { id: 'personal', label: 'Personal details', weight: 20 },
  { id: 'location', label: 'Home location & branch', weight: 20 },
  { id: 'skills', label: 'Skills', weight: 15 },
  { id: 'education', label: 'Education', weight: 10 },
  { id: 'experience', label: 'Work experience', weight: 10 },
  { id: 'preferences', label: 'Job preferences', weight: 10 },
  { id: 'documents', label: 'Required documents', weight: 10 },
  { id: 'languages', label: 'Languages', weight: 5 },
] as const;
export type ProfileSectionId = (typeof PROFILE_SECTIONS)[number]['id'];

export const ACTIVATION_SECTIONS: readonly ProfileSectionId[] = [
  'personal',
  'location',
  'documents',
];

export interface ProfileFacts {
  hasPersonal: boolean;
  hasLocation: boolean;
  skillCount: number;
  educationCount: number;
  experienceCount: number;
  hasNoExperience: boolean;
  hasPreferences: boolean;
  missingRequiredDocuments: number;
  languageCount: number;
}

export interface Completeness {
  percent: number;
  sections: { id: ProfileSectionId; label: string; weight: number; done: boolean }[];
  activationMissing: ProfileSectionId[];
}

export function computeCompleteness(facts: ProfileFacts): Completeness {
  const done: Record<ProfileSectionId, boolean> = {
    personal: facts.hasPersonal,
    location: facts.hasLocation,
    skills: facts.skillCount > 0,
    education: facts.educationCount > 0,
    experience: facts.experienceCount > 0 || facts.hasNoExperience,
    preferences: facts.hasPreferences,
    documents: facts.missingRequiredDocuments === 0,
    languages: facts.languageCount > 0,
  };
  const sections = PROFILE_SECTIONS.map((s) => ({ ...s, done: done[s.id] }));
  return {
    percent: sections.reduce((sum, s) => sum + (s.done ? s.weight : 0), 0),
    sections,
    activationMissing: ACTIVATION_SECTIONS.filter((id) => !done[id]),
  };
}
