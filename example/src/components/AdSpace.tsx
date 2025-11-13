interface AdSpaceProps {
  size: "banner" | "rectangle" | "skyscraper" | "leaderboard";
  label?: string;
}

export function AdSpace({ size, label = "Publicidad" }: AdSpaceProps) {
  const sizeClasses = {
    banner: "h-[250px]",
    rectangle: "h-[250px]",
    skyscraper: "h-[600px]",
    leaderboard: "h-[90px]"
  };

  return (
    <div className="w-full">
      <div className="text-[10px] text-muted-foreground/60 uppercase tracking-wider mb-1 text-center">
        {label}
      </div>
      <div className={`w-full ${sizeClasses[size]} bg-muted/30 border border-dashed border-muted-foreground/20 flex items-center justify-center`}>
        <div className="text-center text-muted-foreground/40">
          <div className="text-xs">Espacio publicitario</div>
          <div className="text-[10px] mt-1">
            {size === "banner" && "300 × 250"}
            {size === "rectangle" && "300 × 250"}
            {size === "skyscraper" && "160 × 600"}
            {size === "leaderboard" && "728 × 90"}
          </div>
        </div>
      </div>
    </div>
  );
}
