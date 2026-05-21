import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cracks from "@/assets/cracks.png";

gsap.registerPlugin(ScrollTrigger);

export default function GlassOverlay({ targetRef }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current || !targetRef?.current) return;
    const el = overlayRef.current;
    gsap.set(el, { opacity: 0, scale: 1.15, filter: "blur(8px)" });

    const tween = gsap.to(el, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      ease: "none",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [targetRef]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-30 will-change-[opacity,transform]"
      style={{
        backgroundImage: `url(${cracks})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        mixBlendMode: "screen",
      }}
    />
  );
}
