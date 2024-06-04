import { z } from "zod";
import { groupSchema } from "./schemas";

// Objects
export type User = {
    user_id: string;
};

export type Group = z.infer<typeof groupSchema>;

// Probs
export type IconProps = {
    color?: string;
    width?: number;
    height?: number;
    isActive?: boolean;
    classes?: string;
};

export type ButtonProps = {
    text: string;
    type: "primary" | "secondary";
};

export type TextInputProps = {
    forAttr?: string;
    label?: string;
    placeholder?: string;
    type: string;
    value?: string;
};

export interface ListProps {
    name: string;
    slug: string;
};
