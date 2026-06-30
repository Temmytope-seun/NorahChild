export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-orange-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-stone-200" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
