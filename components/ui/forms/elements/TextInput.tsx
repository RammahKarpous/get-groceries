import React from "react";

type TextInputProps = {
    forAttr?: string;
    label?: string;
    placeholder?: string,
    type: string,
    value: string
};

export default function TextInput({ forAttr, label, type, value, ...rest }: TextInputProps) {
    return (
        <div className="w-full">
            <label htmlFor={forAttr} className="font-normal">{label}</label>

            <input 
                type={type} 
                name={forAttr} 
                id={forAttr}
                defaultValue={value}
                className="border border-gray-light p-2 rounded-md w-full placeholder:text-sm"
                {...rest} />
        </div>
    );
}
