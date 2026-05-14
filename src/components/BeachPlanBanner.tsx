export function BeachPlanBanner({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="border border-amber-300 bg-amber-50 rounded-lg p-4 mb-4">
      <div className="font-medium text-amber-900 mb-1">
        Beach Plan territory (NCIUA-eligible)
      </div>
      <div className="text-sm text-amber-800 leading-relaxed">
        Carriers that exclude wind/hail will require a separate NCIUA Beach Plan
        policy for wind coverage. NCIUA HO Wind caps Coverage A at $1M, with
        Coverage B at 10%, C at 40%, and D at 20% of Coverage A.
      </div>
    </div>
  );
}