import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

/**
 * This function is used in other parts of the application, to handle Supabase operations.
 */
export async function getUserFromSupabase() {
    try {
        const user = await currentUser();
        
        const prismaUser = await prisma.user.findUnique({
            where: {
                user_id: user?.id!,
            },
        });

        return prismaUser;
    } catch (error) {
        console.log(error);
    }
}
