import React from "react";

// Import types
import { ButtonProps } from "@/types/types";

export default function Button({ text, type }: ButtonProps) {

    const primaryStyles: string = 'bg-orange text-black';
    const secondaryStyles: string = 'bg-gray-light text-black';
    
    const styles = type == "primary" ? primaryStyles : secondaryStyles
    
    return <button className={`px-6 py-2 rounded-md ${styles}`}>{text}</button>;
}
