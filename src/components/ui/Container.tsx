import type { ComponentProps } from "react";

export default function Container({
  className = "",
  ...props
}: ComponentProps<"div">) {
  return <div className={`container-page ${className}`} {...props} />;
}