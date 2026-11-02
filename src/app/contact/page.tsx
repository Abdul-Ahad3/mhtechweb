import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import ContactForm from "../../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell MHTechFusion about your product idea, project requirements, or technical challenge.",
};

export default function ContactPage() {
  return (
    <section className="section-y bg-hero">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Contact"
          as="h1"
          title="Send Us a Message"
          description="Tell us a little about your project and we’ll be in touch."
          className="mb-10"
        />
        <ContactForm />
      </Container>
    </section>
  );
}
