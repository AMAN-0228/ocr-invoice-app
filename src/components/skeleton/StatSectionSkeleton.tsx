// components/skeletons/StatSectionSkeleton.tsx
import StatCardSkeleton from "./StatCardSkeleton";

export default function StatSectionSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, idx) => (
        <StatCardSkeleton key={idx} />
      ))}
    </div>
  );
}
