import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function getUserFromPrisma() {
    const user = await currentUser();
    const prismaUser = await prisma.user.findUnique({
        where: {
            user_id: user?.id!
        }
    })

    return prismaUser;
}