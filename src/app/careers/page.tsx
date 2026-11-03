import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import { LINKEDIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at MHTechFusion. We have no open positions at the moment, but we're always interested in connecting with talented people.",
};

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  maskImage: "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
  WebkitMaskImage:
    "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
};

export default function CareersPage() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-hero lg:min-h-[calc(100dvh-var(--header-height))]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={grid}
      />

      <Container className="relative py-16 lg:py-24">
        <SectionHeading
          as="h1"
          align="center"
          eyebrow="Careers"
          title="Build What’s Next With Us"
          description="We don’t have any open positions at the moment, but we’re always interested in connecting with talented people who share our passion for engineering and technology."
        />

        <div className="mt-10 flex justify-center">
          <Button
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stay Connected on LinkedIn
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}