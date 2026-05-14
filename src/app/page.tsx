"use client";

import { useState } from "react";
import { SearchForm } from "@/components/SearchForm";
import { BeachPlanBanner } from "@/components/BeachPlanBanner";
import { CarrierList } from "@/components/CarrierList";
import { Occupancy, SearchResponse } from "@/lib/types";

// Counties with seeded appetite data — update as you add more
const SEEDED_COUNTIES = [
  "Brunswick",
  "New Hanover",
  "Carteret",
  "Dare",
  "Onslow",
  "Pender",
  "Currituck",
  "Beaufort",
];

export default function HomePage() {
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedCounty, setSearchedCounty] = useState("");

  async function handleSearch(county: string, occupancy: Occupancy) {
    setIsLoading(true);
    setError(null);
    setResults(null);
    setSearchedCounty(county);

    try {
      const params = new URLSearchParams({ county, occupancy });
      const response = await fetch(`/api/search?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Something went wrong");
        return;
      }

      setResults(data);
    } catch (e) {
      console.error(e);
      setError("Unable to load results. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const hasAppetiteData = SEEDED_COUNTIES.includes(searchedCounty);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          NC Carrier Finder
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          NC residential homeowners — coastal county appetite lookup
        </p>
      </header>

      <SearchForm onSearch={handleSearch} isLoading={isLoading} />

      {error && (
        <div className="border border-red-300 bg-red-50 text-red-900 rounded-lg px-4 py-3 mb-4 text-sm">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-12 text-gray-500 text-sm">
          Searching carriers...
        </div>
      )}

      {results && !isLoading && (
        <>
          <BeachPlanBanner show={results.county.isBeachPlan} />
          <CarrierList
            carriers={results.carriers}
            countyName={results.county.name}
            hasAppetiteData={hasAppetiteData}
          />
        </>
      )}

      <footer className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
        Carrier appetite data is manually maintained and may not reflect current
        underwriting guidelines. Always verify directly with the carrier before
        submitting an application. Rates and underwriting can change without
        notice.
      </footer>
    </main>
  );
}