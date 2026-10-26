import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";
import type { Service } from "@/types";

export default function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const { id, title, summary, capabilities, technologies } = service;

  return (
    <section
      id={id}
      aria-label={title}
      className="section-y border-b last:border-b-0"
    >
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <SectionHeading
          eyebrow={String(index + 1).padStart(2, "0")}
          title={title}
          description={summary}
        />

        <div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {capabilities.map(({ title, description }) => (
              <li key={title} className="border-t pt-5">
                <h3 className="text-lg">{title}</h3>
                <p className="mt-2 text-muted">{description}</p>
              </li>
            ))}
          </ul>

          {technologies && technologies.length > 0 && (
            <div className="mt-10">
              <p className="text-sm font-medium text-muted">
                Tools and technologies
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}