export type ProjectCategoryId = "automotive" | "biomedical" | "edge-ai";

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