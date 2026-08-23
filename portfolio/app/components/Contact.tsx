"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "53d6f67d-6127-444f-a53d-3017678549f1"
    );

    formData.append(
      "subject",
      "Nouveau message depuis le portfolio de Miryam"
    );
    formData.append("replyto", formData.get("email") as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main
      id="Contact"
      className="min-h-screen bg-black text-white overflow-hidden relative"
    >
      {/* Glow */}
      <div className="absolute top-56 left-[35%] w-5 h-5 rounded-full bg-cyan-400 blur-sm shadow-[0_0_30px_#00e5ff]" />

      {/* Hero */}
      <section className="pt-40 text-center">
        <h1 className="text-8xl md:text-9xl font-bold mt-4">
          CONTACT
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10 ">
          <div className="px-8 py-4 rounded-full border border-zinc-800">
            0584625515
          </div>

          <div className="px-8 py-4 rounded-full border border-zinc-800  hover:border-cyan-400 hover:text-cyan-400 transition">
            yeomiryam6@gmail.com
          </div>
         <a
  href="/MIRYAM YEO CV.pdf"
  download="MIRYAM_YEO_CV.pdf"
  className="px-8 py-4 rounded-full border border-zinc-800 hover:border-cyan-400 hover:text-cyan-400 transition"
>
  Télécharger mon CV
</a>
        </div>
      </section>

      {/* Contenu */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-10 mt-28 pb-20">

        {/* Texte */}
        <div>
          <h2 className="text-5xl font-semibold text-cyan-300 mb-8">
            Un besoin ?
          </h2>

          <p className="text-zinc-300 text-lg leading-9">
            Si vous avez un projet ou un besoin en développement web
            (front-end ou back-end) ou en web design, n'hésitez pas à me
            contacter. Ce sera un plaisir d'échanger avec vous et de
            contribuer à la réussite de votre projet.
          </p>

          <p className="text-zinc-300 text-lg leading-9 mt-8">
            Nous échangerons par mail dans un premier temps puis sur
            WhatsApp afin de faciliter l'échange.
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="Nom et prenom"
            placeholder="Nom et Prénom *"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="text"
            name="projet"
            placeholder="Nom de l'entreprise / du projet"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <select
            name="prestation"
            required
            className="w-full bg-black border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          >
            <option value="">
              Choisissez votre prestation *
            </option>
            <option value="Développement Web">
              Développement Web
            </option>
            <option value="UI / UX Design">
              UI / UX Design
            </option>
            <option value="Application Mobile">
              Application Mobile
            </option>
          </select>

          <textarea
            name="message"
            rows={6}
            placeholder="Faites parler votre imagination ! *"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          {/* Message de succès */}
          {status === "success" && (
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-300">
              ✓ Votre message a bien été envoyé. Merci pour votre message !
            </div>
          )}

          {/* Message d'erreur */}
          {status === "error" && (
            <div className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-300">
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="px-10 py-5 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </section>

      {/* Scroll top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-10 right-10 w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:border-cyan-400 transition"
      >
        <ChevronUp />
      </button>
    </main>
  );
}