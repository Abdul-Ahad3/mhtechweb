export type ProjectCategoryId = "automotive" | "biomedical" | "edge-ai" | "embedded" | "app-dev";

export type ProjectCategory = {
  id: ProjectCategoryId;
  title: string;
};

export type ProjectSlide = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategoryId;
  description: string;
  summary?: string;
  tags: string[];
  image?: { src: string; alt: string };
  slides: ProjectSlide[];
};

export type ServiceCapability = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  capabilities: ServiceCapability[];
  technologies?: string[];
};