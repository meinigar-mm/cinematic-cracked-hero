import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Instagram, Linkedin, Github, Mail, Twitter, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import actorTwoImage from "@/assets/actor_2.png";
import actorThreeImage from "@/assets/actor_3.png";
import anupama from "@/assets/anupamakumar.jpg";
import senthilkumari from "@/assets/Senthil Kumari.jpg";
import Rameshbabu from "@/assets/Ramesh Babu.png";
import Aishwarya from "@/assets/Aishwarya Kannan.png";

import creativeOneImage from "@/assets/creative_1.png";
import creativeTwoImage from "@/assets/creative_2.png";
import creativeThreeImage from "@/assets/creative_3.png";
import creativeFourImage from "@/assets/creative_4.png";
import heroImage from "@/assets/hero_img.png";
import heroineImage from "@/assets/heroine_img.png";

const etherealMysteryVideo = "/assets/0_Ethereal_Mysterious_1920x1080.mp4";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Andharan - A Haunting Tale of Love and Darkness" },
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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <LandingContent />
    </main>
  );
}

const characters = [
  {
    name: "Prajin",
    role: "As Chezhiyan",
    body: "A devoted Assistant Commissioner of Police determined to solve the mysterious deaths linked to Karthika.",
    image: heroImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/prajinpadmanabhan/?hl=en",
    },
  },
  {
    name: "Ivana",
    role: "As Karthika",
    body: "A young woman haunted by fear, isolation, and a deadly pattern that destroys every relationship in her life.",
    image: heroineImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/ivanavarun?igsh=dzY5b3FjYWJwNHoz",
    },
  },
  {
    name: "Sambasivam Krishnan",
    role: "As Shankar",
    body: "Father Of Heroine also antagonist Role",
    image: actorTwoImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/accounts/login/?next=%2Fskpoffl&source=omni_redirect",
    },
  },
  {
    name: "Adhiran",
    role: "As Aditya",
    body: (
      <>
        Important Lead Character
        <br />
        Heroine First Lover
      </>
    ),
    image: actorThreeImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/adhiran.actor?igsh=MjBwYzBzYm52M3Ri",
    },
  },
  {
    name: "Anupama Kumar",
    role: "As Pyschiatrist",
    body: "Psychiatrist Character Hero Aunty",
    image: anupama,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/anupamakumarone?igsh=Nmpvam50azRuNTIw",
    },
  },
  {
    name: "Senthil Kumari",
    role: "As Lakshmi",
    body: "Heroine Mother ",
    image: senthilkumari,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/senthi_kumari15?igsh=eTk3eGd5aDFvZndv",
    },
  },
  {
    name: "Rameshbabu",
    role: "As Young Chezhiyan",
    body: "Young Hero Character ",
    image: Rameshbabu,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/rameshbabu______?igsh=MmpkcW4zem40dDhj",
    },
  },
  {
    name: "Aishwarya Kannan",
    role: "As Kalaivani",
    body: "Sub Inspector Of investigation Murdered.",
    image: Aishwarya,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/kannan.aishwarya_official?igsh=MXg2bjl4eTI2dGJlaA==",
    },
  },
];

const team = [
  {
    title: "Director",
    name: "Santhosh Kumar Raavanan",
    body: `Born and raised in Chennai, Director Santhosh Kumar Raavanan brings a highly technical and visually striking approach to feature-film storytelling. An alumnus of
  the Chennai Film Industry School, ECR, his foundations span across independent
  short films, advertising, and high-tier television drama production. After serving as a
  crucial assistant director under the acclaimed filmmaker Bramma, Santhosh
  achieved massive digital success with his award-winning short film "Nediya
  kazhiyum ira"—which garnered over 8 million views on Behindwoods and claimed
  15 national awards. Andharan stands as his feature directorial showcase.`,
    image: creativeOneImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/santhoshraavanan19?igsh=bnJlbTJlbGJjZXg1",
    },
  },
  {
    title: "Music Director",
    name: "Hari S R",
    body: `The complex emotional and terrifying atmosphere of Andharan is orchestrated by modern cinema’s dynamic music director and programmer, Hari S R. Known for his atmospheric composition styles in films like Kaalangalil Aval Vasantham and Akkaran, as well as his rich background scoring work for Soodhu Kavvum 2, Hari builds intricate acoustic worlds. As a long-standing creative associate of legendary music director Thaman S, his technical expertise and arrangements have shaped over 100 of Indian cinema’s most massive modern soundtracks, including Guntur Kaaram, OG, Game Changer, RajaSaab, and Akhanda 2.`,
    image: creativeTwoImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/hari_sr_?igsh=ZXA1ZWJpeDJoa3p1",
    },
  },
  {
    title: "Cinematographer",
    name: "Kishore Kumar R",
    body: "Cinema is the art of writing with light, and for Andharan, those lines were masterfully drawn by cinematographer Kishore Rama. Tasked with defining the film's visual language, Kishore utilized innovative camera techniques and a meticulously curated aesthetic to elevate the tension of the script. The work he has done on this film is a powerful evolution of his previous camera work, which spans a diverse portfolio of artistic shorts, visually commanding narratives, and independent pieces celebrated for their mood and texture. His framing doesn't just capture the actors; it captures the unspoken subtext of every scene.",
    image: creativeThreeImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/kishore_rama?igsh=MXVzeDV5ZGFrdGRtNw==",
    },
  },
  {
    title: "Editor",
    name: "Ignaitious Aswin",
    body: `The intense pacing, tension, and structural design of Andharan are crafted by master film editor Ignaitious Aswin. Celebrated for his exceptional sense of visual rhythm and storytelling structure, Aswin’s editing portfolio features some of the most stylistically distinct films in modern cinema, including Kadaseela Biriyani, Soodhu Kavvum 2, Pizza 3, Pubgoa, Pechi, and Kottravai.`,
    image: creativeFourImage,
    position: "center",
    social: {
      instagram: "https://www.instagram.com/ignatiousaswin?igsh=aXdhczNxZWYyNTJo",
    },
  },
];

const soundscapeTracks = [
  {
    title: "TRACK 01: ADADA THIRUDA",
    subtitle: "The Heartbeat of First Love",
    vibe: "A dream-like, incredibly soothing love melody that opens a window into the heroine's deepest romantic vulnerabilities. The piece captures an innocent, subtle charm through tender vocal landscapes.",
    credits: "Vocals by Chinmayi | Lyrics by Mohan Rajan",
  },
  {
    title: "TRACK 02: NILAVIN OLI NEEYADI",
    subtitle: "The Protector's Confession",
    vibe: "A deeply expressive, soul-stirring montage track presented entirely from the hero's perspective. It weaves a delicate narrative of quiet admiration and protective, enduring love.",
    credits: "Vocals by Vijay Narain | Lyrics by Karthik Netha",
  },
  {
    title: "TRACK 03: CHELLA PULLA",
    subtitle: "The Echo of Youth",
    vibe: "A vibrant, highly nostalgic, and energetic track capturing the hero's early teenage years. It serves as a playful, charming ode to the innocent obsession of unrequited, youthful love.",
    credits: "Vocals by Aravind Srinivas | Lyrics by Hariharan",
  },
];

function LandingContent() {
  return (
    <>
      <section
        id="story-overview"
        className="relative flex min-h-[560px] scroll-mt-24 items-center justify-center overflow-hidden bg-black px-6 py-[128px] text-center md:py-[112px]"
      >
        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-100 [filter:brightness(1.65)_contrast(1.15)_saturate(1.2)]"
          src={etherealMysteryVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={(event) => {
            void event.currentTarget.play();
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/20 to-black/65" />
        <div className="relative z-10">
          <SectionHeading
            eyebrow="Story Overview"
            title={
              <>
                A Love Story Wrapped In Fear & <span className="text-[#F6B76F]">Mystery</span>
              </>
            }
          />
          <p className="mx-auto mt-8 max-w-[752px] text-center text-sm font-normal capitalize leading-[26px] text-[#CACACA]">
            Karthika, a young woman haunted by a deadly pattern, every man she becomes engaged to
            dies under mysterious, untraceable circumstance, lives in the shadow of fear and
            isolation. When Chezhiyan, a devoted police officer and her former love, returns to
            investigate the chilling deaths, he uncovers a truth far more terrifying than he ever
            imagined. As the case draws him deeper into Karthika's cursed world, one question
            remains: can he save her, or will the darkness consume them both?
          </p>
        </div>
      </section>

      <section
        id="soundscape"
        className="relative scroll-mt-24 overflow-hidden bg-black px-6 py-20 text-white md:py-24"
      >
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,183,111,0.16),transparent_32%,rgba(86,46,0,0.36)_100%)]" />
        <div className="relative z-10 mx-auto max-w-[1080px]">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="text-base font-black uppercase leading-[30px] text-white">
              The Soundscape
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Audio Interactive <span className="text-[#F6B76F]">Hub</span>
            </h2>
          </div>
          <div className="mt-10 border-y border-[#F6B76F]/30 py-8 text-[15px] leading-7 text-[#D7D7D7] md:text-base">
            <p className="text-lg font-semibold text-white">
              <span className="text-[#F6B76F]">Sonic Overview:</span> The Maestro Hari S R
            </p>
            <p className="mt-4">
              The complex emotional and terrifying atmosphere of Andharan is orchestrated by modern
              cinema's dynamic music director and programmer, Hari S R. Known for his atmospheric
              composition styles in films like Kaalangalil Aval Vasantham and Akkaran, as well as
              his rich background scoring work for Soodhu Kavvum 2, Hari builds intricate acoustic
              worlds. As a long-standing creative associate of legendary music director Thaman S,
              his technical expertise and arrangements have shaped over 100 of Indian cinema's most
              massive modern soundtracks, including Guntur Kaaram, OG, Game Changer, RajaSaab, and
              Akhanda 2.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#F6B76F]">
              <span className="border border-[#F6B76F]/40 px-4 py-2">Spotify</span>
              <span className="border border-[#F6B76F]/40 px-4 py-2">Apple Music</span>
              <span className="border border-[#F6B76F]/40 px-4 py-2">Amazon Music</span>
              <span className="border border-[#F6B76F]/40 px-4 py-2">YouTube Audio</span>
            </div>
          </div>
          <div className="mt-10 grid gap-5 text-[15px] leading-7 md:text-base">
            {soundscapeTracks.map((track) => (
              <article
                key={track.title}
                className="border border-white/15 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.14em] text-[#F6B76F]">
                      {track.title}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">{track.subtitle}</h3>
                  </div>
                  <span className="w-fit border border-[#F6B76F]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#F6B76F]">
                    Track
                  </span>
                </div>
                <div className="mt-5 space-y-3 text-[#D0D0D0]">
                  <p>
                    <strong className="text-white">Vibe Archive:</strong> {track.vibe}
                  </p>
                  <p>
                    <strong className="text-white">Credits:</strong> {track.credits}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="main-characters" className="scroll-mt-24 bg-black px-6 pb-[100px] pt-[106px]">
        <SectionHeading eyebrow="Main Characters" title="The Faces Behind The Mystery" />
        <div className="mx-auto mt-[72px] grid max-w-[1250px] grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character, index) => (
            <ProfileCard key={`${character.name}-${index}`} {...character} imageSize="cover" />
          ))}
        </div>
      </section>

      <section id="creative-team" className="scroll-mt-24 bg-black px-6 pb-[150px] pt-1">
        <SectionHeading
          eyebrow="Creative Team"
          title={
            <>
              The Minds Behind <span className="text-[#F6B76F]">Andharan</span>
            </>
          }
        />
        <div className="mx-auto mt-[72px] grid max-w-[1250px] grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <ProfileCard
              key={member.title}
              name={member.title}
              role={member.name}
              body={member.body}
              image={member.image}
              position={member.position}
              compact
              imageSize="cover"
              social={member.social}
            />
          ))}
        </div>
      </section>

      <section
        id="theatrical-credits"
        className="scroll-mt-24 bg-black px-6 py-20 text-white md:py-24"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-4xl">
              Credits <span className="text-[#F6B76F]">Roll</span>
            </h2>
          </div>

          <TheatricalCreditsCarousel />
        </div>
      </section>

      <section className="relative flex min-h-[692px] items-center justify-center overflow-hidden bg-gradient-to-b from-black from-20% to-[#562E00] px-6 py-28 text-center">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="relative z-10 flex max-w-[907px] flex-col items-center gap-6">
          <h2 className="text-4xl font-bold capitalize leading-tight text-[#F6B76F] md:text-[64px] md:leading-[55px]">
            Experience The Darkness
          </h2>
          <p className="max-w-[885px] text-base font-normal capitalize leading-[31px] text-white md:text-xl">
            Andharan promises a haunting cinematic experience blending suspense, romance, emotional
            storytelling, and unforgettable music.
          </p>

          {/* Social Media Icons */}
          <div className="mt-8 flex items-center justify-center gap-8">
            <a
              href="https://www.instagram.com/andharanmovie?igsh=MXJ3bWNyejBma2Ztcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-[#F6B76F] transition-all hover:bg-[#F6B76F] hover:text-[#1D1D1D]"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://x.com/andharanmovie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-[#F6B76F] transition-all hover:bg-[#F6B76F] hover:text-[#1D1D1D]"
              aria-label="X"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.17-6.76-5.91 6.76h-3.308l7.73-8.835L2.42 2.25h6.76l4.694 6.207 5.37-6.207zM17.002 18.335h1.834L6.822 4.156H4.881l12.121 14.179z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@andharanthehunter?si=LlInbond-EdKUcUY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-[#F6B76F] transition-all hover:bg-[#F6B76F] hover:text-[#1D1D1D]"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://www.facebook.com/andharanmovie?__cft__[0]=AZb80cy5pPk0xyPYzhyra86V8HCWfUlZ2-YnRuSruK7oQfLFbCHa24WeaR8iRAH9-TFfVAX0hwQ5gh6hlDHmFTPIBkw5nibtH7eaN0PPly99bp1DCnci6xn1A4pHJPMN88xbeA0Yq0Wz4OS88QcQWsbhhGsDWe5rvdCFAz5VZQB9wGSitni0fBVrtOkj4VGH_O_SVUPr5GiapTru1JUPPJMn&__tn__=-UC%2CP-R"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full bg-white/10 p-4 text-[#F6B76F] transition-all hover:bg-[#F6B76F] hover:text-[#1D1D1D]"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
          </div>

          <a
            href="https://www.instagram.com/andharanmovie?igsh=MXJ3bWNyejBma2Ztcw=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[72px] inline-flex h-[75px] w-full max-w-[398px] items-center justify-center rounded-[10px] bg-[#F6B76F] text-xl font-medium capitalize text-[#1D1D1D] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all hover:bg-[#E8A855] md:text-2xl"
          >
            Follow Movies Updates
          </a>
        </div>
      </section>
    </>
  );
}

function TheatricalCreditsCarousel() {
  const credits = [
    { role: "SHRI KRISH PICTURES", name: "Presents" },
    { role: "Production Banner", name: " M.K. SAMBASIVAM" },
    { role: "Starring", name: "PRAJIN – IVANA" },
    { role: "Written & Directed by", name: "SANTHOSH RAAVANAN" },
    { role: "Produced by", name: "M.K. SAMBASIVAM" },
    {
      role: "Co-Producers",
      name: "R. SUNDHARAMOORTHY - K. VUVAKUMARI - S. SUDHAKAR",
    },
    { role: "Executive Producers", name: "SANTHOSH - HARIHARAN" },
    { role: "Director of Photography", name: "KISHORE RAMACHANDRAN" },
    { role: "Music", name: "HARI SR" },
    { role: "Editors", name: "IGNAITIOUS ASWIN - SATHISH KUROSAWA" },
    { role: "Art Director", name: "V. SASI KUMAR" },
    { role: "Stunt Director", name: "RAM KUMAR" },
    { role: "Choreography", name: "VIISATISH" },
    { role: "Wardrobe", name: "RITHESH SELVARAJ" },
    { role: "Production Executives", name: "VIJAYAN - SELVENDRAN S" },
    { role: "Audiography", name: "LALGUDI M HARIHARAN" },
    { role: "Studio", name: "CUVIYAM STUDIOS" },
    { role: "VFX", name: "MK STUDIOS" },
    { role: "Colorist", name: "DEEPAN VIJAY (DE INFINITY MEDIA)" },
    { role: "Publicity Design", name: "GIBSON UGA" },
    { role: "PRO", name: "NIKIL MURUKAN" },
  ];

  const creditsRow1 = credits.slice(0, 11);
  const creditsRow2 = credits.slice(11);

  const CreditsRow = ({ credits: rowCredits }: { credits: typeof credits }) => {
    const extendedCredits = Array.from({ length: 3 }, () => rowCredits).flat();

    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6 py-4 will-change-transform"
          animate={{ x: [0, -3000] }}
          transition={{
            duration: 85,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {extendedCredits.map((credit, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center rounded-[10px] border border-[#F6B76F]/30 bg-white/[0.06] px-4 py-4 backdrop-blur-sm min-w-fit"
            >
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F6B76F]">
                  {credit.role}
                </p>
                <p className="mt-1 text-xs font-medium text-white">{credit.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Row 1 - Gradient overlays for fade effect */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-8 md:w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-8 md:w-20 bg-gradient-to-l from-black to-transparent" />
        <CreditsRow credits={creditsRow1} />
      </div>

      {/* Row 2 - Gradient overlays for fade effect */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-8 md:w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-8 md:w-20 bg-gradient-to-l from-black to-transparent" />
        <CreditsRow credits={creditsRow2} />
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-[950px] flex-col items-center gap-2.5 text-center">
      <p className="text-base font-black uppercase leading-[30px] text-white">{eyebrow}</p>
      <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ProfileCard({
  name,
  role,
  body,
  image,
  position,
  compact = false,
  imageSize,
  social,
}: {
  name: string;
  role: string;
  body: ReactNode;
  image: string;
  position: string;
  compact?: boolean;
  imageSize: string;
  social?: Partial<Record<string, string>>;
}) {
  const [expanded, setExpanded] = useState(false);
  const bodyText = typeof body === "string" ? body.trim() : "";
  const canExpand = typeof body !== "string" || bodyText.length > 86;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "github":
        return <Github size={16} />;
      case "mail":
      case "email":
        return <Mail size={16} />;
      default:
        return null;
    }
  };

  return (
    <article
      className={`box-border flex shrink-0 flex-col items-center gap-5 rounded-[20px] border border-white bg-white/10 p-5 text-center ${
        compact ? "min-h-[478px] w-[290px]" : "min-h-[498px] w-[299px]"
      }`}
    >
      <div
        className={`w-full shrink-0 overflow-hidden rounded-[10px] bg-[#CDCDCD] ${
          compact ? "h-[304px]" : "h-[304px]"
        }`}
      >
        <div
          className="h-full w-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: position,
            backgroundSize: imageSize,
          }}
        />
      </div>
      <div className="flex w-full max-w-[245px] flex-col items-center gap-2.5">
        <div className="flex items-center justify-center gap-2">
          <h3 className="flex min-h-[26px] items-center justify-center text-center text-xl font-bold uppercase leading-[31px] text-[#F6B76F]">
            {name}
          </h3>
          {social && Object.entries(social).filter(([, url]) => url).length > 0 && (
            <div className="flex gap-2">
              {Object.entries(social)
                .filter(([, url]) => url)
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-[#F6B76F] hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
            </div>
          )}
        </div>
        <div className="flex w-full flex-col items-center gap-[5px]">
          <p
            className={`flex items-center justify-center text-center text-base capitalize text-[#F6B76F] ${
              compact ? "min-h-[19px] font-medium" : "min-h-[30px] font-semibold"
            }`}
          >
            {role}
          </p>
          <div
            className={`w-full overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              expanded ? "max-h-[420px]" : "max-h-[36px]"
            }`}
          >
            <p className="text-center text-xs font-normal capitalize leading-[18px] text-white">
              {body}
            </p>
          </div>
          {canExpand && (
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((current) => !current)}
              className="mt-1 text-xs font-semibold capitalize leading-5 text-[#F6B76F] transition hover:text-white"
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
