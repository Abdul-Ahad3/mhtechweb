import type { Metadata } from "next";
import ProjectsHero from "@/components/projects/ProjectHero";
import CategorySection from "@/components/projects/CategorySection";
import { PROJECT_CATEGORIES } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by MHTechFusion across automotive, biomedical, edge AI, embedded hardware, and software.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      {PROJECT_CATEGORIES.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </>
  );
}