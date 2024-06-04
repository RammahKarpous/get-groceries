"use server";

import prisma from "@/lib/db";
import { slugify } from "@/utils/slugify";
import { groupSchema } from "@/lib/schemas";
import { getUserFromSupabase } from "./getUserFromPrisma";
import { route } from "@/lib/route";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createGroup(newGroup: unknown) {
    
    try {
        const user = await getUserFromSupabase();

        const result = groupSchema.safeParse(newGroup);

        if (!result.success) {
            return {
                errors: result.error.errors
            };
        } 

        await prisma.group.create({
            data: {
                name: result.data['group-name'],
                slug: slugify(result.data['group-name']),
                users: {
                    create: [
                        {
                            role: result.data.role,
                            user: {
                                connect: {
                                    id: user?.id,
                                },
                            },
                        },
                    ],
                },
            },
        });
    } catch (error) {
        console.log(error);
    }

    revalidatePath(route.groups);
    redirect(route.groups);
}
