import { CarrierResult } from "@/lib/types";
import { CarrierCard } from "./CarrierCard";

export function CarrierList({
  carriers,
  countyName,
  hasAppetiteData,
}: {
  carriers: CarrierResult[];
  countyName: string;
  hasAppetiteData: boolean;
}) {
  if (carriers.length === 0) {
    return (
      <div className="border border-gray-200 rounded-lg p-8 text-center bg-gray-50">
        {hasAppetiteData ? (
          <>
            <p className="text-gray-700 font-medium mb-1">
              No carriers match this occupancy type
            </p>
            <p className="text-sm text-gray-500">
              Try a different occupancy type for {countyName} County.
            </p>
          </>
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-1">
              {countyName}{" "}County isn&apos;t in our coverage yet
            </p>
            <p className="text-sm text-gray-500">
              We currently cover select coastal counties. More coming soon.
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-600 mb-3">
        {carriers.length} carrier{carriers.length === 1 ? "" : "s"} in{" "}
        <span className="font-medium text-gray-900">{countyName} County</span>
      </p>
      {carriers.map((c) => (
        <CarrierCard key={c.id} carrier={c} />
      ))}
    </div>
  );
}