import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm transition-transform group-hover:scale-105">
        <HeartHandshake size={20} strokeWidth={2.25} />
      </span>
      <span
        className={`font-display text-xl font-bold tracking-tight ${
          light ? "text-white" : "text-stone-900"
        }`}
      >
        Norah<span className="text-orange-500">Child</span>
      </span>
    </Link>
  );
}
