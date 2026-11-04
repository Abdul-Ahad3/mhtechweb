import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import ShowcaseList from "@/components/ui/ShowList";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products developed and owned by MHTechFusion, separate from our client projects and collaborations.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="section-y border-b bg-hero">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Products"
            title="Products developed and owned by MHTechFusion."
            description="These are our own products, built and owned by MHTechFusion itself. They are separate from the client projects and collaborations we work on."
          />
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <ShowcaseList
            items={PRODUCTS}
            basePath="/products"
            eyebrow="Company product"
            ctaLabel="View product"
          />
        </Container>
      </section>
    </>
  );
}