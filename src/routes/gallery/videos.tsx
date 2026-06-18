import { createFileRoute } from "@tanstack/react-router";
import { Play, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  publishedAt?: string;
};

type YouTubeApiVideo = {
  id?: string | { videoId?: string };
  snippet: {
    title: string;
    description: string;
    publishedAt?: string;
    resourceId?: {
      videoId?: string;
    };
    thumbnails?: {
      high?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      default?: {
        url: string;
      };
    };
  };
};

class YouTubeApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "YouTubeApiError";
    this.status = status;
  }
}

const youtubeEnv = import.meta.env as Record<string, string | undefined>;
const getEnvValue = (key: string) => {
  const value = youtubeEnv[key]?.trim();

  return value ? value : undefined;
};

const youtubeApiKey = getEnvValue("VITE_YOUTUBE_API_KEY");
const youtubeChannelId = getEnvValue("VITE_YOUTUBE_CHANNEL_ID");
const youtubeChannelHandle = getEnvValue("VITE_YOUTUBE_CHANNEL_HANDLE") ?? "@OmliEntertainment";
const youtubeUploadsPlaylistId = getEnvValue("VITE_YOUTUBE_UPLOADS_PLAYLIST_ID");
const youtubeAndharanPlaylistId = getEnvValue("VITE_YOUTUBE_ANDHARAN_PLAYLIST_ID");
const youtubeApiBaseUrl = "https://www.googleapis.com/youtube/v3";
const youtubeChannelUrl = `https://www.youtube.com/${youtubeChannelHandle}/videos`;

const getYoutubeThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const fallbackGalleryVideos: GalleryVideo[] = [
  {
    id: "gallery-trailer",
    title: "Andharan Trailer",
    description: "Official Andharan trailer.",
    embedUrl: "https://www.youtube.com/embed/KOE_xN_DMio?rel=0&modestbranding=1",
    thumbnailUrl: getYoutubeThumbnailUrl("KOE_xN_DMio"),
  },
  {
    id: "gallery-motion-poster",
    title: "Andharan Movie Motion Poster",
    description: "Andharan movie motion poster.",
    embedUrl: "https://www.youtube.com/embed/jfBI89A8EUI?rel=0&modestbranding=1",
    thumbnailUrl: getYoutubeThumbnailUrl("jfBI89A8EUI"),
  },
  {
    id: "gallery-hunter-is-coming",
    title: "Andharan - The Hunter Is Coming For You",
    description: "Andharan promotional video.",
    embedUrl: "https://www.youtube.com/embed/hC2cBv9M4uQ?rel=0&modestbranding=1",
    thumbnailUrl: getYoutubeThumbnailUrl("hC2cBv9M4uQ"),
  },
  {
    id: "gallery-chella-pulla",
    title: "Chella Pulla",
    description: "Andharan lyrical video.",
    embedUrl: "https://www.youtube.com/embed/jOWR4uHjGp4?rel=0&modestbranding=1",
    thumbnailUrl: getYoutubeThumbnailUrl("jOWR4uHjGp4"),
  },
  {
    id: "gallery-adada-thiruda",
    title: "Adada Thiruda",
    description: "Andharan lyrical video.",
    embedUrl: "https://www.youtube.com/embed/VdFkjrWYevA?rel=0&modestbranding=1",
    thumbnailUrl: getYoutubeThumbnailUrl("VdFkjrWYevA"),
  },
];

const filterAndharanVideos = <T extends { snippet: { title: string; description: string } }>(
  videos: T[],
) =>
  videos.filter((video) => {
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();

    return title.includes("andharan") || description.includes("andharan");
  });

const getVideoIdFromApiVideo = (video: YouTubeApiVideo) => {
  if (video.snippet.resourceId?.videoId) return video.snippet.resourceId.videoId;
  if (typeof video.id === "string") return video.id;
  return video.id?.videoId ?? "";
};

const getThumbnailFromApiVideo = (video: YouTubeApiVideo, videoId: string) =>
  video.snippet.thumbnails?.high?.url ??
  video.snippet.thumbnails?.medium?.url ??
  video.snippet.thumbnails?.default?.url ??
  getYoutubeThumbnailUrl(videoId);

const mapApiVideoToGalleryVideo = (video: YouTubeApiVideo): GalleryVideo | null => {
  const videoId = getVideoIdFromApiVideo(video);

  if (!videoId) return null;

  return {
    id: `gallery-${videoId}`,
    title: video.snippet.title,
    description: video.snippet.description,
    publishedAt: video.snippet.publishedAt,
    embedUrl: `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`,
    thumbnailUrl: getThumbnailFromApiVideo(video, videoId),
  };
};

async function fetchYoutubeJson<T>(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    let message = `YouTube request failed with status ${response.status}`;

    try {
      const data = (await response.json()) as { error?: { message?: string } };
      message = data.error?.message ?? message;
    } catch {
      // Keep the status-only message when YouTube does not return JSON.
    }

    throw new YouTubeApiError(response.status, message);
  }

  return (await response.json()) as T;
}

async function getUploadsPlaylistFromChannelParams(channelParams: URLSearchParams) {
  channelParams.set("part", "contentDetails");
  channelParams.set("key", youtubeApiKey ?? "");

  const channelData = await fetchYoutubeJson<{
    items?: Array<{ contentDetails?: { relatedPlaylists?: { uploads?: string } } }>;
  }>(`${youtubeApiBaseUrl}/channels?${channelParams.toString()}`);

  return channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
}

async function resolveChannelIdFromSearch() {
  const params = new URLSearchParams({
    part: "snippet",
    maxResults: "1",
    q: youtubeChannelHandle.replace(/^@/, ""),
    type: "channel",
    key: youtubeApiKey ?? "",
  });

  const data = await fetchYoutubeJson<{
    items?: Array<{ snippet?: { channelId?: string } }>;
  }>(`${youtubeApiBaseUrl}/search?${params.toString()}`);

  return data.items?.[0]?.snippet?.channelId;
}

async function resolveUploadsPlaylistId() {
  if (youtubeUploadsPlaylistId) return youtubeUploadsPlaylistId;

  if (youtubeChannelId) {
    const uploadsPlaylistId = await getUploadsPlaylistFromChannelParams(
      new URLSearchParams({ id: youtubeChannelId }),
    );

    if (uploadsPlaylistId) return uploadsPlaylistId;
  }

  const handleCandidates = [youtubeChannelHandle, youtubeChannelHandle.replace(/^@/, "")].filter(
    (handle, index, handles) => handle && handles.indexOf(handle) === index,
  );

  for (const handle of handleCandidates) {
    try {
      const uploadsPlaylistId = await getUploadsPlaylistFromChannelParams(
        new URLSearchParams({ forHandle: handle }),
      );

      if (uploadsPlaylistId) return uploadsPlaylistId;
    } catch {
      // Some YouTube API accounts reject one handle format; try the next fallback.
    }
  }

  const searchedChannelId = await resolveChannelIdFromSearch();

  if (searchedChannelId) {
    const uploadsPlaylistId = await getUploadsPlaylistFromChannelParams(
      new URLSearchParams({ id: searchedChannelId }),
    );

    if (uploadsPlaylistId) return uploadsPlaylistId;
  }

  throw new Error("Could not resolve the Omli Entertainment uploads playlist.");
}

async function fetchPlaylistVideos(playlistId: string, maxResults = "50") {
  const params = new URLSearchParams({
    part: "snippet",
    maxResults,
    playlistId,
    key: youtubeApiKey ?? "",
  });

  const data = await fetchYoutubeJson<{ items?: YouTubeApiVideo[] }>(
    `${youtubeApiBaseUrl}/playlistItems?${params.toString()}`,
  );

  return data.items ?? [];
}

async function fetchAndharanGalleryVideos() {
  if (!youtubeApiKey) {
    throw new Error("YouTube API key is not configured.");
  }

  const playlistId = youtubeAndharanPlaylistId ?? (await resolveUploadsPlaylistId());
  const videos = await fetchPlaylistVideos(playlistId);
  const filteredVideos = youtubeAndharanPlaylistId ? videos : filterAndharanVideos(videos);

  return filteredVideos
    .map(mapApiVideoToGalleryVideo)
    .filter((video): video is GalleryVideo => Boolean(video));
}

export const Route = createFileRoute("/gallery/videos")({
  component: GalleryVideosPage,
  head: () => ({
    meta: [
      { title: "Andharan Gallery Videos" },
      {
        name: "description",
        content: "All Andharan-related videos and shorts from the Omli Entertainment channel.",
      },
    ],
  }),
});

function GalleryVideosPage() {
  const [videos, setVideos] = useState<GalleryVideo[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(fallbackGalleryVideos[0].id);
  const [autoplayVideoId, setAutoplayVideoId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVideos() {
      try {
        setLoading(true);
        setNotice(null);

        const fetchedVideos = await fetchAndharanGalleryVideos();

        if (!cancelled) {
          setVideos(fetchedVideos);
          setActiveVideoId(fetchedVideos[0]?.id ?? fallbackGalleryVideos[0].id);
        }
      } catch (error) {
        if (!cancelled) {
          setVideos(fallbackGalleryVideos);
          setActiveVideoId(fallbackGalleryVideos[0].id);
          setNotice(
            error instanceof YouTubeApiError && [401, 403].includes(error.status)
              ? "Live YouTube gallery is temporarily unavailable. Showing selected Andharan videos."
              : error instanceof Error
                ? error.message
                : "Could not load Gallery videos.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadVideos();

    return () => {
      cancelled = true;
    };
  }, []);

  const playVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setAutoplayVideoId(videoId);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[760px]">
            <p className="text-[13px] font-black uppercase tracking-[0.22em] text-[#f88c08]">
              Gallery Videos
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
              Andharan <span className="text-[#f88c08]">Video Gallery</span>
            </h1>
          </div>

          {loading ? (
            <div className="mt-12 border border-[#f88c08]/30 bg-white/[0.04] px-6 py-12 text-center text-[14px] font-semibold uppercase tracking-[0.18em] text-[#f88c08]">
              Loading Gallery Videos
            </div>
          ) : (
            <>
              {notice && (
                <div className="mt-10 border border-[#f88c08]/30 bg-white/[0.04] px-5 py-4 text-center text-[13px] font-semibold text-[#D7D7D7]">
                  {notice}
                </div>
              )}

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {videos.map((video) => (
                  <GalleryVideoCard
                    key={video.id}
                    video={video}
                    active={activeVideoId === video.id}
                    autoplay={autoplayVideoId === video.id}
                    onPlay={playVideo}
                  />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-now-btn inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#f88c08] px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-black transition hover:brightness-110"
                >
                  <Youtube size={16} strokeWidth={2.5} />
                  View More On YouTube
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

function GalleryVideoCard({
  video,
  active,
  autoplay,
  onPlay,
}: {
  video: GalleryVideo;
  active: boolean;
  autoplay: boolean;
  onPlay: (videoId: string) => void;
}) {
  const iframeSrc = autoplay ? `${video.embedUrl}&autoplay=1` : video.embedUrl;

  return (
    <article className="overflow-hidden border border-[#f88c08]/30 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
      {active ? (
        <iframe
          className="aspect-video w-full"
          src={iframeSrc}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => onPlay(video.id)}
          className="group relative block aspect-video w-full overflow-hidden bg-black text-left"
          aria-label={`Play ${video.title}`}
        >
          <img
            src={video.thumbnailUrl}
            alt=""
            className="h-full w-full object-cover opacity-75 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f88c08]/60 bg-black/60 text-[#f88c08] transition group-hover:bg-[#f88c08] group-hover:text-black">
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
          </span>
        </button>
      )}
      <div className="border-t border-[#f88c08]/25 px-5 py-4">
        <h2 className="text-[14px] font-[800] uppercase tracking-[0.18em] text-[#f88c08]">
          {video.title}
        </h2>
      </div>
    </article>
  );
}
