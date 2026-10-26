import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

export default function ProjectsHero() {
  return (
    <section className="section-y border-b bg-hero">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Engineering projects across various domains."
          description="A look at the connected systems we design, from hardware and firmware to software and intelligence."
        />
      </Container>
    </section>
  );
}