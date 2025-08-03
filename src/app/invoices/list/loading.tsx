import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-8">
      <Skeleton className="h-10 w-64 mb-4" />
      <Skeleton className="h-6 w-96 mb-2" />
      <Skeleton className="h-10 w-full mb-2" />
      <Skeleton className="h-96 w-full" />
    </div>
  );
}