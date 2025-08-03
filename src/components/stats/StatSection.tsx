"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { DollarSign, FileText, Icon, LucideIcon, TrendingUp, Users } from "lucide-react";
import { StatCard } from "./StatCard";
import { StatSectionProps } from "@/types/stat";



export default function StatSection({ cardData=[] }: StatSectionProps) {

  return (
    
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

    {cardData.map((card) => (
      <StatCard 
        key={card.title}
        title={card.title}
        value={card.value}
        subtext={card.subtext}
        icon={card.icon}
        iconColorClass = {card.iconColorClass}
        valueColorClass = {card.valueColorClass}
        subtextColorClass = {card.subtextColorClass}
      />
    ))}
  </div>
  )
}