import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NewsCardProps {
  title: string;
  description: string;
  category: string;
  time: string;
  author?: string;
  image: string;
  featured?: boolean;
}

export function NewsCard({ title, description, category, time, author, image, featured }: NewsCardProps) {
  if (featured) {
    return (
      <article className="border-b pb-12 mb-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative aspect-[16/9] overflow-hidden">
            <ImageWithFallback 
              src={image}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="text-xs tracking-wider text-muted-foreground mb-3 uppercase">
              {category}
            </div>
            <h2 className="mb-5 leading-tight">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">{description}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              {author && <span>{author}</span>}
              {author && <span>•</span>}
              <span>{time}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="text-xs tracking-wider text-muted-foreground mb-2 uppercase">
        {category}
      </div>
      <h3 className="mb-3 line-clamp-2 leading-snug group-hover:text-slate-600 transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {author && (
          <>
            <span>{author}</span>
            <span>•</span>
          </>
        )}
        <span>{time}</span>
      </div>
    </article>
  );
}
