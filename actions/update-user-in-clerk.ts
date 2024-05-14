"use server";

import { route } from "@/lib/route";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const updateUser = async (formData: FormData) => {
    const user = await currentUser()

    const params = {
        firstName: String(formData.get('first-name')),
        lastName: String(formData.get('last-name')),
        emailAddresses: {
            emailAddress: String(formData.get('email-address'))
        }
    }

    await clerkClient.users.updateUser(user?.id!, params)

    revalidatePath(route.updateProfile);
    redirect(route.profile);
}