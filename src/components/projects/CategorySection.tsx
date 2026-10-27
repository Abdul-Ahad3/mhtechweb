import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/lib/projects";
import type { ProjectCategory } from "@/types";

export default function CategorySection({
  category,
}: {
  category: ProjectCategory;
}) {
  const projects = PROJECTS.filter((p) => p.category === category.id);
  if (projects.length === 0) return null;

  return (
    <section
      id={category.id}
      aria-label={category.title}
      className="section-y border-b last:border-b-0"
    >
      <Container>
        <h2>{category.title}</h2>
        <ul className="mt-10 grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              categoryTitle={category.title}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}