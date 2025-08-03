"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Shield, Bell } from "lucide-react";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
          <Key className="h-4 w-4 mr-2" />
          Change Password
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Shield className="h-4 w-4 mr-2" />
          Security Settings
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Bell className="h-4 w-4 mr-2" />
          Notification Settings
        </Button>
      </CardContent>
    </Card>
  );
}
