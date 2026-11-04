import ShowcaseNotFound from "@/components/ui/ShowNotFound";

export default function ProjectNotFound() {
  return (
    <ShowcaseNotFound
      eyebrow="Project not found"
      title="We couldn't find that project."
      description="It may have moved or the address may be incorrect."
      backHref="/projects"
      backLabel="View all projects"
    />
  );
}