"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { signIn } from "next-auth/react";


export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", form);

      if (res.status === 200) {
        toast.success("Account created! Please login.");
        router.push("/login");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Error creating account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <Card className="w-full max-w-md p-6 shadow-xl border rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-semibold mb-6 text-center">Create Account</h1>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <Button
              className="w-full mt-4"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Continue with Google
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-primary underline">
                Login
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
