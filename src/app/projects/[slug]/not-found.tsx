import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

export default function ProjectNotFound() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Project not found"
          title="We couldn't find that project."
          description="It may have moved or the address may be incorrect."
        />
        <Button href="/projects" className="mt-10">
          View all projects
        </Button>
      </Container>
    </section>
  );
}