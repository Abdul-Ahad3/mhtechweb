import type { Project, ProjectCategory } from "@/types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: "automotive", title: "Automotive" },
  { id: "biomedical", title: "Biomedical" },
  { id: "edge-ai", title: "Edge AI" },
];

export const PROJECTS: Project[] = [
  {
    slug: "mobile-anpr",
    name: "Mobile ANPR",
    category: "edge-ai",
    description:
      "A mobile edge-AI and computer-vision system for automatic number plate recognition.",
    tags: ["Edge AI", "Computer vision", "Mobile"],
    image: { src: "/mobile-anpr/ma-1.png", alt: "Mobile ANPR" },
    slides: [
      { src: "/mobile-anpr/ma-1.png", alt: "Mobile ANPR, slide 1" },
      { src: "/mobile-anpr/ma-2.png", alt: "Mobile ANPR, slide 2" },
      { src: "/mobile-anpr/ma-3.png", alt: "Mobile ANPR, slide 3" },
    ],
  },
  {
    slug: "audio-stimulator",
    name: "Audio Stimulator",
    category: "biomedical",
    description:
      "A system combining an audio stimulation device, a wearable watch, and a companion app.",
    tags: ["Stimulation device", "Wearable watch", "Companion app"],
    image: { src: "/audio-stimulator/mp-1.png", alt: "Audio Stimulator" },
    slides: [
      { src: "/audio-stimulator/mp-1.png", alt: "Audio Stimulator, slide 1" },
      { src: "/audio-stimulator/mp-2.png", alt: "Audio Stimulator, slide 2" },
      { src: "/audio-stimulator/mp-3.png", alt: "Audio Stimulator, slide 3" },
    ],
  },
  {
    slug: "truck-inspection",
    name: "SmartPTI(TM) Truck Inspection",
    category: "automotive",
    description: "A sensor-based inspection system with no companion app.",
    tags: ["Sensor-based inspection"],
    image: { src: "/truck-inspection/ti-1.png", alt: "SmartPTI" },
    slides: [
      { src: "/truck-inspection/ti-1.png", alt: "SmartPTI, slide 1" },
      { src: "/truck-inspection/ti-2.png", alt: "SmartPTI, slide 2" },
      { src: "/truck-inspection/ti-3.png", alt: "SmartPTI, slide 3" },
    ],
  },
];

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

export const getCategory = (id: ProjectCategory["id"]) =>
  PROJECT_CATEGORIES.find((c) => c.id === id);