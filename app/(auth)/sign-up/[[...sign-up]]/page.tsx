import React from "react";
import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign up"
}

export default function SignUpPage() {
    return (
        <div className="size-full flex items-center justify-center mb-10">
            <SignUp path="/sign-up" />
        </div>
    );
}
