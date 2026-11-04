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
  const { id, title, summary, technologies } = service;

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

        <div className="border-t pt-5 lg:self-start">
          <p className="text-sm font-medium text-muted">
            Key services &amp; technologies
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <li key={tech}>
                <Tag className="px-3 py-1.5 text-sm">{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}