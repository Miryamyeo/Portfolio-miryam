"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* ── Étoiles animées (mix blanc + turquoise) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => {
          const isTeal = i % 3 === 0;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2.5 + 0.8 + "px",
                height: Math.random() * 2.5 + 0.8 + "px",
                top: Math.random() * 72 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
                background: isTeal ? "#00e5c3" : "#fff",
                animation: `pulse-slow ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: Math.random() * 4 + "s",
              }}
            />
          );
        })}
      </div>

      {/* ── Orbe turquoise principal ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "4%",
          right: "4%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #00e5c3 0%, #009e88 30%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          opacity: 0.25,
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: "transform 0.8s ease",
        }}
      />

      {/* ── Orbe sombre central ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "30%",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, #000 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
          transition: "transform 1s ease",
        }}
      />

      {/* ── Lueur turquoise bas ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "18%",
          right: "18%",
          width: "340px",
          height: "340px",
          background: "linear-gradient(to top, rgba(0,229,195,0.18) 0%, transparent 100%)",
          filter: "blur(55px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* ── Lueur bas de page ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          left: "0",
          right: "0",
          height: "50%",
          background: "linear-gradient(to top, rgba(0,229,195,0.06) 0%, transparent 100%)",
        }}
      />
    {/* ── Tunnel futuriste interactif ── */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
  {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full"
      style={{
        width: `${220 + i * 90}px`,
        height: `${220 + i * 90}px`,
        border: "1.5px solid rgba(0,229,195,0.15)",
        boxShadow: `
          0 0 ${10 + i * 2}px rgba(0,229,195,0.15),
          inset 0 0 ${15 + i * 2}px rgba(0,229,195,0.08)
        `,
        transform: `
          perspective(900px)
          rotateX(72deg)
          translateX(${mousePos.x * (i * 0.12)}px)
          translateY(${i * 12 + mousePos.y * (i * 0.08)}px)
          rotateZ(${mousePos.x * 0.15}deg)
          scale(${1 - i * 0.02})
        `,
        transition: "transform 0.3s ease-out",
        animation: `tunnelMove ${6 + i * 0.4}s linear infinite`,
        animationDelay: `${i * 0.3}s`,
      }}
    />
  ))}
</div>
      {/* ── Photo ── */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%] overflow-hidden pointer-events-none">
        <Image
          src="/DAN_4511-removebg-preview.png"
          alt="Miryam Yeo"
          fill
          priority
          className="object-cover object-top"
          style={{
            transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px) scale(1.05)`,
            animation: "floatPhoto 6s ease-in-out infinite",
            transition: "transform 0.8s ease",
            filter: "drop-shadow(0 20px 50px rgba(0,229,195,0.4))",
          }}
        />

        {/* Dégradé gauche */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #000 0%, transparent 55%)",
          }}
        />

        {/* Dégradé bas */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #000 0%, transparent 40%)",
          }}
        />

        {/* Lueur turquoise sous photo */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(0,229,195,0.3) 0%, transparent 70%)",
            filter: "blur(55px)",
            animation: "pulseGlow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Dégradé bas de page ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #000 0%, transparent 100%)",
        }}
      />

      {/* ── Contenu texte ── */}
      <div className="relative z-10 w-full px-8 md:px-16 pb-16 md:pb-20">

        {/* Grand nom */}
        <h1
          className="font-black leading-none mb-6 select-none"
          style={{
            fontSize: "clamp(4rem, 13vw, 11rem)",
            letterSpacing: "-0.04em",
            color: "#fff",
            lineHeight: 0.92,
            textShadow: "0 0 80px rgba(0,229,195,0.15)",
          }}
        >
          Yeo
          <br />
          <span style={{ color: "#d0faf4" }}>Miryam</span>
        </h1>

        {/* Séparateur + rôle animé */}
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-8" style={{ background: "#00e5c3" }} />
          <TypeAnimation
            sequence={[
              "Développeuse Web & Mobile", 2000,
              "React & Next.js", 2000,
              "React Native", 2000,
              "Laravel & NestJS", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#00e5c3" }}
          />
        </div>

        {/* Bio */}
        <p
          className="mb-8 leading-relaxed text-white max-w-sm text-sm md:text-base"
        >
          Développeuse passionnée, je conçois des applications web et mobiles pensées pour résoudre des problèmes réels et créer des expériences utiles — basée à Abidjan.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
            className=" bg-cyan-400 flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:gap-4"
            style={{
              color: "#000",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 24px rgba(0,229,195,0.35)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#22d3ee";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(0,229,195,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#22d3ee";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(0,229,195,0.35)";
            }}
          >
            Me contacter
            <span className="text-base">→</span>
          </button>

          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm font-medium transition-colors duration-200 text-cyan-400"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
            onMouseLeave={e => (e.currentTarget.style.color = "#22d3ee")}
          >
            Voir mes projets
          </button>
        </div>
      </div>
    </section>
  );
}
