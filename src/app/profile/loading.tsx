import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Skeleton className="h-24 w-24 rounded-full mb-4" />
      <Skeleton className="h-8 w-48 mb-2" />
      <Skeleton className="h-6 w-64 mb-2" />
      <Skeleton className="h-32 w-11/12" />
    </div>
  );
}