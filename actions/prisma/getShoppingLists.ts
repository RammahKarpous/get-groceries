"use server";

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

// export async function getUserFromPrisma() {
//     const user = await currentUser();
//     const prismaUser = await prisma.user.findUnique({
//         where: {
//             user_id: user?.id!
//         }
//     })

//     return prismaUser;
// }