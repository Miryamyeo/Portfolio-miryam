"use client";

import { useState } from "react";

const categories = [
  {
    title: "Frontend",
    icon: "🖥️",
    skills: [
      "React",
      "Next.js",
      "HTML / CSS",
      "Tailwind CSS",
      "TypeScript",
    ],
    color: "#7c6af7",
  },
  {
    title: "Mobile",
    icon: "📱",
    skills: [
      "React Native",
      "Expo",
      "NativeWind",
      "Expo Router",
    ],
    color: "#4fa8d8",
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Laravel",
      "NestJS",
      "Node.js",
      "REST API",
      "MySQL",
      "MongoDB",
    ],
    color: "#3db87a",
  },
  {
    title: "Outils",
    icon: "🛠️",
    skills: [
      "Git",
      "VS Code",
      "Docker",
      "Merise",
      "Figma",
    ],
    color: "#e8a045",
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      <p
        className="text-xs font-semibold tracking-widest mb-2"
        style={{
          color: "#7c6af7",
          letterSpacing: "0.18em",
        }}
      >
        COMPÉTENCES
      </p>

      <h2
        className="font-black mb-14"
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          letterSpacing: "-0.03em",
          color: "#e8e6f0",
        }}
      >
        Ce que je maîtrise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => {
          const isHovered = hovered === i;

          return (
            <div
              key={cat.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-3xl p-[2px] transition-all duration-500"
              style={{
                background: isHovered
                  ? `linear-gradient(
                      135deg,
                      ${cat.color},
                      #ffffff50,
                      ${cat.color}
                    )`
                  : `linear-gradient(
                      135deg,
                      ${cat.color}80,
                      transparent,
                      ${cat.color}50
                    )`,
                boxShadow: isHovered
                  ? `0 0 30px ${cat.color}30`
                  : "none",
                transform: isHovered
                  ? "translateY(-6px)"
                  : "translateY(0)",
              }}
            >
              {/* Deuxième bordure dégradée */}
              <div
                className="rounded-[22px] p-[1px] h-full"
                style={{
                  background: isHovered
                    ? `linear-gradient(
                        225deg,
                        ${cat.color},
                        transparent,
                        ${cat.color}
                      )`
                    : `linear-gradient(
                        225deg,
                        ${cat.color}60,
                        transparent,
                        ${cat.color}30
                      )`,
                }}
              >
                {/* Contenu */}
                <div
                  className="relative rounded-[20px] p-6 h-full overflow-hidden"
                  style={{
                    background: "#0f0f1a",
                  }}
                >
                  {/* Lueur */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(
                        circle at top left,
                        ${cat.color}20 0%,
                        transparent 70%
                      )`,
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

                  {/* Icône */}
                  <div
                    className="relative flex items-center justify-center text-2xl mb-5 rounded-2xl transition-all duration-300"
                    style={{
                      width: "52px",
                      height: "52px",
                      background: `${cat.color}15`,
                      border: `1px solid ${cat.color}40`,
                      boxShadow: isHovered
                        ? `0 0 20px ${cat.color}30`
                        : "none",
                    }}
                  >
                    {cat.icon}
                  </div>

                  {/* Titre */}
                  <h3
                    className="relative font-bold mb-5 text-base transition-colors duration-300"
                    style={{
                      color: isHovered
                        ? cat.color
                        : `${cat.color}cc`,
                    }}
                  >
                    {cat.title}
                  </h3>

                  {/* Compétences */}
                  <ul className="relative space-y-3">
                    {cat.skills.map((skill, j) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm transition-all duration-300"
                        style={{
                          color: isHovered
                            ? "#d7d5e3"
                            : "#7a7690",
                          transitionDelay: `${j * 40}ms`,
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: isHovered
                              ? cat.color
                              : `${cat.color}70`,
                            boxShadow: isHovered
                              ? `0 0 8px ${cat.color}`
                              : "none",
                          }}
                        />

                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}