import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(3, { message: "Enter your name" }),
  email: z.string().email({ message: "Enter a valid email" }),
  message: z.string().min(10, { message: "Enter a message" }),
})

export type ContactData = z.infer<typeof ContactSchema>;
