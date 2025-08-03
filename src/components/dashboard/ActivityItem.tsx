type Props = {
  color: string;
  title: string;
  time: string;
};

export default function ActivityItem({ color, title, time }: Props) {
  return (
    <div className="flex items-center space-x-4">
      <div className={`h-2 w-2 rounded-full ${color}`}></div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}
