"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Save, Camera, User } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "../ui/avatar";

interface Profile {
  name: string;
  email: string;
  phone: string;
  company: string;
  role?: string;
  avatar?: string;
}

export function PersonDetails() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    avatar: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/user/profile");
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        toast.error("Failed to fetch profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!res.ok) throw new Error();

      toast.success("Profile updated successfully");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsLoading(true);
    fetch("/api/user/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .finally(() => setIsLoading(false));
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your personal details and contact information
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            disabled={isLoading}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Avatar Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            {isLoading ? (
                <Skeleton className="h-20 w-20 rounded-full animate-pulse" />
              ) : (
                <Avatar src={profile.avatar} name={profile.name} size="lg" />
              )}

            {isEditing && !isLoading && (
              <label
                htmlFor="avatar-upload"
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full flex items-center justify-center bg-white border cursor-pointer"
              >
                <Camera className="h-4 w-4" />
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfile({ ...profile, avatar: reader.result as string });
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            )}
          </div>

          <div>
            {isLoading ? (
              <>
                <Skeleton className="h-5 w-32 mb-2 animate-pulse" />
                <Skeleton className="h-4 w-20 animate-pulse" />
              </>
            ) : (
              <>
                <h3 className="text-lg font-medium">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { label: "Full Name", value: profile.name, key: "name" },
            { label: "Email", value: profile.email, key: "email", type: "email" },
            { label: "Phone", value: profile.phone, key: "phone" },
            { label: "Company", value: profile.company, key: "company" },
          ].map((field) => (
            <div className="space-y-2" key={field.key}>
              <Label htmlFor={field.key}>{field.label}</Label>
              {isLoading ? (
                <Skeleton className="h-10 w-full animate-pulse" />
              ) : (
                <Input
                  id={field.key}
                  type={field.type || "text"}
                  value={profile[field.key as keyof Profile] || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, [field.key]: e.target.value })
                  }
                  disabled={!isEditing}
                />
              )}
            </div>
          ))}
        </div>

        {isEditing && !isLoading && (
          <div className="flex space-x-4 pt-4">
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Save className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
