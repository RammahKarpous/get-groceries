"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { addUserToDatabase } from "./addUserToDatabase";

/**
 * User authentication is handled by Clerk and the database is hosted on Supabase.
 * Therefore I have created a Users table on Supabase handle relationships between the users and the shopping lists, 
 * user preferences etc.
 * 
 * @returns void
 */
export const checkIfUserIdExistsInDb = async () => {
    try {
        const user = await currentUser();
        const users = await prisma.user.findMany();

        const createUser = {
            user_id: user?.id!,
        };

        if (users.length >= 1) {
            const userId = users.find(userInPrisma => user?.id === userInPrisma?.user_id);
            !userId ?? addUserToDatabase(createUser);
        } else {
            addUserToDatabase(createUser);
        }
    } catch (err) {
        console.log(err);
    }
};