// components/skeletons/QuickActionsSkeleton.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function QuickActionsSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-5 w-32 rounded-md bg-muted animate-pulse" />
        <CardDescription className="h-4 w-48 rounded-md bg-muted animate-pulse mt-1" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
        <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
      </CardContent>
    </Card>
  );
}
