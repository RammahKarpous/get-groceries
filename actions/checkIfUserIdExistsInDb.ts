"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { addUserToDatabase } from "./addUserToDatabase";

export const checkIfUserIdExistsInDb = async () => {
    const user = await currentUser();
    const users = await prisma.user.findMany();

    const createUser = {
        user_id: user?.id!,
    }


    if ( users.length >= 1 ) {
        users.map(userInPrisma => {
            if ( user?.id === userInPrisma?.user_id) {
                return false 
            }
            else { 
                addUserToDatabase(createUser) 
            }
        })
    } else {
        addUserToDatabase(createUser)
    }

    return users;
};

// griftdijk12