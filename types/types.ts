import { RegisterFormSchema } from "@/validation/register-form"
import { z } from "zod"

export type IconProps = {
    color?: string,
    width?: number,
    height?: number,
    isActive?: boolean
    classes?: string
}

export type ButtonProps = {
    text: string,
    type: "primary" | "secondary",
}

export type RegisterFormProps = z.infer<typeof RegisterFormSchema>;

export type User = {
    id: string,
}