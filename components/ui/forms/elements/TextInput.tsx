import { TextInputProps } from "@/types/types";
import React from "react";

export default function TextInput({ forAttr, label, type, value, ...rest }: TextInputProps) {
    return (
        <div className={`w-full ${type === 'hidden' ? "invisible" : ""}`}>
            {(forAttr && label ) && (
                <label htmlFor={forAttr} className="font-normal">{label}</label>
            )}

            <input 
                type={type} 
                name={forAttr} 
                id={forAttr}
                defaultValue={value}
                autoComplete="false"
                className="border border-gray-light p-2 rounded-md w-full placeholder:text-sm"
                {...rest} />
        </div>
    );
}
