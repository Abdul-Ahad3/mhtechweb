import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/projects";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by MHTechFusion across automotive, biomedical, and edge AI.",
};

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

function ProjectCard({ project }: { project: Project }) {
  const { name, description, tags, image, slug } = project;

  return (
    <li className="group flex flex-col overflow-hidden rounded-lg border bg-white transition-colors hover:border-steel">
      <div className="relative aspect-[1672/941] overflow-hidden border-b bg-hero">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt || name}
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl">{name}</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex-1 text-muted">{description}</p>
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
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <section className="section-y border-b bg-hero">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Projects"
            title="Engineering projects across automotive, biomedical, and edge AI."
            description="A look at the connected systems we design, from hardware and firmware to software and intelligence."
          />
        </Container>
      </section>

      {PROJECT_CATEGORIES.map((category) => {
        const projects = PROJECTS.filter((p) => p.category === category.id);
        if (projects.length === 0) return null;

        return (
          <section
            key={category.id}
            id={category.id}
            aria-label={category.title}
            className="section-y border-b last:border-b-0"
          >
            <Container>
              <h2>{category.title}</h2>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </Container>
          </section>
        );
      })}
    </>
  );
}