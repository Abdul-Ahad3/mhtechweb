import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import { COMPANY_CONTACT, COMPANY_LOGO, COMPANY_TAGLINE } from "@/lib/company";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "MHTechFusion is a technology company working across hardware, embedded software, industrial automation, cloud, and AI.",
};

export default function AboutPage() {
  const { email, phone, address } = COMPANY_CONTACT;
  const { light, dark, alt, width, height } = COMPANY_LOGO;

  return (
    <>
      <section className="section-y border-b bg-hero">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="About MHTechFusion."
            description=""
          />
          <p className="mt-5 max-w-4xl text-lg text-muted whitespace-pre-line">
            MHTechFusion is a Germany-based, husband-and-wife-led <b>IoT, AI, and embedded systems startup</b> specializing in end-to-end product development, from initial concept and R&D to prototyping, testing, and production-ready solutions.
            <br />
            <br />
            Our expertise spans <b>biomedical wearables, automotive electronics, embedded firmware, custom PCB and high-speed circuit design,</b> 
            <b>Edge AI, AI/ML, LLMs, RAG-based intelligent systems, industrial automation, robotics, and wireless communication technologies.</b>
            <br />
            We deliver complete <b> IoT hardware and software solutions</b> , integrating electronics, firmware, cloud platforms, 
            mobile applications, and AI-powered intelligence. With a multidisciplinary engineering team and dedicated prototyping facilities, 
            we transform complex R&D challenges and innovative ideas into reliable, scalable, and market-ready products.
          </p>
        </Container>
      </section>

      <section id="what-we-do" className="section-y">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Eight areas of expertise."
            description="From the electronics inside a device to the software people use, here is where we work."
          />

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map(({ id, title, short }) => (
              <li key={id} className="border-t pt-5">
                <h3 className="text-lg">
                  <Link
                    href={`/services#${id}`}
                    className="hover:text-steel-dark"
                  >
                    {title}
                  </Link>
                </h3>
                <p className="mt-2 text-muted">{short}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
            <Button href="/projects" variant="text">
              View our projects <span aria-hidden="true">→</span>
            </Button>
          </div>
        </Container>
      </section>

      <section id="identity" className="section-y border-y bg-hero">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center rounded-lg border bg-white p-8 sm:p-12">
            <Image
              src={light}
              alt={alt}
              width={width}
              height={height}
              className={`h-auto w-full max-w-xs ${dark ? "dark:hidden" : ""}`}
            />
            {dark && (
              <Image
                src={dark}
                alt={alt}
                width={width}
                height={height}
                className="hidden h-auto w-full max-w-xs dark:block"
              />
            )}
          </div>

          <SectionHeading eyebrow="Company identity" title={COMPANY_TAGLINE} />
        </Container>
      </section>

      <section id="contact-details" className="section-y">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch."
            description="Tell us about your product idea, requirements, or technical challenge."
          />

          <dl className="mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            <div className="border-t pt-5">
              <dt className="text-sm font-medium text-muted">Email</dt>
              <dd className="mt-2 text-lg font-medium">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-11 items-center break-all hover:text-steel-dark"
                >
                  {email}
                </a>
              </dd>
            </div>
            <div className="border-t pt-5">
              <dt className="text-sm font-medium text-muted">Phone</dt>
              <dd className="mt-2 text-lg font-medium">
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex min-h-11 items-center hover:text-steel-dark"
                >
                  {phone}
                </a>
              </dd>
            </div>
            <div className="border-t pt-5">
              <dt className="text-sm font-medium text-muted">Address</dt>
              <dd className="mt-2 text-lg font-medium">
                <a
                  href={`mailto:${address}`}
                  className="inline-flex min-h-11 items-center break-all hover:text-steel-dark"
                >
                  {address}
                </a>
              </dd>
            </div>
          </dl>

          <Button href="/contact" className="mt-10">
            Contact Us
          </Button>
        </Container>
      </section>
    </>
  );
}