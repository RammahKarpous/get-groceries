"use server";

import { route } from "@/lib/route";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const updateUser = async (formData: FormData) => {
    const user = await currentUser()


    const params = {
        firstName: String(formData.get('first-name')),
        lastName: String(formData.get('last-name')),
        emailAddresses: {
            emailAddress: String(formData.get('email-address'))
        }
    }

    const response = await clerkClient.users.updateUser(user?.id!, params)

    console.log(response);
    revalidatePath(route.updateProfile)
}