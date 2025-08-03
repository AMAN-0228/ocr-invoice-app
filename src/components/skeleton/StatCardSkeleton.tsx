import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Skeleton className="h-4 w-24" /> {/* Matches text width */}
        </CardTitle>
        <Skeleton className="h-4 w-4 rounded-full" /> {/* Matches icon size */}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          <Skeleton className="h-6 w-20 mb-1" /> {/* Matches value size */}
        </div>
        <p className="text-xs">
          <Skeleton className="h-3 w-16" /> {/* Matches subtext size */}
        </p>
      </CardContent>
    </Card>
  );
}
