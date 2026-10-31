import Image from "next/image";
import { COMPANY_LOGO } from "@/lib/company";

export default function Logo({
  onDark = false,
  className = "h-8 sm:h-9",
}: {
  onDark?: boolean;
  className?: string;
}) {
  const { light, dark, width, height } = COMPANY_LOGO;
  const size = `${className} w-auto`;

  if (onDark) {
    return (
      <Image
        src={dark || light}
        alt=""
        width={width}
        height={height}
        className={size}
      />
    );
  }

  return (
    <>
      <Image
        src={light}
        alt=""
        width={width}
        height={height}
        className={`${size} ${dark ? "dark:hidden" : ""}`}
      />
      {dark && (
        <Image
          src={dark}
          alt=""
          width={width}
          height={height}
          className={`hidden ${size} dark:block`}
        />
      )}
    </>
  );
}