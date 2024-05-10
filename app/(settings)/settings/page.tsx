import Button from "@/components/ui/Button";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

export default function Settings() {
    return (
        <div>
            <h1 className="font-bold text-3xl">Settings</h1>
            
            <SignOutButton>
                <Button type="secondary" text="Sign out" />
            </SignOutButton>
        </div>
    );
}
