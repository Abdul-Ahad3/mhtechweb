import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";

const IMAGE_DIR = "/projects";

type Project = {
  name: string;
  overview: string;
  why: string;
  parts: string[];
  technical?: string;
  file?: string;
  alt?: string;
};

const PROJECTS: Project[] = [
  {
    name: "SmartPTI Truck Inspection System",
    overview: "A complete inspection platform connecting BLE tyre sensors with a custom embedded controller, display and purpose-built enclosure.",
    why: "Summary coming soon.",
    parts: ["Sensor-based inspection"],
    file: "truck-inspection.png",
    alt: "",
  },
  {
    name: "Audio Stimulator",
    overview:
      "A coordinated engineering platform linking a sensor wristband, mobile application, app-controlled stimulator and cloud data services.",
    why: "Summary coming soon.",
    parts: ["Stimulation device", "Wearable watch", "Companion app"],
    file: "medical-platform.png",
    alt: "",
  },
  {
    name: "Mobile ANPR",
    overview:
      "A vehicle-mounted vision system combining a camera, NVIDIA Jetson edge processing and a mobile interface for automatic number plate recognition.",
    why: "Summary coming soon.",
    parts: ["Edge AI", "Computer vision", "Mobile"],
    file: "mobile-anpr.png",
    alt: "",
  },
];

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

function Media({ name, file, alt }: Pick<Project, "name" | "file" | "alt">) {
  return (
    <div className="relative aspect-[1672/941] overflow-hidden border-b bg-hero">
      {file ? (
        <Image
          src={`${IMAGE_DIR}/${file}`}
          alt={alt || name}
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
              <Media name={project.name} file={project.file} alt={project.alt} />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl">{project.name}</h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.parts.map((part) => (
                    <li key={part}>
                      <Tag>{part}</Tag>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-muted">{project.overview}</p>
                <p className="mt-3 flex-1 text-muted">
                  <span className="font-medium text-navy">
                    Why it matters:{" "}
                  </span>
                  {project.why}
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
                    {project.technical ?? "Technical details coming soon."}
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