import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

export default function ShowcaseNotFound({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <Button href={backHref} className="mt-10">
          {backLabel}
        </Button>
      </Container>
    </section>
  );
}