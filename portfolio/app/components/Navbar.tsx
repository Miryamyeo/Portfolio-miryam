"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "À propos", id: "about" },
  { label: "Compétences", id: "skills" },
  { label: "Parcours", id: "parcours" },
  { label: "Projets", id: "projects" },
  { label: "Contact", id: "ContactPage" },
  { label: "CV", id: "" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #2a2840" : "none",
      }}
    >
      <span className="font-black text-cyan-400 text-lg tracking-tight">MY.</span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(l => (
          <li key={l.id}>
            <button
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer"
              style={{ color: "#8b87a0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#e8e6f0")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8b87a0")}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        className="md:hidden bg-transparent border-none cursor-pointer text-xl"
        style={{ color: "#e8e6f0" }}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-5 px-6 py-6"
          style={{ background: "rgba(10,10,15,0.98)", borderBottom: "1px solid #2a2840" }}
        >
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-left text-base font-medium bg-transparent border-none cursor-pointer"
              style={{ color: "#e8e6f0" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
