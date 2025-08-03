import { PersonDetails } from "@/components/profile/PersonalDetails";
import { AccountSettings } from "@/components/profile/AccountSettings";
import AccountOverview from "@/components/profile/AccountOverview";
import { AccessPermissions } from "@/components/profile/AccessPermission";
import { QuickActions } from "@/components/profile/QuickActions";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  avatar: string;
  preferences: {
    notifications: boolean;
    emailUpdates: boolean;
    darkMode: boolean;
  };
}

const mockProfile: UserProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  company: "Acme Corporation",
  role: "Administrator",
  avatar: "",
  preferences: {
    notifications: true,
    emailUpdates: true,
    darkMode: false,
  }
};

export default function ProfilePage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Information */}
        <div className="md:col-span-2 space-y-6">
          <PersonDetails />
          <AccountSettings />
          
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <AccountOverview />

          {/* Quick Actions */}
          <QuickActions />

          {/* Access Permissions */}
          <AccessPermissions />
        </div>
      </div>
    </div>
  );
} 