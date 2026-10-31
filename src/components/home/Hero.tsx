import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import EngineeringFilm from "@/components/home/EnggFilm";

export default function Hero() {
  return (
    <section className="border-b bg-hero">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Connected product engineering"
            title="Engineering ideas into connected products."
            description="MHTechFusion brings together hardware design, embedded firmware, IoT, AI, and software to take your product from concept to a working, connected system."
          />
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact">Discuss Your Project</Button>
            <Button href="#work" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>

        <EngineeringFilm />
      </Container>
    </section>
  );
}