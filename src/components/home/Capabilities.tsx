import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";

const CAPABILITIES = [
  {
    title: "Hardware & Embedded Systems",
    description: "Electronics and firmware developed together as one system.",
    tags: ["PCB design", "Electronics", "Embedded firmware"],
  },
  {
    title: "Connectivity & IoT",
    description:
      "Devices that communicate with phones, gateways, and the cloud.",
    tags: ["BLE", "Wireless connectivity", "Connected devices"],
  },
  {
    title: "AI & Computer Vision",
    description: "Intelligence built to run close to where data is captured.",
    tags: ["Edge AI", "Visual inspection", "Intelligent automation"],
  },
  {
    title: "Product Design & Software",
    description: "Enclosures and applications that make the hardware usable.",
    tags: ["CAD & enclosures", "Mobile & web apps", "Cloud integration"],
  },
] as const;

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
          {CAPABILITIES.map(({ title, description, tags }, i) => (
            <li
              key={title}
              className="flex flex-col rounded-lg border bg-white p-8 transition-colors hover:border-steel"
            >
              <span
                aria-hidden="true"
                className="font-heading text-sm font-semibold text-steel"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6">{title}</h3>
              <p className="mt-3 text-muted">{description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}