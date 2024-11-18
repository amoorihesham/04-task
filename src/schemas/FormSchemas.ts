import { z } from 'zod';

const formSchema = z.object({
  login_number: z
    .string({ message: 'Login Number Required' })
    .min(11, {
      message: 'Phone Number Format ( +201000000000 ) 13 digits',
    })
    .max(13, { message: 'Phone Number Format ( +201000000000 ) 13 digits' })
    .regex(/^[+]\d{1}\d{11}/gm, { message: 'Phone Number Format ( +201000000000 )' }),
  contact_number: z
    .string()
    .min(11, {
      message: 'Phone Number Format ( +201000000000 ) 13 digits',
    })
    .max(13, {
      message: 'Phone Number Format ( +201000000000 ) 13 digits',
    })
    .regex(/^[+]\d{1}\d{11}/gm, { message: 'Phone Number Format ( +201000000000 )' }),
  contact_email: z.string().email(),
  contact_name: z
    .string()
    .min(3, {
      message: 'Name Must be at least 3 chars',
    })
    .max(16, {
      message: 'Name Must be at most 16 chars',
    }),
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
      .max(19)
      .regex(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/gm, {
        message: 'Card Number Format 0000-0000-0000-0000',
      }),
    cardHolder: z.string(),
  }),
});

export default formSchema;
