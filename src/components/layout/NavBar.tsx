"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { CONTACT_LINK, NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between lg:h-(--header-height)">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-navy"
        >
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block py-2 text-[15px] font-medium hover:text-steel-dark ${
                    isActive(href) ? "text-steel-dark" : "text-navy"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={CONTACT_LINK.href} className="h-11!">
            {CONTACT_LINK.label}
          </Button>
          <ThemeToggle />
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}