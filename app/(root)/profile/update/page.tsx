import Header from "@/components/ui/Header";
import UpdateProfileForm from "@/components/ui/forms/UpdateProfileForm";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

export default function UpdateProfile() {
    return (
        <div>
            <SignedIn>
                <Header>Profile page</Header>
            </SignedIn>

            <UpdateProfileForm />
        </div>
    );
}
