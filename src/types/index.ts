export type ProjectCategoryId =
  | "automotive"
  | "biomedical"
  | "edge-ai"
  | "embedded"
  | "app-dev"
  | "indus-auto";

export type ProjectCategory = {
  id: ProjectCategoryId;
  title: string;
};

export type ProjectSlide = {
  src: string;
  alt: string;
};

export type ShowcaseDetail = {
  overview: string[];
  approach?: string[];
  capabilities: string[];
  technologies?: string[];
  status?: string;
};

export type ProjectDetail = ShowcaseDetail;

export type ShowcaseItem = {
  slug: string;
  name: string;
  description: string;
  summary?: string;
  tags: string[];
  image?: { src: string; alt: string };
  slides: ProjectSlide[];
  detail?: ShowcaseDetail;
};

export type Project = ShowcaseItem & { category: ProjectCategoryId };

export type Product = ShowcaseItem;

export type Service = {
  id: string;
  title: string;
  summary: string;
  short: string;
  technologies: string[];
};