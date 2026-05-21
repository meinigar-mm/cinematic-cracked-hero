import { useRef } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import GlassOverlay from "./GlassOverlay";

export default function HeroSection() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/90 via-transparent to-background/40" />

      {/* Cracked glass — appears on scroll */}
      <GlassOverlay targetRef={heroRef} />

      {/* Content */}
      <div className="relative z-40 max-w-7xl mx-auto px-6 lg:px-10 pt-40 lg:pt-56 pb-24 min-h-screen flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-2xl text-foreground"
        >
          A Haunting Tale of Love
          <br />
          and <span className="text-primary italic">Darkness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="mt-8 max-w-md text-base md:text-lg text-foreground/70 leading-relaxed"
        >
          In a world haunted by fear and unexplained deaths, one man returns to
          save the woman he never stopped loving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm tracking-[0.2em] font-semibold hover:brightness-110 hover:scale-[1.03] transition-all shadow-[0_0_40px_-10px_var(--primary)]">
            EXPLORE
          </button>
          <button className="border border-primary text-primary px-8 py-3 rounded-sm text-sm tracking-[0.2em] font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
            WATCH TRAILER
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-foreground/50"
        >
          SCROLL
        </motion.div>
      </div>
    </section>
  );
}
