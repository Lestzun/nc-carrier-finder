import { AppetiteLevel } from "@/lib/types";

const STYLES: Record<AppetiteLevel, string> = {
  STRONG: "bg-green-100 text-green-800 border-green-300",
  MODERATE: "bg-amber-100 text-amber-800 border-amber-300",
  LIMITED: "bg-red-100 text-red-800 border-red-300",
};

const LABELS: Record<AppetiteLevel, string> = {
  STRONG: "Strong",
  MODERATE: "Moderate",
  LIMITED: "Limited",
};

export function AppetiteBadge({ level }: { level: AppetiteLevel }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${STYLES[level]}`}
    >
      {LABELS[level]}
    </span>
  );
}