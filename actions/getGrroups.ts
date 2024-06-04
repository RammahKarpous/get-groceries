import prisma from "@/lib/db";
import { getUserFromSupabase } from "./getUserFromPrisma";

export async function getGroups() {
    try {
        const user = await getUserFromSupabase();

        const groups = await prisma.group.findMany({
            where: {
                users: {
                    every: {
                        user: {
                            id: user?.id,
                        },
                    },
                },
            },
        });

        return groups;
    } catch (error) {
        console.log(error);
    }
}
