import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Tag from "@/components/ui/Tag";
import ProjectSlideshow from "@/components/projects/ProjectsSlide";
import ProjectDetailContent from "@/components/projects/ProjectDetail";
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

  const category = getCategory(project.category);

  return (
    <section className="presentation:h-[calc(100dvh-var(--header-height))] presentation:overflow-hidden">
      <Container className="py-6 lg:py-10 presentation:h-full">
        <div className="project-grid grid gap-8 lg:gap-12 presentation:h-full presentation:grid-rows-[minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col presentation:min-h-0">
            <Button
              href="/projects"
              variant="text"
              className="mb-4 self-start"
            >
              <span aria-hidden="true">←</span> All projects
            </Button>

            {category && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-steel-dark">
                {category.title}
              </p>
            )}
            <h1 className="break-words text-[clamp(1.875rem,2.4vw+0.5rem,3rem)]">
              {project.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{project.description}</p>

            {project.summary && (
              <p className="mt-3 text-muted">{project.summary}</p>
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>

            <ProjectDetailContent key={project.slug} detail={project.detail} />
          </div>

          <div className="flex min-w-0 flex-col justify-center presentation:min-h-0">
            <ProjectSlideshow name={project.name} slides={project.slides} />
          </div>
        </div>
      </Container>
    </section>
  );
}