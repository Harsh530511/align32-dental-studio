interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mint-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
