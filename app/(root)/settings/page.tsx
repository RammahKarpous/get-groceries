import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import React from "react";

export default function Settings() {
    return (
        <div className="flex flex-col justify-between items-start h-screen py-32">
            <SignedIn>
                <Header>Settings</Header>
            </SignedIn>
            
            <SignOutButton>
                <Button type="secondary" text="Sign out" />
            </SignOutButton>
        </div>
    );
}
