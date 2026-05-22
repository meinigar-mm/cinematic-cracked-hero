import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cracks from "@/assets/cracks.png";

gsap.registerPlugin(ScrollTrigger);

export default function GlassOverlay({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !targetRef?.current) return;
    const el = overlayRef.current;
    gsap.set(el, { opacity: 0, scale: 1.05 });

    const st = ScrollTrigger.create({
      trigger: targetRef.current,
      start: "top+=1 top",
      onEnter: () => {
        gsap.to(el, {
          opacity: 0.95,
          scale: 1,
          duration: 0.25,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(el, { opacity: 0, scale: 1.05, duration: 0.2 });
      },
    });

    return () => {
      st.kill();
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
        opacity: 0,
      }}
    />
  );
}
