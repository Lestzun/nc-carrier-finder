"use client";

import { useState } from "react";
import counties from "@/data/counties.json";
import { Occupancy } from "@/lib/types";

interface SearchFormProps {
  onSearch: (county: string, occupancy: Occupancy) => void;
  isLoading: boolean;
}

const OCCUPANCY_OPTIONS: { value: Occupancy; label: string }[] = [
  { value: "primary", label: "Primary residence" },
  { value: "secondary", label: "Secondary / vacation home" },
  { value: "shortTermRental", label: "Short-term rental" },
  { value: "tenantOccupied", label: "Tenant-occupied" },
];

const sortedCounties = [...counties].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const [countyName, setCountyName] = useState("");
  const [occupancy, setOccupancy] = useState<Occupancy>("primary");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!countyName) return;
    onSearch(countyName, occupancy);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-lg p-5 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-end">
        <div>
          <label
            htmlFor="county"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            County
          </label>
          <select
            id="county"
            value={countyName}
            onChange={(e) => setCountyName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            required
          >
            <option value="">Select a county...</option>
            {sortedCounties.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
                {c.isBeachPlan ? " 🌊" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="occupancy"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Occupancy
          </label>
          <select
            id="occupancy"
            value={occupancy}
            onChange={(e) => setOccupancy(e.target.value as Occupancy)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            {OCCUPANCY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={!countyName || isLoading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-5 py-2 rounded-md text-sm transition-colors"
        >
          {isLoading ? "Searching..." : "Find Carriers"}
        </button>
      </div>
    </form>
  );
}