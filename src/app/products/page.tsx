import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products developed and owned by MHTechFusion. Our product gallery is coming soon.",
};

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  maskImage: "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
  WebkitMaskImage:
    "radial-gradient(ellipse at center, #000 25%, transparent 75%)",
};

export default function ProductsPage() {
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
          eyebrow="Company Products"
          title="Our Product Gallery Is Coming Soon"
          description="We’re working on our own range of products. Check back soon to explore what we’re building."
        />

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted">
          This section is for products developed and owned by MHTechFusion
          itself, separate from our client projects.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/projects" variant="secondary">
            Explore Our Projects
          </Button>
          <Button href="/contact" variant="text">
            Get in touch <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}