import ContentWrapper from "@/components/ui/ContentWrapper";
import Header from "@/components/ui/Header";
import UpdateProfileForm from "@/components/ui/forms/UpdateProfileForm";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

export default function UpdateProfile() {
    return (
        <ContentWrapper title="Profile page">
            <UpdateProfileForm />
        </ContentWrapper>
    );
}
