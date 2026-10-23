import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "text";

type Common = { variant?: Variant; className?: string };
type AsLink = Common &
  Omit<ComponentProps<typeof Link>, "className" | "href"> & { href: string };
type AsButton = Common &
  Omit<ComponentProps<"button">, "className"> & { href?: undefined };

type ButtonProps = AsLink | AsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "h-12 rounded-md bg-navy px-6 text-white hover:bg-steel",
  secondary:
    "h-12 rounded-md border border-navy px-6 text-navy hover:bg-navy hover:text-white",
  text: "text-steel underline-offset-4 hover:text-navy hover:underline",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    return <Link {...props} className={cls} />;
  }
  return <button type="button" {...props} className={cls} />;
}