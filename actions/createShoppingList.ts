"use server";

import prisma from "@/lib/db";
import { route } from "@/lib/route";
import { slugify } from "@/utils/slugify";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getUserFromSupabase } from "./getUserFromPrisma";

export default async function createShoppingList(formData: FormData) {
    const user = await getUserFromSupabase();

    try {
        await prisma.shoppingList.create({
            data: {
                name: String(formData.get("list-name")),
                slug: slugify(String(formData.get("list-name"))),
                users: {
                    create: [
                        {
                            role: String(formData.get("role")),
                            user: {
                                connect: {
                                    id: user?.id!,
                                }
                            }
                        },
                    ],
                },
            },
        });
    } catch (error) {
        console.log(error);
        return false
    }

    revalidatePath(route.shoppingLists);
    redirect(route.shoppingLists);
}
