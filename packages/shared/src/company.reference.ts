export const LEGAL_STRUCTURES = [
  'SOLE_PROPRIETOR',
  'PARTNERSHIP',
  'PRIVATE_LIMITED',
  'PUBLIC_LIMITED',
  'NGO_TRUST',
] as const;
export type LegalStructure = (typeof LEGAL_STRUCTURES)[number];

export const LEGAL_STRUCTURE_LABELS: Record<LegalStructure, string> = {
  SOLE_PROPRIETOR: 'Sole proprietorship',
  PARTNERSHIP: 'Partnership (AOP)',
  PRIVATE_LIMITED: 'Private limited company',
  PUBLIC_LIMITED: 'Public limited company',
  NGO_TRUST: 'NGO, trust or society',
};

export const DEFAULT_COMPANY_DOCUMENT_REQUIREMENTS: Record<LegalStructure, readonly string[]> = {
  SOLE_PROPRIETOR: ['AUTHORISED_PERSON_CNIC', 'ADDRESS_PROOF', 'NTN_CERTIFICATE'],
  PARTNERSHIP: [
    'AUTHORISED_PERSON_CNIC',
    'ADDRESS_PROOF',
    'NTN_CERTIFICATE',
    'BUSINESS_REGISTRATION',
  ],
  PRIVATE_LIMITED: [
    'AUTHORISED_PERSON_CNIC',
    'ADDRESS_PROOF',
    'SECP_REGISTRATION',
    'NTN_CERTIFICATE',
  ],
  PUBLIC_LIMITED: [
    'AUTHORISED_PERSON_CNIC',
    'ADDRESS_PROOF',
    'SECP_REGISTRATION',
    'NTN_CERTIFICATE',
  ],
  NGO_TRUST: [
    'AUTHORISED_PERSON_CNIC',
    'ADDRESS_PROOF',
    'BUSINESS_REGISTRATION',
    'AUTHORISATION_LETTER',
  ],
};

export const COMPANY_SIZE_BANDS = ['1_10', '11_50', '51_200', '201_500', '500_PLUS'] as const;
export type CompanySizeBand = (typeof COMPANY_SIZE_BANDS)[number];

export const COMPANY_SIZE_LABELS: Record<CompanySizeBand, string> = {
  '1_10': '1–10 employees',
  '11_50': '11–50 employees',
  '51_200': '51–200 employees',
  '201_500': '201–500 employees',
  '500_PLUS': 'More than 500 employees',
};

export const COMPANY_LOCATION_KINDS = ['HQ', 'SITE'] as const;
export type CompanyLocationKind = (typeof COMPANY_LOCATION_KINDS)[number];

export const COMPANY_DOCUMENT_STATUSES = ['PENDING_UPLOAD', 'UPLOADED', 'INFECTED'] as const;
export type CompanyDocumentStatus = (typeof COMPANY_DOCUMENT_STATUSES)[number];

export const DOCUMENT_REVIEW_STATUSES = ['PENDING', 'ACCEPTED', 'REJECTED'] as const;
export type DocumentReviewStatus = (typeof DOCUMENT_REVIEW_STATUSES)[number];

export const COMPANY_MEMBER_ROLES = ['OWNER'] as const;
export type CompanyMemberRole = (typeof COMPANY_MEMBER_ROLES)[number];
