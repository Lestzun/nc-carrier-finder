-- CreateTable
CREATE TABLE "County" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isCoastal" BOOLEAN NOT NULL DEFAULT false,
    "isBeachPlan" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "County_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Carrier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarrierCounty" (
    "id" SERIAL NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "countyId" INTEGER NOT NULL,

    CONSTRAINT "CarrierCounty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "County_name_key" ON "County"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Carrier_name_key" ON "Carrier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CarrierCounty_carrierId_countyId_key" ON "CarrierCounty"("carrierId", "countyId");

-- AddForeignKey
ALTER TABLE "CarrierCounty" ADD CONSTRAINT "CarrierCounty_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarrierCounty" ADD CONSTRAINT "CarrierCounty_countyId_fkey" FOREIGN KEY ("countyId") REFERENCES "County"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
