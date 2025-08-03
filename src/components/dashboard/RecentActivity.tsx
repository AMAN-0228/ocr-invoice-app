import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ActivityItem from "./ActivityItem";

const activities = [
  {
    color: "bg-green-500",
    title: "Invoice #INV-001 processed",
    time: "2 minutes ago",
  },
  {
    color: "bg-blue-500",
    title: "Invoice #INV-002 uploaded",
    time: "15 minutes ago",
  },
  {
    color: "bg-yellow-500",
    title: "Invoice #INV-003 needs review",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest invoice activities</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </CardContent>
    </Card>
  );
}
