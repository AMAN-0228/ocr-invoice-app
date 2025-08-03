import { User } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils"; // your utility to combine classNames

type AvatarProps = {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-20 w-20 text-xl",
};

export function Avatar({ src, name, size = "md", className }: AvatarProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <div
      className={cn(
        "rounded-full bg-primary/10 flex items-center justify-center overflow-hidden",
        sizeMap[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={name || "Avatar"} className="object-cover w-full h-full" />
      ) : name ? (
        <span className="text-primary font-semibold">{initials}</span>
      ) : (
        <User className="text-primary" />
      )}
    </div>
  );
}
