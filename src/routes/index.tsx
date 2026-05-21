import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Andharan — A Haunting Tale of Love and Darkness" },
      {
        name: "description",
        content:
          "Andharan: a cinematic dark thriller. One man returns to save the woman he never stopped loving.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Spacer so the scroll-driven crack effect has room to play */}
      <section className="relative min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            The story <span className="text-primary italic">continues</span>
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            A village. A curse. A love that refused to die. Step beyond the
            broken glass and into a world where every shadow remembers your
            name.
          </p>
        </div>
      </section>
    </main>
  );
}
