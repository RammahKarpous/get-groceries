"use server";

import prisma from "@/lib/db"
import { User } from "@/types/types"

export const addUserToDatabase = async (user: User) => {
    try {
        await prisma.user.create({
            data: { 
                user_id: user.user_id
            }
        })
    } catch (error) {
        console.log(error)
    }

    
}