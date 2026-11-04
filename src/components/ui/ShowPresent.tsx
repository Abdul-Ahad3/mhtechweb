import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ShowcaseDetailTabs from "@/components/ui/ShowDetail";
import Slideshow from "@/components/ui/SlideShow";
import Tag from "@/components/ui/Tag";
import type { ShowcaseItem } from "@/types";

export default function ShowcasePresentation({
  item,
  eyebrow,
  backHref,
  backLabel,
}: {
  item: ShowcaseItem;
  eyebrow?: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <section className="presentation:h-[calc(100dvh-var(--header-height))] presentation:overflow-hidden">
      <Container className="py-6 lg:py-10 presentation:h-full">
        <div className="project-grid grid gap-8 lg:gap-12 presentation:h-full presentation:grid-rows-[minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col presentation:min-h-0">
            <Button href={backHref} variant="text" className="mb-4 self-start">
              <span aria-hidden="true">←</span> {backLabel}
            </Button>

            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-steel-dark">
                {eyebrow}
              </p>
            )}
            <h1 className="break-words text-[clamp(1.875rem,2.4vw+0.5rem,3rem)]">
              {item.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{item.description}</p>

            {item.summary && <p className="mt-3 text-muted">{item.summary}</p>}

            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>

            <ShowcaseDetailTabs key={item.slug} detail={item.detail} />
          </div>

          <div className="flex min-w-0 flex-col justify-center presentation:min-h-0">
            <Slideshow name={item.name} slides={item.slides} />
          </div>
        </div>
      </Container>
    </section>
  );
}