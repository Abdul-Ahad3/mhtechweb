import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";

type Product = {
  name: string;
  description: string;
  image?: string;
  href: string;
  cta: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Product Name",
    description: "Short product description coming soon.",
    href: "/contact",
    cta: "Request details",
  },
  {
    name: "Product Name",
    description: "Short product description coming soon.",
    href: "/contact",
    cta: "Request details",
  },
  {
    name: "Product Name",
    description: "Short product description coming soon.",
    href: "/contact",
    cta: "Request details",
  },
];

const grid = {
  backgroundImage:
    "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

function ProductImage({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b bg-hero">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-60" style={grid} />
          <p className="absolute inset-0 flex items-center justify-center text-sm font-medium text-muted">
            Product image coming soon
          </p>
        </>
      )}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="products" className="section-y border-y bg-white">
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="Products developed by MHTechFusion."
          description="Selected products from our own portfolio."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <li
              key={`${product.name}-${i}`}
              className="group flex flex-col overflow-hidden rounded-lg border bg-white transition-colors hover:border-steel"
            >
              <ProductImage src={product.image} alt={product.name} />
              <div className="flex flex-1 flex-col p-8">
                <h3>{product.name}</h3>
                <p className="mt-3 flex-1 text-muted">{product.description}</p>
                <Button
                  href={product.href}
                  variant="text"
                  className="mt-6 self-start"
                >
                  {product.cta} →
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}