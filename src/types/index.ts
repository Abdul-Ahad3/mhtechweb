export type ProjectCategoryId = "automotive" | "biomedical" | "edge-ai";

export type ProjectCategory = {
  id: ProjectCategoryId;
  title: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategoryId;
  description: string;
  tags: string[];
  image?: { src: string; alt: string };
};