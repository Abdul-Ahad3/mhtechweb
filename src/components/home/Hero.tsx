import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";

const pinsY = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, var(--color-steel) 0 6px, transparent 6px 16px)",
};
const pinsX = {
  backgroundImage:
    "repeating-linear-gradient(to right, var(--color-steel) 0 6px, transparent 6px 16px)",
};
const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border bg-white"
    >
      <div className="absolute inset-0 opacity-60" style={grid} />

      <div className="absolute left-0 top-1/2 h-px w-[33%] bg-steel/40" />
      <div className="absolute right-0 top-1/2 h-px w-[33%] bg-steel/40" />
      <div className="absolute left-1/2 top-0 h-[28%] w-px bg-steel/40" />
      <div className="absolute bottom-0 left-1/2 h-[28%] w-px bg-steel/40" />

      <div className="absolute left-1/2 top-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -left-3 bottom-4 top-4 w-3" style={pinsY} />
        <div className="absolute -right-3 bottom-4 top-4 w-3" style={pinsY} />
        <div className="absolute -top-3 left-4 right-4 h-3" style={pinsX} />
        <div className="absolute -bottom-3 left-4 right-4 h-3" style={pinsX} />
        <div className="relative flex h-full w-full items-center justify-center rounded-md border border-dark-border bg-navy">
          <div className="absolute inset-2 rounded border border-dark-border" />
          <span className="font-heading text-lg font-bold tracking-tight text-white sm:text-2xl">
            MHTechFusion
          </span>
        </div>
      </div>

      <Tag className="absolute left-4 top-4 border bg-white!">PCB &amp; Hardware</Tag>
      <Tag className="absolute right-4 top-4 border bg-white!">Firmware</Tag>
      <Tag className="absolute bottom-4 left-4 border bg-white!">IoT &amp; Connectivity</Tag>
      <Tag className="absolute bottom-4 right-4 border bg-white!">AI &amp; Software</Tag>
    </div>
  );
}

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

        <HeroVisual />
      </Container>
    </section>
  );
}