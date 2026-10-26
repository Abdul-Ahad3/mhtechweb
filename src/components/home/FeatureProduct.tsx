import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

type FeaturedProject = Omit<Project, "slug" | "slides">;

const PROJECTS: FeaturedProject[] = [
  {
    name: "SmartPTI Truck Inspection System",
    description:
      "A complete inspection platform connecting BLE tyre sensors with a custom embedded controller, display and purpose-built enclosure.",
    summary: "Summary coming soon.",
    tags: ["Sensor-based inspection"],
    image: { src: "truck-inspection/ti-1.png", alt: "" },
    category: "automotive",
  },
  {
    name: "Audio Stimulator",
    description:
      "A coordinated engineering platform linking a sensor wristband, mobile application, app-controlled stimulator and cloud data services.",
    summary: "Summary coming soon.",
    tags: ["Wearable Technology", "Mobile App"],
    image: { src: "audio-stimulator/mp-1.png", alt: "" },
    category: "biomedical",
  },
  {
    name: "Mobile ANPR",
    description:
      "A vehicle-mounted vision system combining a camera, NVIDIA Jetson edge processing and a mobile interface for automatic number plate recognition.",
    summary: "Summary coming soon.",
    tags: ["Edge AI", "Computer vision", "Mobile"],
    image: { src: "audio-stimulator/mp-1.png", alt: "" },
    category: "edge-ai",
  },
];

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

function Media({ name, image }: Pick<FeaturedProject, "name" | "image">) {
  return (
    <div className="relative aspect-[1672/941] overflow-hidden border-b bg-hero">
      {image ? (
        <Image
          src={`/${image.src}`}
          alt={image.alt || name}
          width={1672}
          height={941}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-60" style={grid} />
          <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm font-medium text-muted">
            Image coming soon
          </p>
        </>
      )}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="section-y border-y bg-hero">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Projects developed by MHTechFusion."
          description="Selected projects from our own portfolio."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className="flex flex-col overflow-hidden rounded-lg border bg-white"
            >
              <Media name={project.name} image={project.image} />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl">{project.name}</h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-muted">{project.description}</p>
                <p className="mt-3 flex-1 text-muted">
                  <span className="font-medium text-navy">
                    Why it matters:{" "}
                  </span>
                  {project.summary}
                </p>

                <details className="group mt-8 border-t pt-2">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium text-navy [&::-webkit-details-marker]:hidden">
                    Technical details
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    >
                      <path d="M3 6l5 5 5-5" />
                    </svg>
                  </summary>
                  <p className="pb-2 pt-2 text-muted">
                    Technical details coming soon.
                  </p>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}