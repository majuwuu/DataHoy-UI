import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CardMediaProps {
  title?: string;
  image?: string;
}

export function CardMedia({ title, image }: CardMediaProps) {
  return (
    <div className="border p-3">
      {image && (
        <div className="aspect-[4/3] overflow-hidden mb-3">
          <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {title && <h4 className="text-sm">{title}</h4>}
    </div>
  );
}

export const editorMeta = { displayName: 'CardMedia' };
