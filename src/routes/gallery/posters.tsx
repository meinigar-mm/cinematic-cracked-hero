import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import postersJson from "../../../posters.json?raw";

type PosterItem = {
  id: string;
  title: string;
  imageUrl: string;
  alt?: string;
  category?: string;
};

const posterManifestUrl = import.meta.env.VITE_POSTERS_MANIFEST_URL?.trim();
const fallbackPosters = JSON.parse(postersJson) as PosterItem[];

async function fetchPosterManifest() {
  if (!posterManifestUrl) {
    throw new Error("Poster manifest URL is not configured.");
  }

  const response = await fetch(posterManifestUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Poster manifest request failed with status ${response.status}`);
  }

  const posters = (await response.json()) as PosterItem[];

  return posters.filter((poster) => poster.id && poster.title && poster.imageUrl);
}

export const Route = createFileRoute("/gallery/posters")({
  component: GalleryPostersPage,
  head: () => ({
    meta: [
      { title: "Andharan Gallery Posters" },
      {
        name: "description",
        content: "Official Andharan movie posters and promotional artwork.",
      },
    ],
  }),
});

function GalleryPostersPage() {
  const [posters, setPosters] = useState<PosterItem[]>(fallbackPosters);
  const [loading, setLoading] = useState(Boolean(posterManifestUrl));
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!posterManifestUrl) return;

    let cancelled = false;

    async function loadPosters() {
      try {
        setLoading(true);
        setNotice(null);

        const fetchedPosters = await fetchPosterManifest();

        if (!cancelled) {
          setPosters(fetchedPosters.length > 0 ? fetchedPosters : fallbackPosters);
          setNotice(
            fetchedPosters.length > 0 ? null : "No S3 posters found. Showing local posters.",
          );
        }
      } catch (error) {
        if (!cancelled) {
          setPosters(fallbackPosters);
          setNotice(
            error instanceof Error
              ? `${error.message} Showing local posters.`
              : "Could not load S3 posters. Showing local posters.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadPosters();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#f88c08]">
              Gallery Posters
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Andharan <span className="text-[#f88c08]">Poster Gallery</span>
            </h1>
          </div>

          {loading && (
            <div className="mt-12 border border-[#f88c08]/30 bg-white/[0.04] px-6 py-10 text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-[#f88c08]">
              Loading Posters
            </div>
          )}

          {notice && !loading && (
            <div className="mt-10 border border-[#f88c08]/30 bg-white/[0.04] px-5 py-4 text-center text-[13px] font-semibold text-[#D7D7D7]">
              {notice}
            </div>
          )}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posters.map((poster, index) => (
              <PosterCard key={poster.id} poster={poster} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PosterCard({ poster, priority }: { poster: PosterItem; priority: boolean }) {
  return (
    <article className="group overflow-hidden border border-[#f88c08]/25 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#f88c08]/70 hover:bg-white/[0.07]">
      <a href={poster.imageUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-[#140D08]">
          <img
            src={poster.imageUrl}
            alt={poster.alt ?? poster.title}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-[#f88c08]/45 bg-black/60 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#f88c08] backdrop-blur-sm">
            <ImageIcon size={13} strokeWidth={2.5} />
            {poster.category ?? "Poster"}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-[14px] font-black uppercase tracking-[0.16em] text-white">
                {poster.title}
              </h2>
              <ExternalLink
                size={17}
                strokeWidth={2.5}
                className="shrink-0 text-[#f88c08] opacity-80 transition group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
