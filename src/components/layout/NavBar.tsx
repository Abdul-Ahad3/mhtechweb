"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { CONTACT_LINK, NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="h-16 bg-hero lg:h-(--header-height)">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 py-2 sm:px-4 lg:px-6 lg:py-3">
        <div className="pointer-events-auto relative mx-auto flex h-12 max-w-6xl items-center justify-between rounded-full border border-border/60 bg-background/70 px-4 shadow-[0_8px_30px_-12px_rgba(17,43,59,0.3)] backdrop-blur-xl backdrop-saturate-150 lg:h-16 lg:px-6 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]">
          <Link
            href="/"
            className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight text-navy"
          >
            <Logo />
            {SITE.name}
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-3 lg:flex xl:gap-5"
          >
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`block rounded-full px-2.5 py-2 text-[15px] font-medium xl:px-3.5 ${
                      isActive(href)
                        ? "bg-steel/10 text-steel-dark"
                        : "text-navy hover:bg-tag hover:text-steel-dark"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={CONTACT_LINK.href} className="h-11! rounded-full!">
              {CONTACT_LINK.label}
            </Button>
            <ThemeToggle />
          </nav>

          <MobileMenu />
        </div>
      </header>
    </div>
  );
}