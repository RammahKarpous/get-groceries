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
    clerkUId: string,
}