import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { COMPANY_CONTACT } from "@/lib/company";
import { CONTACT_LINK, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  const { email, phone, address } = COMPANY_CONTACT;

  return (
    <footer className="surface-dark bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1.25fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo onDark className="h-9" />
              <p className="font-heading text-xl font-bold">{SITE.name}</p>
            </div>
            <p className="mt-4 max-w-sm text-dark-muted">{SITE.description}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-dark-muted">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-light-blue">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-dark-muted">
              Get in touch
            </h2>
            <address className="mt-4 space-y-3 not-italic text-dark-muted">
              <p>
                <a
                  href={`mailto:${email}`}
                  className="inline-block break-all py-1 hover:text-light-blue"
                >
                  {email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="inline-block py-1 hover:text-light-blue"
                >
                  {phone}
                </a>
              </p>
              <p className="whitespace-pre-line">{address}</p>
            </address>
            <Link
              href={CONTACT_LINK.href}
              className="mt-4 inline-block font-medium hover:text-light-blue"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-dark-border pt-6 text-sm text-dark-muted">
          © {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}