import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Sign in"
}

export default function SignInPage() {
    return (
        <div className="size-full flex items-center justify-center">
            <SignIn path="/sign-in" />
        </div>
    );
}
