import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { counties } from "./counties";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// ──────────────────────────────────────────────────────────
// CARRIERS
// ──────────────────────────────────────────────────────────
const CARRIERS: Array<{
  name: string;
  rating: string;
  type: "Admitted" | "E&S";
  website: string | null;
  maxDwelling: number | null;
  minDwelling: number | null;
  maxHomeAge: number | null;
  maxRoofAge: number | null;
  generalUwNotes: string | null;
  writesPrimary: boolean;
  writesSecondary: boolean;
  writesShortTermRental: boolean;
  writesTenantOccupied: boolean;
}> = [
  {
    name: "Frontline",
    rating: "BBB+ (Kroll)",
    type: "Admitted",
    website: null,
    maxDwelling: 1000,
    minDwelling: 350,
    maxHomeAge: null,
    maxRoofAge: null,
    generalUwNotes:
      "Most competitive on homes <20 yrs. Does not write isolated islands (e.g., Bald Head). Less competitive in territory 120. $1M+ requires UW referral.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
  {
    name: "Allied Trust",
    rating: "A (Demotech)",
    type: "Admitted",
    website: null,
    maxDwelling: 3000,
    minDwelling: 200,
    maxHomeAge: null,
    maxRoofAge: 10,
    generalUwNotes:
      "Primary residences only. Max TIV $3M (not Cov A). Writes all coastal counties and territory codes. Metal roofs OK up to 15 yrs, but require 2% wind/hail deductible regardless of location. Within 5 miles of coast: 2% wind/hail deductible.",
    writesPrimary: true,
    writesSecondary: false,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
  {
    name: "Markel (J&J)",
    rating: "A (AM Best)",
    type: "Admitted",
    website: null,
    maxDwelling: 1500,
    minDwelling: 80,
    maxHomeAge: 60,
    maxRoofAge: 20,
    generalUwNotes:
      "50+ yrs requires UW approval. <40 yr wiring, plumbing & heating updates required. Does NOT write 1980s homes (use Markel RPS). Not eligible for tenant-occupied (use Markel RPS).",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: false,
  },
  {
    name: "Markel (RPS)",
    rating: "A (AM Best)",
    type: "Admitted",
    website: null,
    maxDwelling: 1500,
    minDwelling: 80,
    maxHomeAge: 60,
    maxRoofAge: 20,
    generalUwNotes:
      "50+ yrs requires UW approval. <40 yr wiring, plumbing & heating updates required. Writes 1980s homes and tenant-occupied risks.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: true,
  },
  {
    name: "American Integrity",
    rating: "A (Demotech)",
    type: "Admitted",
    website: null,
    maxDwelling: 6000,
    minDwelling: 200,
    maxHomeAge: 5,
    maxRoofAge: 10,
    generalUwNotes:
      "HO-5 ONLY (not HO-3). Strong on homes ≤5 yrs outside territory 120. Not competitive in territory 120 (wind can be excluded there but pricing is poor). Secondary OK only with central station alarm OR gated/limited-access community.",
    writesPrimary: true,
    writesSecondary: false,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
{
    name: "Heritage",
    rating: "A (Demotech)",
    type: "Admitted",
    website: null,
    maxDwelling: 2000,
    minDwelling: 200,
    maxHomeAge: 100,
    maxRoofAge: 10,
    generalUwNotes:
      "HO-3. Max home age 100 yrs (homes built before 1950 need proof of updates). Roof: shingle ≤10 yrs, metal ≤25 yrs. HVAC ≤20 yrs. Plumbing ≤50 yrs. Wind excluded in territory 120 (pair with NCIUA). Secondary OK only with central station fire AND burglar alarm.",
    writesPrimary: true,
    writesSecondary: false,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
  {
    name: "Safeport",
    rating: "A- (AM Best)",
    type: "Admitted",
    website: null,
    maxDwelling: 1250,
    minDwelling: 75,
    maxHomeAge: null,
    maxRoofAge: 20,
    generalUwNotes:
      "Writes all NC with wind included only (no wind-excluded product). Furnace must be updated within last 30 yrs. Within 5 miles of coast: 5% wind/hail deductible minimum. Writes primary, secondary, and rentals.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: true,
  },
  {
    name: "Occidental",
    rating: "A- (AM Best)",
    type: "Admitted",
    website: null,
    maxDwelling: 1250,
    minDwelling: 75,
    maxHomeAge: null,
    maxRoofAge: 20,
    generalUwNotes:
      "Writes all NC. Furnace must be updated within last 30 yrs. Within 5 miles of coast: 5% wind/hail deductible minimum. Writes primary, secondary, and rentals.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: true,
  },
  {
    name: "Hartford",
    rating: "A (AM Best)",
    type: "Admitted",
    website: null,
    maxDwelling: null,
    minDwelling: null,
    maxHomeAge: null,
    maxRoofAge: null,
    generalUwNotes: null,
    writesPrimary: true,
    writesSecondary: false,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
{
    name: "ICAT",
    rating: "A (AM Best)",
    type: "E&S",
    website: null,
    maxDwelling: 3000,
    minDwelling: 250,
    maxHomeAge: 56,
    maxRoofAge: 15,
    generalUwNotes:
      "HO-3. Access through ICAT wholesale broker (writes Victor Insurance). Roofs ≥16 yrs settle at ACV (not RCV). Dwellings ≥40 yrs require evidence of plumbing, heating, and electrical updates within last 15 yrs. NO additional amounts of insurance over $1M Cov A (Cov A is hard cap on settlement above $1M). maxHomeAge 56 is based on 2026 (1970+ cutoff) — bump yearly.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: true,
  },
{
    name: "Swyfft",
    rating: "A (AM Best)",
    type: "E&S",
    website: null,
    maxDwelling: 2000,
    minDwelling: 125,
    maxHomeAge: 76,
    maxRoofAge: 25,
    generalUwNotes:
      "Access through Swyfft wholesale broker. Swyfft fronts two products: Vave (primary) and Benchmark Specialty. VAVE: min $125K, built 1950+, primary/secondary/secondary+rentals up to 21 wks/tenant annual. BENCHMARK: min $150K, built within last 100 yrs, primary/secondary only. Roof age cap: asphalt shingles <15 yrs = RCV, hurricane shingles <20 yrs = RCV, standing seam metal <35 yrs = RCV. Roofs older than those thresholds drop to ACV; max roof age 25 yrs. maxHomeAge 76 is based on 2026 (Vave 1950+ cutoff) — bump yearly.",
    writesPrimary: true,
    writesSecondary: true,
    writesShortTermRental: true,
    writesTenantOccupied: true,
  },
  {
    name: "J&J",
    rating: "A (AM Best)",
    type: "E&S",
    website: null,
    maxDwelling: null,
    minDwelling: null,
    maxHomeAge: null,
    maxRoofAge: null,
    generalUwNotes: null,
    writesPrimary: true,
    writesSecondary: false,
    writesShortTermRental: false,
    writesTenantOccupied: false,
  },
];

// ──────────────────────────────────────────────────────────
// APPETITES
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
  // ─── Frontline ───
  { carrierName: "Frontline", countyName: "Brunswick",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },
  { carrierName: "Frontline", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "1%, 2%, or 5% wind/hail or named storm deductible", minDwelling: null, constructionNote: "Frame & masonry veneer (hardiplank gets MV credit)", maxProtectionClass: null, uwNotes: null },

  // ─── Markel (J&J) ───
  { carrierName: "Markel (J&J)", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Strong on Oak Island (28465). Ineligible in 28461 (Southport, Bald Head, parts of Boiling Springs Lakes)." },
  { carrierName: "Markel (J&J)", countyName: "New Hanover", appetiteLevel: "STRONG",   windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Strong in Wilmington." },
  { carrierName: "Markel (J&J)", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (J&J)", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (J&J)", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (J&J)", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (J&J)", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (J&J)", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Markel (RPS) ───
  { carrierName: "Markel (RPS)", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Strong on Oak Island (28465). Ineligible in 28461 (Southport, Bald Head, parts of Boiling Springs Lakes)." },
  { carrierName: "Markel (RPS)", countyName: "New Hanover", appetiteLevel: "STRONG",   windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Strong in Wilmington." },
  { carrierName: "Markel (RPS)", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (RPS)", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (RPS)", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (RPS)", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (RPS)", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Markel (RPS)", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "EXCLUDED", windHailDetail: "Wind excluded — pair with NCIUA Beach Plan", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Allied Trust ───
  { carrierName: "Allied Trust", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Most competitive 5–10 miles inland (Leland/Shallotte area)." },
  { carrierName: "Allied Trust", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Allied Trust", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Allied Trust", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Allied Trust", countyName: "Onslow",      appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Most competitive 5–10 miles inland." },
  { carrierName: "Allied Trust", countyName: "Pender",      appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Most competitive 5–10 miles inland." },
  { carrierName: "Allied Trust", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Allied Trust", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% deductible within 5 mi of coast or metal roofs",  minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Occidental ───
  { carrierName: "Occidental", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: "Most competitive toward SC line." },
  { carrierName: "Occidental", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Occidental", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Safeport ───
  { carrierName: "Safeport", countyName: "Brunswick",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Safeport", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "5% wind/hail deductible minimum within 5 mi of coast", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Swyfft ───
  { carrierName: "Swyfft", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Swyfft", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── American Integrity ───
  { carrierName: "American Integrity", countyName: "Brunswick",   appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "New Hanover", appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Carteret",    appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Dare",        appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Onslow",      appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Pender",      appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Currituck",   appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "American Integrity", countyName: "Beaufort",    appetiteLevel: "STRONG", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── Heritage ───
  { carrierName: "Heritage", countyName: "Brunswick",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "Heritage", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "2% wind/hail + AOP deductibles. Wind excluded in territory 120.", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },

  // ─── ICAT ───
  { carrierName: "ICAT", countyName: "Brunswick",   appetiteLevel: "STRONG",   windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "New Hanover", appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Carteret",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Dare",        appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Onslow",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Pender",      appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Currituck",   appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
  { carrierName: "ICAT", countyName: "Beaufort",    appetiteLevel: "MODERATE", windHailStance: "INCLUDED", windHailDetail: "AOP + wind/hail deductibles", minDwelling: null, constructionNote: null, maxProtectionClass: null, uwNotes: null },
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
      update: {
        rating: c.rating,
        type: c.type,
        website: c.website,
        maxDwelling: c.maxDwelling,
        minDwelling: c.minDwelling,
        maxHomeAge: c.maxHomeAge,
        maxRoofAge: c.maxRoofAge,
        generalUwNotes: c.generalUwNotes,
        writesPrimary: c.writesPrimary,
        writesSecondary: c.writesSecondary,
        writesShortTermRental: c.writesShortTermRental,
        writesTenantOccupied: c.writesTenantOccupied,
      },
      create: c,
    });
  }
  console.log(`Seeded ${CARRIERS.length} carriers.`);
}

async function seedAppetites() {
  console.log("Seeding appetites...");
  for (const a of APPETITES) {
    const carrier = await prisma.carrier.findUnique({ where: { name: a.carrierName } });
    const county = await prisma.county.findUnique({ where: { name: a.countyName } });

    if (!carrier) {
      console.error(`❌ Carrier not found: ${a.carrierName}`);
      continue;
    }
    if (!county) {
      console.error(`❌ County not found: ${a.countyName}`);
      continue;
    }

    await prisma.carrierCounty.upsert({
      where: { carrierId_countyId: { carrierId: carrier.id, countyId: county.id } },
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