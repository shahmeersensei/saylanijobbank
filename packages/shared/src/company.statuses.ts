export const COMPANY_STATUSES = [
  'DRAFT',
  'SUBMITTED',
  'UNDER_VERIFICATION',
  'INFO_REQUESTED',
  'RESUBMITTED',
  'VERIFIED',
  'REJECTED',
  'SUSPENDED',
] as const;
export type CompanyStatus = (typeof COMPANY_STATUSES)[number];

export const COMPANY_STATUS_LABELS: Record<CompanyStatus, string> = {
  DRAFT: 'Not submitted yet',
  SUBMITTED: 'Waiting for a verifier',
  UNDER_VERIFICATION: 'Under verification',
  INFO_REQUESTED: 'More information needed',
  RESUBMITTED: 'Resubmitted',
  VERIFIED: 'Verified',
  REJECTED: 'Not approved',
  SUSPENDED: 'Suspended',
};

export const PUBLIC_COMPANY_STATUSES = ['VERIFIED', 'SUSPENDED'] as const satisfies CompanyStatus[];

export const VERIFICATION_STATES = [
  'SUBMITTED',
  'UNDER_VERIFICATION',
  'INFO_REQUESTED',
  'RESUBMITTED',
  'VERIFIED',
  'REJECTED',
] as const;
export type VerificationState = (typeof VERIFICATION_STATES)[number];

export const OPEN_VERIFICATION_STATES = [
  'SUBMITTED',
  'UNDER_VERIFICATION',
  'INFO_REQUESTED',
  'RESUBMITTED',
] as const satisfies VerificationState[];

export const SLA_RUNNING_STATES = [
  'SUBMITTED',
  'UNDER_VERIFICATION',
  'RESUBMITTED',
] as const satisfies VerificationState[];

export const VERIFICATION_EVENTS = [
  'SUBMIT',
  'CLAIM',
  'RELEASE',
  'DECLARE_CONFLICT',
  'ASSIGN',
  'REQUEST_INFO',
  'RESUBMIT',
  'VERIFY',
  'REJECT',
  'SUSPEND',
  'REINSTATE',
] as const;
export type VerificationEvent = (typeof VERIFICATION_EVENTS)[number];

export const VERIFICATION_EVENT_LABELS: Record<VerificationEvent, string> = {
  SUBMIT: 'Submitted for verification',
  CLAIM: 'Picked up by a verifier',
  RELEASE: 'Returned to the queue',
  DECLARE_CONFLICT: 'Verifier declared a conflict of interest',
  ASSIGN: 'Assigned to a verifier',
  REQUEST_INFO: 'More information requested',
  RESUBMIT: 'Employer sent the information',
  VERIFY: 'Verified',
  REJECT: 'Not approved',
  SUSPEND: 'Suspended',
  REINSTATE: 'Reinstated',
};
