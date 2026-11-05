import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import { SERVICES } from "@/lib/services";

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="One team across the full product stack."
          description="From the circuit board to the cloud, we cover the disciplines a connected product depends on."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map(({ id, title, short }, i) => (
            <li
              key={id}
              className="flex flex-col rounded-lg border bg-white p-8 transition-colors hover:border-steel"
            >
              <span
                aria-hidden="true"
                className="font-heading text-sm font-semibold text-steel-dark"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6">
                <Link
                  href={`/services#${id}`}
                  className="hover:text-steel-dark"
                >
                  {title}
                </Link>
              </h3>
              <p className="mt-3 text-muted">{short}</p>
              
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href="/services" variant="secondary">
            Explore Our Services
          </Button>
        </div>
      </Container>
    </section>
  );
}