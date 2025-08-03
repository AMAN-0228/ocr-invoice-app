import dynamic from "next/dynamic";
import QuickActions from "@/components/dashboard/QuickActions";
import { Suspense } from "react";
import StatSectionSkeleton from "@/components/skeleton/StatSectionSkeleton";
import RecentActivitySkeleton from "@/components/skeleton/RecentActivitySkeleton";

const DashboardStatSection = dynamic(() => import("@/components/dashboard/DashboardStatSection"));
const RecentActivity = dynamic(() => import("@/components/dashboard/RecentActivity"));

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your OCR Invoice App. Manage and extract data from your invoices.
        </p>
      </div>

      <Suspense fallback={<StatSectionSkeleton />}>
        <DashboardStatSection />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2">
        <QuickActions />
        <Suspense fallback={<RecentActivitySkeleton />}>
          <RecentActivity />
        </Suspense>
      </div>
    </div>
  );
}
