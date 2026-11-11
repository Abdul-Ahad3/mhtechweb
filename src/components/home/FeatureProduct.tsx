import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types";

type FeaturedProject = Omit<Project, "slug" | "slides">;

const PROJECTS: FeaturedProject[] = [
  {
    name: "Truck Inspection System",
    description:
      "A complete inspection platform connecting BLE tyre sensors with a custom embedded controller, display and purpose-built enclosure.",
    summary: "Brings several vehicle-inspection checks into one dedicated device.",
    tags: ["Sensor-based inspection"],
    image: { src: "truck-inspection/ti-1.png", alt: "" },
    category: "automotive",
  },
  {
    name: "Audio Stimulator",
    description:
      "A coordinated engineering platform linking a sensor wristband, mobile application, app-controlled stimulator and cloud data services.",
    summary: "Connects sensing, stimulation, and session records in one integrated system.",
    tags: ["Wearable Technology", "Mobile App"],
    image: { src: "audio-stimulator/mp-1.png", alt: "" },
    category: "biomedical",
  },
  {
    name: "Mobile ANPR System",
    description:
      "A vehicle-mounted vision system combining a camera, NVIDIA Jetson edge processing and a mobile interface for automatic number plate recognition.",
    summary: "Reads number plates automatically, so vehicles can be identified without manual transcription.",
    tags: ["Edge AI", "Computer vision", "Mobile"],
    image: { src: "mobile-anpr/ma-1.png", alt: "" },
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
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}