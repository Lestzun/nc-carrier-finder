/*
  Warnings:

  - Added the required column `amBest` to the `Carrier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appetiteLevel` to the `CarrierCounty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `CarrierCounty` table without a default value. This is not possible if the table is not empty.
  - Added the required column `windHailStance` to the `CarrierCounty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carrier" ADD COLUMN     "amBest" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'Admitted',
ADD COLUMN     "website" TEXT;

-- AlterTable
ALTER TABLE "CarrierCounty" ADD COLUMN     "appetiteLevel" TEXT NOT NULL,
ADD COLUMN     "constructionNote" TEXT,
ADD COLUMN     "maxProtectionClass" INTEGER,
ADD COLUMN     "minDwelling" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uwNotes" TEXT,
ADD COLUMN     "windHailDetail" TEXT,
ADD COLUMN     "windHailStance" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "CarrierCounty_countyId_idx" ON "CarrierCounty"("countyId");
