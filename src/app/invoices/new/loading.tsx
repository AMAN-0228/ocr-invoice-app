import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full">
      {/* Left skeleton */}
      <div className="flex-1 flex flex-col items-center justify-center bg-muted/40">
        <Card className="w-4/5 h-4/5 flex flex-col items-center justify-center">
          <CardContent className="flex flex-col items-center justify-center h-full w-full">
            <Skeleton className="h-12 w-12 mb-4 rounded-full" />
            <Skeleton className="h-6 w-48 mb-2" />
            <Skeleton className="h-10 w-64" />
          </CardContent>
        </Card>
      </div>
      {/* Right skeleton */}
      <div className="flex-1 flex flex-col h-full p-8">
        <Skeleton className="h-8 w-48 mb-4" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    </div>
  );
}