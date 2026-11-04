import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShowcasePresentation from "@/components/ui/ShowPresent";
import { getCategory, getProject, PROJECTS } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.description };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <ShowcasePresentation
      item={project}
      eyebrow={getCategory(project.category)?.title}
      backHref="/projects"
      backLabel="All projects"
    />
  );
}