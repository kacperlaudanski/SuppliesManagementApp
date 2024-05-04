/*
  Warnings:

  - You are about to drop the `Folder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FolderToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_FolderToProduct" DROP CONSTRAINT "_FolderToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_FolderToProduct" DROP CONSTRAINT "_FolderToProduct_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Folder";

-- DropTable
DROP TABLE "_FolderToProduct";
