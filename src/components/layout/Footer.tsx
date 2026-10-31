import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { CONTACT_LINK, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="surface-dark bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
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
            <p className="mt-4 text-dark-muted">
              Tell us about your product or project.
            </p>
            <Link
              href={CONTACT_LINK.href}
              className="mt-3 inline-block font-medium hover:text-light-blue"
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