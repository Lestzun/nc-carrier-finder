export type AppetiteLevel = "STRONG" | "MODERATE" | "LIMITED";

export type WindHailStance =
  | "INCLUDED"
  | "EXCLUDED"
  | "PERCENTAGE_DEDUCTIBLE";

export type Occupancy =
  | "primary"
  | "secondary"
  | "shortTermRental"
  | "tenantOccupied";

export interface CountyInfo {
  id: number;
  name: string;
  isBeachPlan: boolean;
}

export interface CarrierResult {
  id: number;
  carrierId: number;

  // carrier-level
  name: string;
  rating: string;
  type: string;
  website: string | null;
  carrierMaxDwelling: number | null;
  carrierMinDwelling: number | null;
  maxHomeAge: number | null;
  maxRoofAge: number | null;
  generalUwNotes: string | null;
  writesPrimary: boolean;
  writesSecondary: boolean;
  writesShortTermRental: boolean;
  writesTenantOccupied: boolean;

  // county-level
  appetiteLevel: AppetiteLevel;
  windHailStance: WindHailStance;
  windHailDetail: string | null;
  countyMinDwelling: number | null;
  constructionNote: string | null;
  maxProtectionClass: number | null;
  countyUwNotes: string | null;

  // computed
  effectiveMinDwelling: number | null;
  updatedAt: string;
}

export interface SearchResponse {
  county: CountyInfo;
  count: number;
  carriers: CarrierResult[];
}

export interface CountyOption {
  name: string;
  isBeachPlan: boolean;
}