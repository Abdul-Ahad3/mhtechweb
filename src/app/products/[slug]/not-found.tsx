import ShowcaseNotFound from "@/components/ui/ShowNotFound";

export default function ProductNotFound() {
  return (
    <ShowcaseNotFound
      eyebrow="Product not found"
      title="We couldn’t find that product."
      description="It may have moved or the address may be incorrect."
      backHref="/products"
      backLabel="View all products"
    />
  );
}