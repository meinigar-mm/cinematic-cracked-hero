import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Community", "Publishing", "Shop", "Partnership", "Our Team"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
        <a href="#" className="font-display text-2xl tracking-[0.25em] text-foreground">
          ANDHARAN
        </a>
        <ul className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="relative transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-primary text-primary-foreground text-xs tracking-[0.2em] font-semibold px-5 py-2.5 rounded-sm hover:brightness-110 transition">
          BOOK NOW
        </button>
      </nav>
    </motion.header>
  );
}
