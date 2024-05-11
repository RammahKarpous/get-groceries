import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { addUserToDatabase } from "./add-user-to-db";

export const checkIfUserIdExistsInDb = async () => {
    const user = await currentUser();
    const users = await prisma.user.findMany();

    const createUser = {
        id: user?.id!,
    }

    if ( users.length !== 0 ) {
        users.map(puser => {
            if ( user?.id === puser.id) { return false }
            else { addUserToDatabase(createUser) }
        })
    } else {
        addUserToDatabase(createUser)
    }

    return users;
};