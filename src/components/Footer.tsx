import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

const explore = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "News & Stories" },
  { href: "/team", label: "Our Team" },
];

const involved = [
  { href: "/donate", label: "Donate" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/volunteer", label: "Partner With Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              NorahChild is dedicated to reducing out-of-school children and
              giving orphans, internally displaced children, and children of
              low-income families across Nigeria and Africa a brighter
              future.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 transition-colors hover:bg-orange-500"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 transition-colors hover:bg-orange-500"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 transition-colors hover:bg-orange-500"
              >
                <XIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-orange-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {involved.map((item, i) => (
                <li key={item.label + i}>
                  <Link href={item.href} className="hover:text-orange-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-orange-400" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-orange-400" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-orange-400" />
                <span>hello@norahchild.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-6 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} NorahChild. All rights reserved.</p>
          <p>Registered Non-Profit Organization · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
