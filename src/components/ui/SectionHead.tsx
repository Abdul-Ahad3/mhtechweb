type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.12em] ${
            inverted ? "text-light-blue" : "text-steel-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading className={`break-words ${inverted ? "text-white" : ""}`}>
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-lg ${inverted ? "text-dark-muted" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}