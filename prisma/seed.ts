import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { counties } from "./counties";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// ──────────────────────────────────────────────────────────
// CARRIERS — populated in Step 5
// ──────────────────────────────────────────────────────────
const CARRIERS: Array<{
  name: string;
  rating: string;
  type: "Admitted" | "E&S";
  website: string | null;
}> = [
  { name: "Frontline",          rating: "BBB+ (Kroll)",    type: "Admitted", website: null },
  { name: "Allied Trust",       rating: "A (Demotech)",    type: "Admitted", website: null },
  { name: "Markel (J&J)",       rating: "A (AM Best)",     type: "Admitted", website: null },
  { name: "Markel (RPS)",       rating: "A (AM Best)",     type: "Admitted", website: null },
  { name: "American Integrity", rating: "A (Demotech)",    type: "Admitted", website: null },
  { name: "Heritage",           rating: "A (Demotech)",    type: "Admitted", website: null },
  { name: "Safeport",           rating: "A- (AM Best)",    type: "Admitted", website: null },
  { name: "Occidental",         rating: "A- (AM Best)",    type: "Admitted", website: null },
  { name: "Hartford",           rating: "A (AM Best)",     type: "Admitted", website: null },
  { name: "ICAT",               rating: "A (AM Best)",     type: "E&S",      website: null },
  { name: "Swyfft",             rating: "A (AM Best)",     type: "E&S",      website: null },
  { name: "J&J",                rating: "A (AM Best)",     type: "E&S",      website: null },
];

// ──────────────────────────────────────────────────────────
// APPETITES — populated in Step 7
// ──────────────────────────────────────────────────────────
const APPETITES: Array<{
  carrierName: string;
  countyName: string;
  appetiteLevel: "STRONG" | "MODERATE" | "LIMITED";
  windHailStance: "INCLUDED" | "EXCLUDED" | "PERCENTAGE_DEDUCTIBLE";
  windHailDetail: string | null;
  minDwelling: number | null;
  constructionNote: string | null;
  maxProtectionClass: number | null;
  uwNotes: string | null;
}> = [
  // empty for now
];

// ──────────────────────────────────────────────────────────
// SEED FUNCTIONS
// ──────────────────────────────────────────────────────────
async function seedCounties() {
  console.log("Seeding counties...");
  for (const county of counties) {
    await prisma.county.upsert({
      where: { name: county.name },
      update: { isBeachPlan: county.isBeachPlan },
      create: county,
    });
  }
  console.log(`Seeded ${counties.length} counties.`);
}

async function seedCarriers() {
  console.log("Seeding carriers...");
  for (const c of CARRIERS) {
    await prisma.carrier.upsert({
      where: { name: c.name },
      update: { rating: c.rating, type: c.type, website: c.website },
      create: c,
    });
  }
  console.log(`Seeded ${CARRIERS.length} carriers.`);
}

async function seedAppetites() {
  console.log("Seeding appetites...");
  for (const a of APPETITES) {
    const carrier = await prisma.carrier.findUnique({
      where: { name: a.carrierName },
    });
    const county = await prisma.county.findUnique({
      where: { name: a.countyName },
    });

    if (!carrier) {
      console.error(`❌ Carrier not found: ${a.carrierName}`);
      continue;
    }
    if (!county) {
      console.error(`❌ County not found: ${a.countyName}`);
      continue;
    }

    await prisma.carrierCounty.upsert({
      where: {
        carrierId_countyId: { carrierId: carrier.id, countyId: county.id },
      },
      update: {
        appetiteLevel: a.appetiteLevel,
        windHailStance: a.windHailStance,
        windHailDetail: a.windHailDetail,
        minDwelling: a.minDwelling,
        constructionNote: a.constructionNote,
        maxProtectionClass: a.maxProtectionClass,
        uwNotes: a.uwNotes,
      },
      create: {
        carrierId: carrier.id,
        countyId: county.id,
        appetiteLevel: a.appetiteLevel,
        windHailStance: a.windHailStance,
        windHailDetail: a.windHailDetail,
        minDwelling: a.minDwelling,
        constructionNote: a.constructionNote,
        maxProtectionClass: a.maxProtectionClass,
        uwNotes: a.uwNotes,
      },
    });
  }
  console.log(`Seeded ${APPETITES.length} appetite records.`);
}

// ──────────────────────────────────────────────────────────
// MAIN
// ──────────────────────────────────────────────────────────
async function main() {
  await seedCounties();
  await seedCarriers();
  await seedAppetites();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });