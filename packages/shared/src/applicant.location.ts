import { z } from 'zod';
import { masterDataCodeSchema } from './master-data';

export const PAKISTAN_BOUNDS = { minLat: 23.5, maxLat: 37.2, minLng: 60.8, maxLng: 77.9 } as const;

export const pakistanPointSchema = z
  .object({ lat: z.number().min(-90).max(90), lng: z.number().min(-180).max(180) })
  .refine(
    ({ lat, lng }) =>
      lat >= PAKISTAN_BOUNDS.minLat &&
      lat <= PAKISTAN_BOUNDS.maxLat &&
      lng >= PAKISTAN_BOUNDS.minLng &&
      lng <= PAKISTAN_BOUNDS.maxLng,
    'Pick a location in Pakistan',
  );

export const applicantLocationSchema = z.object({
  location: pakistanPointSchema,
  addressLine: z
    .string('Enter your address')
    .trim()
    .min(5, 'Enter your address (house, street, block)')
    .max(300),
  cityCode: masterDataCodeSchema,
  areaCode: masterDataCodeSchema.nullish().transform((v) => v ?? null),
  branchId: z.uuid('Choose a branch'),
});
export type ApplicantLocationInput = z.infer<typeof applicantLocationSchema>;

export const branchOptionsQuery = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
});
