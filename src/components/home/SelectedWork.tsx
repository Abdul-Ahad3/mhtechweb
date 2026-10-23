import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import Tag from "@/components/ui/Tag";

type Project = {
  title: string;
  description: string;
  category: string;
};

const PROJECTS: Project[] = [
  {
    title: "Embedded Systems Project",
    description: "Project summary coming soon.",
    category: "Embedded Systems",
  },
  {
    title: "Hardware Design Project",
    description: "Project summary coming soon.",
    category: "Hardware",
  },
  {
    title: "AI & Computer Vision Project",
    description: "Project summary coming soon.",
    category: "AI & Computer Vision",
  },
  {
    title: "Software Project",
    description: "Project summary coming soon.",
    category: "Software",
  },
  {
    title: "Game Development Project",
    description: "Project summary coming soon.",
    category: "Software",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Engineering projects delivered for clients."
          description="A selection of projects across hardware, firmware, AI, and software."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map(({ title, description, category }) => (
            <li
              key={title}
              className="flex flex-col rounded-lg border border-t-2 border-t-steel bg-white p-8 transition-colors hover:border-steel"
            >
              <Tag className="self-start">{category}</Tag>
              <h3 className="mt-6">{title}</h3>
              <p className="mt-3 text-muted">{description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Button href="/contact">Discuss Your Project</Button>
        </div>
      </Container>
    </section>
  );
}