"use server";

import { getUserFromSupabase } from "./getUserFromPrisma";
import prisma from "@/lib/db";

export async function getShoppingLists() {
    try {
        const user = await getUserFromSupabase();

        const shoppingLists = await prisma.shoppingList.findMany({
            where: {
                users: {
                    every: {
                        user: {
                            id: user?.id
                        }
                    }
                }
            }
        })

        return shoppingLists;
    } catch (error) {
        console.log(error)
    }
}
