import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// This can be replaced with actual server-side fetching logic
async function getAccountMetadata() {
  // Simulated server-side data
  return {
    memberSince: "January 2024",
    lastLogin: "Today",
    status: "Active",
  };
}

export default async function AccountOverview() {
  const { memberSince, lastLogin, status } = await getAccountMetadata();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <OverviewItem label="Member since" value={memberSince} />
        <OverviewItem label="Last login" value={lastLogin} />
        <OverviewItem
          label="Status"
          value={status}
          className={
            status.toLowerCase() === "active"
              ? "text-green-600"
              : "text-red-600"
          }
        />
      </CardContent>
    </Card>
  );
}

function OverviewItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-sm font-medium ${className || ""}`}>{value}</span>
    </div>
  );
}
