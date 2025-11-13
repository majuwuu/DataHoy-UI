interface TrendingCardProps {
  rank: number;
  title: string;
  time: string;
  category: string;
}

export function TrendingCard({ rank, title, time, category }: TrendingCardProps) {
  return (
    <article className="flex gap-4 group cursor-pointer pb-5 border-b last:border-b-0">
      <div className="text-muted-foreground/30 min-w-[1.5rem] pt-1">{rank}</div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
          {category}
        </div>
        <h4 className="mb-2 line-clamp-2 text-sm leading-snug group-hover:text-slate-600 transition-colors">{title}</h4>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </article>
  );
}
