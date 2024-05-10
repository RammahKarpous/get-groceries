"use client";

import React, { useState } from "react";
import TextInput from "./elements/TextInput";
import { updateUser } from "@/actions/update-user-in-clerk";
import Button from "../Button";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { route } from "@/lib/route";
import Image from "next/image";
import CameraIcon from "@/components/icons/CameraIcon";

export default function UpdateProfileForm() {
    const [userData, setUserData] = useState({
        profileImage: '',
        firstName: "",
        lastName: "",
        emailAddress: ""
    });

    const getData = async () => {

        const user = await currentUser()
        
        setUserData({
            profileImage: String(user?.imageUrl),
            firstName: String(user?.firstName),
            lastName: String(user?.lastName),
            emailAddress: String(user?.emailAddresses[0].emailAddress)
        })

        return user;
    }

    return (
        <form action={updateUser} className="mx-4 flex flex-col gap-3 items-start">
            <div className="h-24 w-24 mx-auto my-6 bg-gray-200 rounded-full relative">
                <Image src={userData?.profileImage} width={64} height={64} alt={`${userData?.firstName}'s profile picture`} />
                <input type="file" name="profile-picture" id="profile-picture" className="hidden" />

                <label htmlFor="profile-picture">
                    <CameraIcon classes="absolute right-0 bottom-0 p-2 w-8 h-8 bg-black/80 rounded-full" color="white" />
                </label>
            </div>

            <TextInput type="text" forAttr="first-name" label="First name" value={userData?.firstName}  />
            <TextInput type="text" forAttr="last-name" label="Last name" value={userData?.lastName!} />
            <TextInput type="email" forAttr="email-address" label="Email address" value={userData?.emailAddress} />

            <Button type="primary" text="Save changes" />
        </form>
    );
}
