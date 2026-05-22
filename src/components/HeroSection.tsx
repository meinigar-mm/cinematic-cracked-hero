import { useRef } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import heroPoster from "@/assets/hero-poster.png";
import mobileHeroPoster from "@/assets/MOBILE.jpg.jpeg";
import GlassOverlay from "./GlassOverlay";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Poster background */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="hero-poster-bg absolute inset-0 z-0"
        style={
          {
            "--hero-poster-image": `url(${heroPoster})`,
            "--hero-mobile-image": `url(${mobileHeroPoster})`,
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.22) contrast(1.08) saturate(1.08)",
          } as CSSProperties
        }
      />

      {/* Cinematic gradient overlays for left-side text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background/75 via-background/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-background/15" />

      {/* Cracked glass — scroll-driven */}
      <GlassOverlay targetRef={heroRef} />

      {/* Content */}
      <div className="relative z-40 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center lg:items-start lg:px-24 lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-bold text-white max-w-[569px] text-4xl md:text-5xl leading-[1.15] tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A Haunting Tale of Love and <span className="text-primary">Darkness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-5 max-w-[492px] text-base font-medium leading-[22px] text-[#B1B1B1]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          In a world haunted by fear and unexplained deaths, one man returns to save the woman he
          never stopped loving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-6 flex items-center justify-center gap-[5px] lg:justify-start"
        >
          <a
            href="#why-it-works"
            className="flex w-[120px] h-[38px] items-center justify-center rounded-[5px] bg-primary text-[#1D1D1D] text-xs font-medium capitalize hover:brightness-110 transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore
          </a>
          <button
            className="w-[120px] h-[38px] rounded-[5px] border border-primary text-primary text-xs font-medium capitalize hover:bg-primary hover:text-[#1D1D1D] transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Watch Trailer
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/50"
        ></motion.div>
      </div>
    </section>
  );
}
