import { LucideIcon } from "lucide-react";

export type StatCard = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtext: string;
  iconColorClass?: string;
  valueColorClass?: string;
  subtextColorClass?: string;
}

export type StatCardProps = StatCard;

export type StatSectionProps = {
  cardData: StatCard[];
}