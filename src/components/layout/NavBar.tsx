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
        <div className="pointer-events-auto relative mx-auto flex h-12 max-w-6xl items-center justify-between rounded-full border border-navy/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.5))] px-4 shadow-[0_10px_36px_-10px_rgba(17,43,59,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-[1.8] lg:h-16 lg:px-6 dark:border-navy/20 dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.16)]">
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
                        ? "bg-navy text-white"
                        : "text-navy hover:bg-navy/10"
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