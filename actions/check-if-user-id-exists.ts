"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { addUserToDatabase } from "./add-user-to-db";

export const checkIfUserIdExistsInDb = async () => {
    const user = await currentUser();
    const users = await prisma.user.findMany();

    const createUser = {
        clerkUId: user?.id!,
    }

    if ( users.length >= 0 ) {
        users.map(puser => {
            if ( user?.id === puser.clerkUId) { return false }
            else { addUserToDatabase(createUser) }
        })
    } else {
        addUserToDatabase(createUser)
    }

    return users;
};