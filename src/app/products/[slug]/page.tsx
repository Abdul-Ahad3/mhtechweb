import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShowcasePresentation from "@/components/ui/ShowPresent";
import { getProduct, PRODUCTS } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage(
  props: PageProps<"/products/[slug]">,
) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <ShowcasePresentation
      item={product}
      eyebrow="Company product"
      backHref="/products"
      backLabel="All products"
    />
  );
}