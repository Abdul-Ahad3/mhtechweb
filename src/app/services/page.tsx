import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHead";
import ServiceSection from "@/components/services/ServicesSection";
import EngineeringProcess from "@/components/home/EnggProcess";
import ContactCTA from "@/components/home/ContactCTA";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MHTechFusion services: hardware and PCB design, embedded firmware and Linux, industrial automation, IoT, cloud and DevOps, AI and computer vision, and web and mobile development.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-y border-b bg-hero">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Engineering services from circuits to cloud."
            description="Eight areas of expertise, from electronics and embedded firmware to industrial automation, cloud, and AI."
          />
          <nav aria-label="Services on this page" className="mt-8">
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {SERVICES.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    className="flex min-h-11 items-center text-[15px] font-medium text-steel-dark hover:text-navy"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <div>
        {SERVICES.map((service, i) => (
          <ServiceSection key={service.id} service={service} index={i} />
        ))}
      </div>

      <EngineeringProcess />
      <ContactCTA />
    </>
  );
}