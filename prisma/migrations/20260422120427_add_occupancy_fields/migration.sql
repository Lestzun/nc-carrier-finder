-- AlterTable
ALTER TABLE "Carrier" ADD COLUMN     "writesPrimary" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "writesSecondary" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "writesShortTermRental" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "writesTenantOccupied" BOOLEAN NOT NULL DEFAULT false;
