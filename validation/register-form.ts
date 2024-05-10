import { z } from "zod";

export const RegisterFormSchema = z.object({
    'first-name': z.string().min(2, { message: "Your first name should be more than 2 characters"}),
    'last-name': z.string().min(2, { message: "Your last name should be more than 2 characters"}),
    'email-address': z.string().min(2, { message: "Your email address should be more than 2 characters"}),
    'password': z.string(),
    'confirm-password': z.string()
}).refine((data) => data.password === data["confirm-password"], {
    message: "The passwords do not match",
    path: ["confirm-password"]
})

export type FormState = {
    errors?: {
        'first-name'?: string[],
        'last-name'?: string[],
        'email-address'?: string[],
    },
    message?: string
}