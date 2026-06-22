"use client";

const links = [
  { label: "GitHub", icon: "🐙", href: "https://github.com/ton-username" },
  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/ton-profil" },
  { label: "Email", icon: "✉️", href: "mailto:ton@email.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 pb-32 px-6 max-w-4xl mx-auto">
      <p
        className="text-xs font-semibold tracking-widest mb-2"
        style={{ color: "#7c6af7", letterSpacing: "0.18em" }}
      >
        CONTACT
      </p>
      <h2
        className="font-black mb-4"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em", color: "#e8e6f0" }}
      >
        Travaillons
        <br />
        <span style={{ color: "#a89cf8" }}>ensemble</span>
      </h2>
      <p className="mb-12 max-w-md leading-relaxed" style={{ color: "#8b87a0", fontSize: "1rem" }}>
        Disponible pour des stages, projets freelance ou collaborations académiques.
        N'hésite pas à me contacter !
      </p>

      <div className="flex flex-wrap gap-3">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200"
            style={{
              background: "#12121a",
              border: "1px solid #2a2840",
              color: "#e8e6f0",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#7c6af7";
              (e.currentTarget as HTMLAnchorElement).style.color = "#a89cf8";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2840";
              (e.currentTarget as HTMLAnchorElement).style.color = "#e8e6f0";
            }}
          >
            <span>{l.icon}</span>
            {l.label}
            <span className="text-xs" style={{ color: "#5a5670" }}>(à remplir)</span>
          </a>
        ))}
      </div>

      <div
        className="mt-20 pt-6 flex justify-between flex-wrap gap-3 text-xs"
        style={{ borderTop: "1px solid #2a2840", color: "#5a5670" }}
      >
        <span>© 2024 Yeo Canidanan Miryam</span>
        <span>Abidjan, Côte d'Ivoire 🇨🇮</span>
      </div>
    </section>
  );
}
