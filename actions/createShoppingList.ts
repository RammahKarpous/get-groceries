"use server"

import prisma from "@/lib/db"
import { route } from "@/lib/route"
import { slugify } from "@/utils/slugify"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createShoppingList = async (formData: FormData) => {
    const user = await currentUser()
    
    await prisma.shoppingList.create({
        data: {
            user_id: user?.id!,
            name: String(formData.get('list-name')),
            slug: slugify(String(formData.get('list-name')))
        }
    })

    revalidatePath('/shopping-lists');
    redirect(route.shoppingLists);
}