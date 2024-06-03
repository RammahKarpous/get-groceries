"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { addUserToDatabase } from "./addUserToDatabase";

export const checkIfUserIdExistsInDb = async () => {
    try {
        const user = await currentUser();
        const users = await prisma.user.findMany();

        const createUser = {
            user_id: user?.id!,
        };

        if (users.length >= 1) {
            const userId = users.find(userInPrisma => user?.id === userInPrisma?.user_id);

            if (!userId) {
                console.log("User does not exists");
                addUserToDatabase(createUser);
            }
        } else {
            addUserToDatabase(createUser);
        }

        return users;
    } catch (err) {
        console.log(err);
    }
};

// griftdijk12
