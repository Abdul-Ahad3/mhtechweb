import Image from "next/image";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { hasRealImage } from "@/lib/projects";
import type { Project } from "@/types";

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

export default function ProjectCard({
  project,
  categoryTitle,
}: {
  project: Project;
  categoryTitle: string;
}) {
  const { name, description, tags, image, slug } = project;

  return (
    <li className="grid gap-8 rounded-lg border bg-white p-6 transition-colors hover:border-steel sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-10">
      <div className="flex flex-col">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-steel-dark">
          {categoryTitle}
        </p>
        <h3 className="mt-3 text-2xl lg:text-3xl">{name}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted">{description}</p>
        <Button
          href={`/projects/${slug}`}
          variant="text"
          className="mt-6 self-start"
        >
          <span>
            View project<span className="sr-only">: {name}</span>
          </span>{" "}
          <span aria-hidden="true">→</span>
        </Button>
      </div>

      <div className="relative order-first aspect-[1672/941] overflow-hidden rounded-md border bg-hero lg:order-last">
        {image && hasRealImage(image.src) ? (
          <Image
            src={image.src}
            alt={image.alt || name}
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-60" style={grid} />
            <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-medium text-muted">
              Image coming soon
            </p>
          </>
        )}
      </div>
    </li>
  );
}