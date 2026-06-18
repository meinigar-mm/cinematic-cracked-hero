import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import brandLogo from "@/assets/brand_name.png";

const links = [
  { label: "Home", href: "/#home" },
  {
    label: "Gallery",
    children: [
      { label: "Posters", href: "/gallery/posters" },
      { label: "Videos", href: "/gallery/videos" },
    ],
  },
  { label: "Mystery", href: "/#story-overview" },
  { label: "Persona", href: "/#main-characters" },
  { label: "The Soundscape", href: "/#soundscape" },
  { label: "Architects", href: "/#creative-team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !galleryOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        setGalleryOpen(false);
        setMobileGalleryOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen, galleryOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-5 py-4 lg:px-10 lg:py-5">
        <a href="/#home" aria-label="Andharan home" className="block shrink-0">
          <img
            src={brandLogo}
            alt="Andharan"
            className="h-[42px] w-[152px] object-contain sm:h-[57px] sm:w-[206px]"
          />
        </a>
        <ul className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((link) => (
            <li key={link.label} className="relative">
              {"children" in link ? (
                <div className="group">
                  <button
                    type="button"
                    aria-expanded={galleryOpen}
                    onClick={() => setGalleryOpen((open) => !open)}
                    className="relative flex items-center gap-1.5 transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all group-hover:after:w-full"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform ${galleryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`absolute left-1/2 top-full z-50 min-w-[150px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      galleryOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                    }`}
                  >
                    <div className="border border-primary/30 bg-black/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
                      {link.children.map((child) =>
                        child.href.startsWith("/") && !child.href.includes("#") ? (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setGalleryOpen(false)}
                            className="block px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-primary/10 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setGalleryOpen(false)}
                            className="block px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:bg-primary/10 hover:text-primary"
                          >
                            {child.label}
                          </a>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="relative transition-colors hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://in.bookmyshow.com/movies/chennai/andharan/ET00503338"
            target="_blank"
            rel="noopener noreferrer"
            className="book-now-btn rounded-sm bg-primary px-4 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-primary-foreground transition hover:brightness-110 sm:px-5 sm:text-xs"
          >
            BOOK NOW
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setMobileGalleryOpen(false);
            }}
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
              {"children" in link ? (
                <div className="border-b border-white/10 py-3">
                  <button
                    type="button"
                    aria-expanded={mobileGalleryOpen}
                    onClick={() => setMobileGalleryOpen((open) => !open)}
                    className="flex w-full items-center gap-2 py-0 text-left text-white/85 transition hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-300 ${
                        mobileGalleryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
                      mobileGalleryOpen
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="grid grid-cols-2 gap-2">
                        {link.children.map((child) =>
                          child.href.startsWith("/") && !child.href.includes("#") ? (
                            <Link
                              key={child.label}
                              to={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setGalleryOpen(false);
                                setMobileGalleryOpen(false);
                              }}
                              className="border border-primary/25 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition hover:bg-primary hover:text-black"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setMobileGalleryOpen(false);
                              }}
                              className="border border-primary/25 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition hover:bg-primary hover:text-black"
                            >
                              {child.label}
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 py-3 transition hover:text-primary"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
