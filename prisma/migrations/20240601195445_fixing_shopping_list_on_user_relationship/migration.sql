/*
  Warnings:

  - You are about to drop the column `clerkUid` on the `ShoppingList` table. All the data in the column will be lost.
  - The primary key for the `ShoppingListOnUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `shoppingListId` on the `ShoppingListOnUser` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ShoppingListOnUser` table. All the data in the column will be lost.
  - You are about to drop the column `clerkUId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `ShoppingListOnUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoppingList_id` to the `ShoppingListOnUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `ShoppingListOnUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShoppingListOnUser" DROP CONSTRAINT "ShoppingListOnUser_shoppingListId_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingListOnUser" DROP CONSTRAINT "ShoppingListOnUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_shipping_list_id_fkey";

-- DropIndex
DROP INDEX "User_clerkUId_key";

-- AlterTable
ALTER TABLE "ShoppingList" DROP COLUMN "clerkUid";

-- AlterTable
ALTER TABLE "ShoppingListOnUser" DROP CONSTRAINT "ShoppingListOnUser_pkey",
DROP COLUMN "shoppingListId",
DROP COLUMN "userId",
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "shoppingList_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "ShoppingListOnUser_pkey" PRIMARY KEY ("user_id", "shoppingList_id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerkUId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "Products" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "category" TEXT,
    "shipping_list_id" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- AddForeignKey
ALTER TABLE "ShoppingListOnUser" ADD CONSTRAINT "ShoppingListOnUser_shoppingList_id_fkey" FOREIGN KEY ("shoppingList_id") REFERENCES "ShoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListOnUser" ADD CONSTRAINT "ShoppingListOnUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_shipping_list_id_fkey" FOREIGN KEY ("shipping_list_id") REFERENCES "ShoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
