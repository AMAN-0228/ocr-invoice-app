import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText } from "lucide-react";
import Link from "next/link";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks to get you started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="/invoices/new" prefetch>
          <Button className="w-full justify-start">
            <Plus className="mr-2 h-4 w-4" />
            Create New Invoice
          </Button>
        </Link>
        <Link href="/invoices/list" prefetch>
          <Button variant="outline" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            View All Invoices
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
