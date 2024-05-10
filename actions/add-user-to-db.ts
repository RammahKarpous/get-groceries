import prisma from "@/lib/db"
import { User } from "@/types/types"

export const addUserToDatabase = async (user: User) => {
    await prisma.user.create({
        data: { 
            id: user.id, 
        }
    })
}