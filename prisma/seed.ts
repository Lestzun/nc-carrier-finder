import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { counties } from "./counties";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
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

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });