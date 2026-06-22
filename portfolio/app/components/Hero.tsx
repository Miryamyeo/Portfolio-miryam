"use client";
import { useEffect, useState } from "react";

const roles = [
  "Développeuse Full Stack",
  "React & Next.js",
  "React Native",
  "Laravel & NestJS",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grille animée */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Orbes flottantes */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,106,247,0.18) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,156,248,0.12) 0%, transparent 70%)",
          animation: "float-reverse 9s ease-in-out infinite",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,86,230,0.1) 0%, transparent 70%)",
          animation: "float 7s ease-in-out infinite 2s",
          filter: "blur(30px)",
        }}
      />

      {/* Particules décoratives */}
      {[
        { top: "20%", left: "10%", delay: "0s", size: "w-1 h-1" },
        { top: "60%", left: "5%", delay: "1s", size: "w-1.5 h-1.5" },
        { top: "30%", right: "8%", delay: "0.5s", size: "w-1 h-1" },
        { top: "70%", right: "15%", delay: "1.5s", size: "w-1 h-1" },
        { top: "45%", left: "88%", delay: "2s", size: "w-2 h-2" },
      ].map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.size} rounded-full bg-accent pointer-events-none`}
          style={{
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            background: "#7c6af7",
            animation: `pulse-slow 4s ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32">
        <p
          className="text-sm font-semibold tracking-widest mb-5"
          style={{ color: "#7c6af7", letterSpacing: "0.18em" }}
        >
          BONJOUR, JE SUIS
        </p>

        <h1
          className="font-black leading-none mb-4"
          style={{
            fontSize: "clamp(2.8rem, 9vw, 5.5rem)",
            letterSpacing: "-0.04em",
            color: "#e8e6f0",
          }}
        >
          Yeo Canidanan
          <br />
          <span style={{ color: "#a89cf8" }}>Miryam</span>
        </h1>

        {/* Rôle animé */}
        <div className="h-10 mb-6 overflow-hidden">
          <p
            key={index}
            className="role-animate text-xl font-medium"
            style={{
              color: "#8b87a0",
              fontSize: "clamp(1rem, 3vw, 1.4rem)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            ▸ {roles[index]}
          </p>
        </div>

        <p
          className="mb-10 leading-relaxed max-w-xl"
          style={{ color: "#8b87a0", fontSize: "1rem" }}
        >
          Étudiante en Licence 3 à l'UVCI et à l'Epitech Coding Academy (promo 2026),
          je suis développeuse full stack passionnée par la création d'applications web et mobiles.
          Basée à Abidjan, je construis des projets concrets allant du mobile avec React Native
          aux plateformes web avec Next.js et Laravel.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-80 active:scale-95"
            style={{ background: "#7c6af7", color: "#fff" }}
          >
            Voir mes projets
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-80 active:scale-95"
            style={{
              background: "transparent",
              color: "#a89cf8",
              border: "1px solid #7c6af7",
            }}
          >
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
}
