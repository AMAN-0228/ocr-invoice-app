"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Settings } from "lucide-react";

type Preferences = {
  emailUpdates: boolean;
  notifications: boolean;
  darkMode: boolean;
};

const settingsConfig: {
  key: keyof Preferences;
  label: string;
  description: string;
}[] = [
  {
    key: "emailUpdates",
    label: "Email Notifications",
    description: "Receive email updates about your invoices",
  },
  {
    key: "notifications",
    label: "Push Notifications",
    description: "Get notified about new invoices and updates",
  },
  {
    key: "darkMode",
    label: "Dark Mode",
    description: "Switch between light and dark themes",
  },
];

export function AccountSettings() {
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState<Preferences>({
    emailUpdates: false,
    notifications: false,
    darkMode: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreferences({
        emailUpdates: true,
        notifications: false,
        darkMode: true,
      });
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  const toggle = (key: keyof Preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>Account Settings</span>
        </CardTitle>
        <CardDescription>
          Manage your account preferences and security settings
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {settingsConfig.map(({ key, label, description }) => (
          <div key={key} className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>{label}</Label>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>

            {loading ? (
              <Skeleton className="h-8 w-20 rounded-md" />
            ) : (
              <Button
                variant={preferences[key] ? "default" : "outline"}
                size="sm"
                onClick={() => toggle(key)}
              >
                {preferences[key] ? "Enabled" : "Disabled"}
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
