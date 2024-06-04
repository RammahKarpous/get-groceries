import { z } from "zod"

export const groupSchema = z.object({
    role: z.string().min(2, {message: "Role must be at least 2 characters long"}),
    'group-name':  z.string().min(2, {message: "Group name must be at least 2 characters long"}),
    slug: z.string().min(2, {message: "Group name must be at least 2 characters long"}),
})