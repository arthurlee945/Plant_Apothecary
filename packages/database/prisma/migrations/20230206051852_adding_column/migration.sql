/*
  Warnings:

  - You are about to drop the column `image` on the `Plant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[];
