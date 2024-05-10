"use client";

import TextInput from "./elements/TextInput";
import Button from "../Button";
import { registerUser } from "@/actions/register-user";
import {  RegisterFormSchema } from "@/validation/register-form";

export default function RegisterForm() {
    // const [ state, action ] = useActionState(, undefined)

    const handleSubmit = async (formData: FormData) => {
        const newSubmission = RegisterFormSchema.safeParse({
            "first-name": formData.get("first-name"),
            "last-name": formData.get("last-name"),
            "email-address": formData.get("email-address"),
            password: formData.get("password"),
            "confirm-password": formData.get("confirm-password"),
        });
    
        if ( !newSubmission.success ) {
            console.log(newSubmission.error.issues);
    
            return
        }

        await registerUser(formData);
    };

    return (
        <form
            className="container px-4 flex flex-col gap-4 items-start mt-4" action={handleSubmit}>
            <TextInput type="text" forAttr="first-name" label="First name" />

            <TextInput type="text" forAttr="last-name" label="Last name" />
            <TextInput
                type="email"
                forAttr="email-address"
                label="Email address"
            />
            <TextInput type="password" forAttr="password" label="Password" />
            <TextInput
                type="password"
                forAttr="confirm-password"
                label="Confirm password"
            />
            <Button text="Register" type="primary" />
        </form>
    );
}
