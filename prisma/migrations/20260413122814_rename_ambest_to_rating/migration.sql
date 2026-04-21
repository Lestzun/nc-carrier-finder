/*
  Warnings:

  - You are about to drop the column `amBest` on the `Carrier` table. All the data in the column will be lost.
  - Added the required column `rating` to the `Carrier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrier" DROP COLUMN "amBest",
ADD COLUMN     "rating" TEXT NOT NULL;
