import { z } from "zod";

export const QualificationsFormSchema = z.object({
  qualifications: z.string().min(1, {
    message: "Please select a qualification.",
  }),
});

export const InformationFormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().min(5).email({
    message: "Invalid email address.",
  }),
  telnumber: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .max(15, {
      message: "Phone number must be at most 15 characters.",
    })
    .regex(/^(\+?[1-9]\d{1,14}|0\d{9,14})$/, {
      message: "Invalid phone number.",
    }),
});
