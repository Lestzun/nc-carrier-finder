import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const APPETITE_ORDER: Record<string, number> = {
  STRONG: 0,
  MODERATE: 1,
  LIMITED: 2,
};

const OCCUPANCY_FIELD_MAP = {
  primary: "writesPrimary",
  secondary: "writesSecondary",
  shortTermRental: "writesShortTermRental",
  tenantOccupied: "writesTenantOccupied",
} as const;

type OccupancyKey = keyof typeof OCCUPANCY_FIELD_MAP;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const countyName = searchParams.get("county");
    const occupancyParam = searchParams.get("occupancy");

    // Validate county
    if (!countyName) {
      return NextResponse.json(
        { error: "county query parameter is required" },
        { status: 400 }
      );
    }

    // Validate occupancy if provided
    if (occupancyParam && !(occupancyParam in OCCUPANCY_FIELD_MAP)) {
      return NextResponse.json(
        {
          error: `Invalid occupancy. Must be one of: ${Object.keys(
            OCCUPANCY_FIELD_MAP
          ).join(", ")}`,
        },
        { status: 400 }
      );
    }
    const occupancy = occupancyParam as OccupancyKey | null;

    // Look up county by exact name match
    const county = await prisma.county.findUnique({
      where: { name: countyName },
    });

    if (!county) {
      return NextResponse.json(
        { error: `County not found: ${countyName}` },
        { status: 404 }
      );
    }

    // Build optional carrier filter for occupancy
    const carrierFilter = occupancy
      ? { [OCCUPANCY_FIELD_MAP[occupancy]]: true }
      : undefined;

    // Query CarrierCounty records, joining Carrier
    const records = await prisma.carrierCounty.findMany({
      where: {
        countyId: county.id,
        ...(carrierFilter ? { carrier: carrierFilter } : {}),
      },
      include: { carrier: true },
    });

    // Flatten each record into a single response object
    const carriers = records
      .map((r) => ({
        id: r.id,
        carrierId: r.carrierId,
        // carrier-level
        name: r.carrier.name,
        rating: r.carrier.rating,
        type: r.carrier.type,
        website: r.carrier.website,
        carrierMaxDwelling: r.carrier.maxDwelling,
        carrierMinDwelling: r.carrier.minDwelling,
        maxHomeAge: r.carrier.maxHomeAge,
        maxRoofAge: r.carrier.maxRoofAge,
        generalUwNotes: r.carrier.generalUwNotes,
        writesPrimary: r.carrier.writesPrimary,
        writesSecondary: r.carrier.writesSecondary,
        writesShortTermRental: r.carrier.writesShortTermRental,
        writesTenantOccupied: r.carrier.writesTenantOccupied,
        // county-level
        appetiteLevel: r.appetiteLevel,
        windHailStance: r.windHailStance,
        windHailDetail: r.windHailDetail,
        countyMinDwelling: r.minDwelling,
        constructionNote: r.constructionNote,
        maxProtectionClass: r.maxProtectionClass,
        countyUwNotes: r.uwNotes,
        // computed
        effectiveMinDwelling: r.minDwelling ?? r.carrier.minDwelling,
        // metadata
        updatedAt: r.updatedAt,
      }))
      .sort((a, b) => {
        const aOrder = APPETITE_ORDER[a.appetiteLevel] ?? 99;
        const bOrder = APPETITE_ORDER[b.appetiteLevel] ?? 99;
        if (aOrder !== bOrder) return aOrder - bOrder;
        return a.name.localeCompare(b.name);
      });

    return NextResponse.json({
      county: {
        id: county.id,
        name: county.name,
        isBeachPlan: county.isBeachPlan,
      },
      count: carriers.length,
      carriers,
    });
  } catch (error) {
    console.error("[/api/search] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}