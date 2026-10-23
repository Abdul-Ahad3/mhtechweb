import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="section-y bg-navy">
      <Container className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <SectionHeading
          inverted
          title="Let's discuss your engineering project."
          description="Tell us about your product idea, requirements, or technical challenge."
        />
        <Button
          href="/contact"
          className="self-start bg-white! text-navy! hover:bg-light-blue! md:self-auto"
        >
          Discuss Your Project
        </Button>
      </Container>
    </section>
  );
}