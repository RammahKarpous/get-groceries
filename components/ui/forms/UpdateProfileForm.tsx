import React from "react";
import TextInput from "./elements/TextInput";
import { updateUser } from "@/actions/update-user-in-clerk";
import Button from "../Button";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import CameraIcon from "@/components/icons/CameraIcon";

export default async function UpdateProfileForm() {
    const user = await currentUser()

    return (
        <form action={updateUser} className="mx-4 flex flex-col gap-3 items-start">
            <div className="h-24 w-24 mx-auto my-6 bg-gray-200 rounded-full relative">
                <Image src={user?.imageUrl!} width={96} height={96} alt={`${user?.firstName!}'s profile picture`} className="rounded-full" />
                <input type="file" name="profile-picture" id="profile-picture" className="hidden" />

                <label htmlFor="profile-picture">
                    <CameraIcon classes="absolute right-0 bottom-0 p-2 w-8 h-8 bg-black/80 rounded-full" color="white" />
                </label>
            </div>

            <TextInput type="text" forAttr="first-name" label="First name" value={user?.firstName!}  />
            <TextInput type="text" forAttr="last-name" label="Last name" value={user?.lastName!} />
            <TextInput type="email" forAttr="email-address" label="Email address" value={user?.emailAddresses[0].emailAddress!} />

            <Button type="primary" text="Save changes" />
        </form>
    );
}
