"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { DollarSign, FileText, Icon, LucideIcon, TrendingUp, Users } from "lucide-react";
import StatSection from "../stats/StatSection";
import StatSectionSkeleton from "../skeleton/StatSectionSkeleton";


export default function DashboardStatSection() {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timeOut = setTimeout(() => {

      setCardData([
        {
          title: "Total Amount",
          value: `$20`,
          icon: DollarSign,
        },
      {
        title: "Monthly Revenue",
        value: "$12,345",
        icon: TrendingUp,
        subtext: "+20% from last month",
      },
      {
        title: "Active Vendors",
        value: 8,
        icon: Users,
        subtext: "+1 from last month",
      },
      {
        title: "Processing",
        value: 3,
        icon: FileText,
        subtext: "Invoices being processed",
      },
    ]);
    setIsLoading(false);
  },10000);

  return timeOut.close
  }, []);

  return(
    <>
      {isLoading ?(
        <StatSectionSkeleton />
      ): (
        <StatSection cardData={cardData} />
      )}
    </>
    )
}