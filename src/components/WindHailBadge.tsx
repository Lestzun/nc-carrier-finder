import { WindHailStance } from "@/lib/types";

const STYLES: Record<WindHailStance, string> = {
  INCLUDED: "bg-green-50 border-green-200 text-green-900",
  EXCLUDED: "bg-red-50 border-red-200 text-red-900",
  PERCENTAGE_DEDUCTIBLE: "bg-amber-50 border-amber-200 text-amber-900",
};

const LABELS: Record<WindHailStance, string> = {
  INCLUDED: "Wind/hail included",
  EXCLUDED: "Wind/hail excluded — Beach Plan needed",
  PERCENTAGE_DEDUCTIBLE: "Wind/hail with deductible",
};

export function WindHailBadge({
  stance,
  detail,
}: {
  stance: WindHailStance;
  detail: string | null;
}) {
  return (
    <div
      className={`flex items-start gap-2 px-3 py-2 rounded-md border text-sm ${STYLES[stance]}`}
    >
      <span className="font-medium">{LABELS[stance]}</span>
      {detail && (
        <span className="opacity-80">— {detail}</span>
      )}
    </div>
  );
}