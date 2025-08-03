"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

// Simulate API fetch (replace with real one)
async function fetchAccess() {
  return new Promise<{ create: boolean; view: boolean; edit: boolean; approve: boolean }>((res) =>
    setTimeout(() => res({ create: true, view: true, edit: false, approve: true }), 1200)
  );
}

const AccessRow = ({
  label,
  value,
  isLoading,
}: {
  label: string;
  value?: boolean;
  isLoading: boolean;
}) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    {isLoading ? (
      <Skeleton className="h-4 w-12" />
    ) : (
      <span className={`text-sm font-medium ${value ? "text-green-600" : "text-destructive"}`}>
        {value ? "Granted" : "Denied"}
      </span>
    )}
  </div>
);

export function AccessPermissions() {
  const [access, setAccess] = useState<{
    create?: boolean;
    view?: boolean;
    edit?: boolean;
    approve?: boolean;
  }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAccess().then((data) => {
      setAccess(data);
      setLoading(false);
    });
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Access & Permissions</CardTitle>
        <CardDescription>
          View permissions assigned to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <AccessRow label="Invoice Create" value={access.create} isLoading={loading} />
        <AccessRow label="Invoice View" value={access.view} isLoading={loading} />
        <AccessRow label="Invoice Edit" value={access.edit} isLoading={loading} />
        <AccessRow label="Invoice Approve" value={access.approve} isLoading={loading} />
      </CardContent>
    </Card>
  );
}
