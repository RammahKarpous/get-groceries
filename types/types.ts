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

export type User = {
    user_id: string,
}

export type TextInputProps = {
    forAttr?: string;
    label?: string;
    placeholder?: string,
    type: string,
    value?: string
};