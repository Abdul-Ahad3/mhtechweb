import Image from "next/image";
import Container from "@/components/ui/Container";
import { PARTNER_LOGOS, type PartnerLogo } from "@/lib/partners";

// Clear this string to hide the heading if the relationships aren't verified.
const HEADING = "Trusted by teams and partners";

// Each loop copy must be wider than the screen, so short lists are repeated.
const MIN_ITEMS = 10;

function LogoItem({
  logo,
  hidden,
  className = "",
}: {
  logo: PartnerLogo;
  hidden: boolean;
  className?: string;
}) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className={`shrink-0 ${className}`}
    >
      <Image
        src={logo.src}
        alt={hidden ? "" : logo.name}
        width={logo.width ?? 160}
        height={logo.height ?? 48}
        className="h-8 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-10"
      />
    </li>
  );
}

export default function TrustedBy() {
  if (PARTNER_LOGOS.length === 0) return null;

  const repeat = Math.max(1, Math.ceil(MIN_ITEMS / PARTNER_LOGOS.length));
  const items = Array.from({ length: repeat }).flatMap((_, r) =>
    PARTNER_LOGOS.map((logo) => ({ logo, repeated: r > 0 })),
  );

  return (
    <section aria-label="Partners" className="py-10 lg:py-12">
      <Container>
        {HEADING && (
          <p className="text-center text-sm font-medium text-muted">
            {HEADING}
          </p>
        )}

        <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
            <ul className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6 motion-reduce:pr-0">
              {items.map(({ logo, repeated }, i) => (
                <LogoItem
                  key={i}
                  logo={logo}
                  hidden={repeated}
                  className={repeated ? "motion-reduce:hidden" : ""}
                />
              ))}
            </ul>

            <ul
              aria-hidden="true"
              className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 motion-reduce:hidden"
            >
              {items.map(({ logo }, i) => (
                <LogoItem key={i} logo={logo} hidden />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}