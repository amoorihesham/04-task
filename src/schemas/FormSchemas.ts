import { z } from 'zod';

const formSchema = z.object({
  login_number: z
    .string()
    .min(11)
    .max(13)
    .regex(/^[+]\d{1}\d{11}/gm, { message: 'Phone Number Format ( +201000000000 )' }),
  contact_number: z
    .string()
    .min(11)
    .max(13)
    .regex(/^[+]\d{1}\d{11}/gm, { message: 'Phone Number Format ( +201000000000 )' }),
  contact_email: z.string().email(),
  contact_name: z.string().min(3),
  billing_address: z.object({
    address: z.string(),
    nr: z.string(),
    country: z.string(),
    postalCode: z.string(),
    city: z.string(),
  }),
  monthly_sessions: z.number().min(8).max(16),
  payment: z.object({
    method: z.string(),
    cardNumber: z
      .string()
      .min(16)
      .max(16)
      .regex(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/gm, {
        message: 'Card Number Format 0000-0000-0000-0000',
      }),
    cardHolder: z.string(),
  }),
});

export default formSchema;
