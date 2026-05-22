import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
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
import etherealMysteryVideo from "@/assets/0_Ethereal_Mysterious_1920x1080.mp4";
import heroBg from "@/assets/hero-bg.jpg";
import heroPoster from "@/assets/hero-poster.png";
import heroImage from "@/assets/hero_img.png";
import heroineImage from "@/assets/heroine_img.png";

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
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <LandingContent />
    </main>
  );
}

const proofPoints = [
  {
    title: "Cinematic Presentation",
    body: "Dark visuals, red accents, and thriller typography create a strong theatrical atmosphere.",
  },
  {
    title: "Emotional Storytelling",
    body: "The content highlights both mystery and romance, helping audiences emotionally connect with the film.",
  },
  {
    title: "Music Promotion Focus",
    body: "Dedicated music sections showcase the singles and create anticipation for the soundtrack release.",
  },
  {
    title: "Strong Branding",
    body: " Bold hero sections and cinematic layouts make the movie look premium and suitable for promotions.",
  },
];

const characters = [
  {
    name: "Prajin",
    role: "As Chezhiyan",
    body: "A devoted Assistant Commissioner of Police determined to solve the mysterious deaths linked to Karthika.",
    image: heroImage,
    position: "center",
  },
  {
    name: "Ivana",
    role: "As Karthika",
    body: "A young woman haunted by fear, isolation, and a deadly pattern that destroys every relationship in her life.",
    image: heroineImage,
    position: "center",
  },
  {
    name: "Sambasivam Krishnan",
    role: "As Shankar",
    body: "Father Of Heroine also antagonist Role",
    image: actorTwoImage,
    position: "center",
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
},
  {
    name: "Anupama Kumar",
    role: "As Pyschiatrist",
    body: "Psychiatrist Character Hero Aunty",
    image: anupama,
    position: "center",
  },
  {
    name: "Senthil Kumari",
    role: "As Lakshmi",
    body: "Heroine Mother ",
    image: senthilkumari,
    position: "center",
  },
  {
    name: "Rameshbabu",
    role: "As Young Chezhiyan",
    body: "Young Hero Character ",
    image: Rameshbabu,
    position: "center",
  },
  {
    name: "Aishwarya Kannan",
    role: "As Kalaivani",
    body: "Sub Inspector Of investigation Murdered.",
    image: Aishwarya,
    position: "center",
  },
];

const team = [
  {
    title: "Director",
    name: "Santhosh Kumar Raavanan",
    body: "Known for emotionally intense storytelling and award-winning short films.",
    image: creativeOneImage,
    position: "center",
  },
  {
    title: "Music Director",
    name: "Hari S R",
    body: "Composer behind cinematic emotional soundtracks and large-scale Indian film collaborations.",
    image: creativeTwoImage,
    position: "center",
  },
  {
    title: "Cinematographer",
    name: "Kishore Kumar R",
    body: "Visual storyteller experienced in feature films, web series, and cinematic shorts.",
    image: creativeThreeImage,
    position: "center",
  },
  {
    title: "Editor",
    name: "Ignaitious Aswin",
    body: "Editor known for dynamic storytelling rhythm and thriller pacing.",
    image: creativeFourImage,
    position: "center",
  },
];

function LandingContent() {
  return (
    <>
      <section
        id="story-overview"
        className="scroll-mt-24 bg-black px-6 pb-[92px] pt-[128px] text-center md:pt-[112px]"
      >
        <SectionHeading
          eyebrow="Story Overview"
          title={
            <>
              A Love Story Wrapped In Fear & <span className="text-[#F6B76F]">Mystery</span>
            </>
          }
        />
        <p className="mx-auto mt-8 max-w-[752px] text-center text-sm font-normal capitalize leading-[26px] text-[#CACACA]">
          Karthika, a young woman haunted by a deadly pattern, every man she becomes engaged to dies
          under mysterious, untraceable circumstance, lives in the shadow of fear and isolation.
          When Chezhiyan, a devoted police officer and her former love, returns to investigate the
          chilling deaths, he uncovers a truth far more terrifying than he ever imagined. As the
          case draws him deeper into Karthika's cursed world, one question remains: can he save her,
          or will the darkness consume them both?
        </p>
      </section>

      <section
        id="why-it-works"
        className="relative min-h-[689px] scroll-mt-24 overflow-hidden bg-black px-6 py-[132px]"
      >
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-100"
          src={etherealMysteryVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/15 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 z-[1] h-1/2 bg-gradient-to-t from-[#182029]/55 via-black/10 to-transparent" />
        <div className="relative z-10 mx-auto flex max-w-[1095px] flex-col items-center gap-[60px]">
          <h2 className="text-center text-3xl font-black uppercase leading-tight md:text-4xl">
            Why This Landing Page <span className="text-[#F6B76F]">Works</span>
          </h2>
          <div className="grid w-full gap-x-[58px] gap-y-[108px] md:grid-cols-2">
            {proofPoints.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="mx-auto flex max-w-[518px] flex-col items-center gap-[5px] text-center"
              >
                <h2 className="text-xl font-black uppercase tracking-wide leading-[30px] text-[#F6B76F]">
                  {item.title}
                </h2>
                <p className="text-base font-normal capitalize leading-[23px] text-white">
                  {item.body}
                </p>
              </div>
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
            />
          ))}
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
          <button className="mt-[72px] h-[75px] w-full max-w-[398px] rounded-[10px] bg-[#F6B76F] text-xl font-medium capitalize leading-[55px] text-[#1D1D1D] shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:text-2xl">
            Follow Movies Updates
          </button>
        </div>
      </section>
    </>
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
}: {
  name: string;
  role: string;
  body: string;
  image: string;
  position: string;
  compact?: boolean;
  imageSize: string;
}) {
  return (
    <article
      className={`box-border flex shrink-0 flex-col items-center gap-5 rounded-[20px] border border-white bg-white/10 p-5 text-center ${compact ? "h-[478px] w-[290px]" : "h-[498px] w-[299px]"
        }`}
    >
      <div
        className={`w-full overflow-hidden rounded-[10px] bg-[#CDCDCD] ${compact ? "h-[304px]" : "h-[304px]"
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
        <h3 className="flex min-h-[26px] items-center justify-center text-center text-xl font-bold uppercase leading-[31px] text-[#F6B76F]">
          {name}
        </h3>
        <div className="flex w-full flex-col items-center gap-[5px]">
          <p
            className={`flex items-center justify-center text-center text-base capitalize text-[#F6B76F] ${compact ? "min-h-[19px] font-medium" : "min-h-[30px] font-semibold"
              }`}
          >
            {role}
          </p>
          <p className="flex min-h-[38px] items-center justify-center text-center text-xs font-normal capitalize leading-[18px] text-white">
            {body}
          </p>
        </div>
      </div>
    </article>
  );
}
