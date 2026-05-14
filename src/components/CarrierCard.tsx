import { CarrierResult } from "@/lib/types";
import { AppetiteBadge } from "./AppetiteBadge";
import { WindHailBadge } from "./WindHailBadge";

function formatDwelling(thousands: number | null): string {
  if (thousands == null) return "—";
  if (thousands >= 1000) return `$${(thousands / 1000).toFixed(1)}M`;
  return `$${thousands}K`;
}

function formatVerified(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function CarrierCard({ carrier }: { carrier: CarrierResult }) {
  const isHO5Only =
    carrier.generalUwNotes?.toUpperCase().startsWith("HO-5 ONLY") ?? false;

  const generalNotes = isHO5Only
    ? carrier.generalUwNotes?.replace(/^HO-5 ONLY:?\s*/i, "")
    : carrier.generalUwNotes;

  const isES = carrier.type === "E&S";

  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-3 bg-white hover:border-gray-300 transition-colors">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-base font-semibold text-gray-900">
            {carrier.name}
          </h3>
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              isES
                ? "bg-purple-100 text-purple-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {carrier.type}
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">
            {carrier.rating}
          </span>
          {isHO5Only && (
            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-900 font-medium border border-orange-300">
              HO-5 only
            </span>
          )}
        </div>
        <AppetiteBadge level={carrier.appetiteLevel} />
      </div>

      {/* Wind/hail row */}
      <div className="mb-3">
        <WindHailBadge
          stance={carrier.windHailStance}
          detail={carrier.windHailDetail}
        />
      </div>

      {/* Structured UW grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700 mb-3">
        <div>
          <span className="text-gray-500">Dwelling: </span>
          {formatDwelling(carrier.effectiveMinDwelling)}
          {carrier.carrierMaxDwelling != null &&
            ` – ${formatDwelling(carrier.carrierMaxDwelling)}`}
        </div>
        {carrier.maxProtectionClass != null && (
          <div>
            <span className="text-gray-500">Protection class: </span>≤{" "}
            {carrier.maxProtectionClass}
          </div>
        )}
        {carrier.maxHomeAge != null && (
          <div>
            <span className="text-gray-500">Max home age: </span>
            {carrier.maxHomeAge} yrs
          </div>
        )}
        {carrier.maxRoofAge != null && (
          <div>
            <span className="text-gray-500">Max roof age: </span>
            {carrier.maxRoofAge} yrs
          </div>
        )}
        {carrier.constructionNote && (
          <div className="col-span-2">
            <span className="text-gray-500">Construction: </span>
            {carrier.constructionNote}
          </div>
        )}
      </div>

      {/* Notes */}
      {generalNotes && (
        <div className="text-sm text-gray-600 italic mb-2 leading-relaxed">
          {generalNotes}
        </div>
      )}
      {carrier.countyUwNotes && (
        <div className="text-sm text-gray-700 mb-2 leading-relaxed border-l-2 border-gray-300 pl-3">
          <span className="text-gray-500 text-xs uppercase tracking-wide font-medium block mb-0.5">
            County-specific
          </span>
          {carrier.countyUwNotes}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400">
          Verified {formatVerified(carrier.updatedAt)}
        </span>
        {carrier.website ? (
          <a
            href={carrier.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline"
          >
            Carrier site →
          </a>
        ) : null}
      </div>
    </div>
  );
}