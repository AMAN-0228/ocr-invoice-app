// components/skeletons/RecentActivitySkeleton.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function RecentActivitySkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-5 w-36 rounded-md bg-muted animate-pulse" />
        <CardDescription className="h-4 w-56 rounded-md bg-muted animate-pulse mt-1" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            <div className="h-2 w-2 rounded-full bg-muted animate-pulse" />
            <div className="flex-1 space-y-1">
              <div className="h-4 w-3/4 rounded-md bg-muted animate-pulse" />
              <div className="h-3 w-1/2 rounded-md bg-muted animate-pulse" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
