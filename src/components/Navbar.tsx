import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import brandLogo from "@/assets/brand_name.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Mystery", href: "#story-overview" },
  { label: "Persona", href: "#main-characters" },
  { label: "The Soundscape", href: "#soundscape" },
  { label: "Architects", href: "#creative-team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:px-10 lg:py-5">
        <a href="#home" aria-label="Andharan home" className="block shrink-0">
          <img
            src={brandLogo}
            alt="Andharan"
            className="h-[42px] w-[152px] object-contain sm:h-[57px] sm:w-[206px]"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          <button className="bg-primary text-primary-foreground text-[10px] tracking-[0.18em] font-semibold px-4 py-2.5 rounded-sm hover:brightness-110 transition sm:text-xs sm:px-5">
            BOOK NOW
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20 bg-black/25 text-white transition hover:border-primary hover:text-primary lg:hidden"
          >
            {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur-md transition-[max-height,opacity] duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 text-sm font-medium text-white/85">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3 transition hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}
