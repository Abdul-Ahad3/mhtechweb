import ShowCard from "@/components/ui/ShowCard";
import type { ShowcaseItem } from "@/types";

export default function ShowcaseList({
  items,
  basePath,
  eyebrow,
  ctaLabel,
  className = "",
}: {
  items: ShowcaseItem[];
  basePath: string;
  eyebrow?: string;
  ctaLabel?: string;
  className?: string;
}) {
  return (
    <ul className={`grid gap-6 ${className}`}>
      {items.map((item) => (
        <ShowCard
          key={item.slug}
          item={item}
          href={`${basePath}/${item.slug}`}
          eyebrow={eyebrow}
          ctaLabel={ctaLabel}
        />
      ))}
    </ul>
  );
}