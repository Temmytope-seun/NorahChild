import Image from "next/image";

const PALETTE: Record<string, string> = {
  orange: "f97316/fff7ed",
  teal: "0f766e/ecfdf5",
  amber: "d97706/fffbeb",
  stone: "57534e/fafaf9",
};

export default function PhotoPlaceholder({
  label,
  tone = "orange",
  width = 800,
  height = 600,
  className = "",
  sizes,
  fill = false,
}: {
  label: string;
  tone?: keyof typeof PALETTE;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  fill?: boolean;
}) {
  const src = `https://placehold.co/${width}x${height}/${PALETTE[tone]}.png?font=poppins&text=${encodeURIComponent(
    label
  )}`;

  if (fill) {
    return (
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={label}
      width={width}
      height={height}
      className={className}
    />
  );
}
