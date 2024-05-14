import Button from "@/components/ui/Button";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function Settings() {
    return (
        <ContentWrapper title="Settings">
            
            <SignOutButton>
                <Button type="secondary" text="Sign out" />
            </SignOutButton>
        </ContentWrapper>
    );
}
