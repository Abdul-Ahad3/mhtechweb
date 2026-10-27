import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
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
    <>
      <section className="min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-var(--header-height))] lg:min-h-0 lg:overflow-hidden">
        <Container className="h-full py-6 lg:py-10">
          <div className="grid h-full gap-8 lg:grid-cols-[2fr_3fr] lg:grid-rows-[minmax(0,1fr)] lg:gap-14">
            <div className="flex flex-col justify-center">
              <Button
                href="/projects"
                variant="text"
                className="mb-6 self-start"
              >
                <span aria-hidden="true">←</span> All projects
              </Button>
              <SectionHeading
                as="h1"
                eyebrow={category?.title}
                title={project.name}
                description={project.description}
              />
              {project.detail && (
                <Button
                  href="#details"
                  variant="text"
                  className="mt-6 self-start"
                >
                  Project details <span aria-hidden="true">↓</span>
                </Button>
              )}
            </div>

            <div className="flex min-h-0 flex-col gap-6">
              <ProjectSlideshow name={project.name} slides={project.slides} />

              <div className="grid gap-4 border-t pt-5 sm:grid-cols-2 sm:gap-8">
                {project.summary && (
                  <p className="text-muted">{project.summary}</p>
                )}
                <ul className="flex flex-wrap content-start gap-2 sm:col-span-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProjectDetailContent detail={project.detail} />
    </>
  );
}