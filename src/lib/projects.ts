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
    image: {
      src: "/projects/mobile-anpr.png",
      alt: "Mobile ANPR system",
    },
  },
  {
    slug: "audio-stimulator",
    name: "Audio Stimulator",
    category: "biomedical",
    description:
      "A system combining an audio stimulation device, a wearable watch, and a companion app.",
    tags: ["Stimulation device", "Wearable watch", "Companion app"],
    image: {
      src: "/projects/medical-platform.png",
      alt: "Audio stimulator system",
    },
  },
  {
    slug: "smartpti",
    name: "SmartPTI",
    category: "automotive",
    description: "A sensor-based inspection system with no companion app.",
    tags: ["Sensor-based inspection"],
    image: {
      src: "/projects/truck-inspection.png",
      alt: "SmartPTI system",
    },
  },
];