import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { StatCardProps } from "@/types/stat";


export function StatCard({
  title,
  value,
  icon: Icon,
  subtext,
  iconColorClass = "text-muted-foreground",
  valueColorClass = "text-foreground",
  subtextColorClass = "text-muted-foreground",
}: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={clsx("h-4 w-4", iconColorClass)} />
      </CardHeader>
      <CardContent>
        <div className={clsx("text-2xl font-bold", valueColorClass)}>{value}</div>
        <p className={clsx("text-xs", subtextColorClass)}>{subtext}</p>
      </CardContent>
    </Card>
  );
}
