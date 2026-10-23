import type { ComponentProps } from "react";

export default function Tag({
  className = "",
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={`inline-block rounded bg-tag px-2.5 py-1 text-xs font-medium text-navy ${className}`}
      {...props}
    />
  );
}