"use client";
import { useState } from "react";

const projects = [
  {
    name: "TrellApp",
    type: "Mobile",
    year: "2024",
    desc: "Application mobile de gestion de tâches intégrant l'API Trello via OAuth. Développée avec React Native, Expo Router et NativeWind.",
    tags: ["React Native", "Expo", "OAuth", "TypeScript"],
    accent: "#7c6af7",
    num: "01",
    github: "#",
  },
  {
    name: "TEMAFlix",
    type: "Web App",
    year: "2024",
    desc: "Plateforme de streaming style Netflix connectée à l'API TMDB et un backend NestJS.",
    tags: ["Next.js", "NestJS", "MongoDB", "TMDB API"],
    accent: "#e8a045",
    num: "02",
    github: "#",
  },
  {
    name: "EduHeures",
    type: "Web App",
    year: "2024",
    desc: "Système de gestion académique avec authentification Fortify et dashboard Blade.",
    tags: ["Laravel", "MySQL", "Merise", "Tailwind CSS"],
    accent: "#3db87a",
    num: "03",
    github: "#",
  },
  {
    name: "AVEC Platform",
    type: "Site vitrine",
    year: "2024",
    desc: "Site pour la diaspora africaine souhaitant s'installer à Abidjan.",
    tags: ["HTML", "CSS", "Accessibilité", "Responsive"],
    accent: "#e06b8b",
    num: "04",
    github: "#",
  },
  {
    name: "Dashboard Widgets",
    type: "Web App",
    year: "2024",
    desc: "Dashboard style Netvibes avec widgets configurables.",
    tags: ["React", "Laravel", "Docker", "MySQL"],
    accent: "#4fa8d8",
    num: "05",
    github: "#",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 max-w-5xl mx-auto">
      {/* Titre */}
      <p
        className="text-xs font-semibold tracking-widest mb-2"
        style={{ color: "#7c6af7" }}
      >
        PROJETS
      </p>

      <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
        <h2
          className="font-black leading-none"
          style={{
            fontSize: "clamp(2rem,5vw,3rem)",
            color: "#e8e6f0",
          }}
        >
          Ce que j'ai
          <br />
          <span style={{ color: "#a89cf8" }}>
            construit
          </span>
        </h2>

        <p style={{ color: "#8b87a0" }}>
          {projects.length} projets
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((p, i) => (
          <div
            key={p.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-3xl p-[2px] overflow-hidden transition-all duration-500"
            style={{
              background:
                hovered === i
                  ? `linear-gradient(
                      135deg,
                      ${p.accent},
                      #ffffff,
                      ${p.accent}
                    )`
                  : "#2a2840",
              boxShadow:
                hovered === i
                  ? `0 0 30px ${p.accent}40`
                  : "none",
            }}
          >
            {/* Animation */}
            <div
              className={`absolute inset-0 opacity-40 ${
                hovered === i ? "animate-spin" : ""
              }`}
              style={{
                background: `conic-gradient(
                  from 0deg,
                  transparent,
                  ${p.accent},
                  transparent
                )`,
              }}
            />

            {/* Contenu */}
            <div
              className="relative rounded-3xl p-8 backdrop-blur-xl"
              style={{
                background: "#11111b",
              }}
            >
              <div className="flex items-start gap-6">
                {/* Numéro */}
                <span
                  className="font-mono text-sm font-bold"
                  style={{
                    color:
                      hovered === i
                        ? p.accent
                        : "#4a4860",
                  }}
                >
                  {p.num}
                </span>

                {/* Informations */}
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3
                        className="text-2xl font-bold transition-all"
                        style={{
                          color:
                            hovered === i
                              ? "#ffffff"
                              : "#d4d2e3",
                        }}
                      >
                        {p.name}
                      </h3>

                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${p.accent}20`,
                          color: p.accent,
                          border: `1px solid ${p.accent}40`,
                        }}
                      >
                        {p.type}
                      </span>
                    </div>

                    <span
                      style={{
                        color: "#8b87a0",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>

                  <p
                    className="leading-relaxed mb-5"
                    style={{
                      color:
                        hovered === i
                          ? "#a8a4bc"
                          : "#73708a",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-mono transition-all"
                        style={{
                          background:
                            hovered === i
                              ? `${p.accent}20`
                              : "#1a1a25",
                          color:
                            hovered === i
                              ? p.accent
                              : "#7a7694",
                          border: `1px solid ${
                            hovered === i
                              ? `${p.accent}40`
                              : "#2a2840"
                          }`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flèche */}
                <div
                  className="transition-all duration-300"
                  style={{
                    color:
                      hovered === i
                        ? p.accent
                        : "#4a4860",
                    transform:
                      hovered === i
                        ? "translateX(8px)"
                        : "translateX(0)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 10h12M10 4l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}