"use server";

import { getUserFromPrisma } from "./getUserFromPrisma";
import prisma from "@/lib/db";

export async function getShoppingLists() {
    const user = await getUserFromPrisma();

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
};