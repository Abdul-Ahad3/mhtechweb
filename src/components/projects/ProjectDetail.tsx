import Container from "@/components/ui/Container";
import Tag from "@/components/ui/Tag";
import type { ProjectDetail } from "@/types";

function Row({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <h2 className="text-2xl lg:text-3xl">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default function ProjectDetailContent({
  detail,
}: {
  detail?: ProjectDetail;
}) {
  if (!detail) return null;
  const { overview, approach, capabilities, technologies, status } = detail;

  return (
    <section
      id="details"
      aria-label="Project details"
      className="section-y border-t"
    >
      <Container className="divide-y">
        <Row title="Overview">
          <div className="space-y-4 text-lg text-muted">
            {overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Row>

        {approach && approach.length > 0 && (
          <Row title="Approach">
            <div className="space-y-4 text-lg text-muted">
              {approach.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Row>
        )}

        <Row title="Key capabilities">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="border-t pt-4">
                {item}
              </li>
            ))}
          </ul>
        </Row>

        {technologies && technologies.length > 0 && (
          <Row title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </Row>
        )}

        {status && (
          <Row title="Project status">
            <p className="text-lg text-muted">{status}</p>
          </Row>
        )}
      </Container>
    </section>
  );
}