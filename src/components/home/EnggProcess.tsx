import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

const STEPS = [
  {
    title: "Define",
    description: "Understand goals, requirements, and constraints.",
  },
  {
    title: "Design",
    description: "Plan the hardware, software, and product architecture.",
  },
  {
    title: "Integrate",
    description: "Bring the relevant components and systems together.",
  },
  {
    title: "Validate",
    description: "Test functionality and refine the solution.",
  },
  {
    title: "Deliver",
    description: "Prepare the solution for handover.",
  },
] as const;

export default function EngineeringProcess() {
  return (
    <section id="process" className="section-y border-t bg-white">
      <Container>
        <SectionHeading
          eyebrow="Engineering Process"
          title="A clear path from idea to delivery."
          description="Five stages that keep hardware, firmware, and software moving together."
        />

        <ol className="mt-12 grid gap-10 md:grid-cols-5 md:gap-6">
          {STEPS.map(({ title, description }, i) => (
            <li key={title} className="relative pl-14 md:pl-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-steel bg-white font-heading text-sm font-semibold text-steel md:static"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {i < STEPS.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-12 -bottom-10 w-px bg-border md:hidden"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-5 left-12 -right-6 hidden h-px bg-border md:block"
                  />
                </>
              )}

              <h3 className="md:mt-6">{title}</h3>
              <p className="mt-2 text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}