"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-56 left-[35%] w-5 h-5 rounded-full bg-cyan-400 blur-sm shadow-[0_0_30px_#00e5ff]" />

      {/* Hero */}
      <section className="pt-40 text-center">

        <h1 className="text-8xl md:text-9xl font-bold mt-4">
          CONTACT
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <div className="px-8 py-4 rounded-full border border-zinc-800">
            0584625515
          </div>

          <div className="px-8 py-4 rounded-full border border-zinc-800">
            yeomiryam6@gmail.com
          </div>
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
            Si vous avez un projet ou un besoin en développement web (front-end ou back-end) ou en web design,
            n'hésitez pas à me contacter. Ce sera un plaisir d'échanger avec vous et de contribuer à la réussite de votre projet.

          </p>

          <p className="text-zinc-300 text-lg leading-9 mt-8">
            Nous échangerons par mail dans un premier temps
            puis sur WhatsApp afin de faciliter l'échange.
          </p>

          <div className="mt-14 text-zinc-500 italic leading-8">
            Traitement des données personnelles.
            <br />
            Conformément aux dispositions des articles
            relatifs à l'informatique et aux libertés.
          </div>
        </div>

        {/* Formulaire */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Prénom *"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="text"
            placeholder="Nom *"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="text"
            placeholder="Nom de l'entreprise / du projet"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Email *"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <select className="w-full bg-black border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition">
            <option>Choisissez votre prestation *</option>
            <option>Développement Web</option>
            <option>UI / UX Design</option>
            <option>Application Mobile</option>
          </select>

          <textarea
            rows={6}
            placeholder="Faites parler votre imagination ! *"
            className="w-full bg-transparent border border-zinc-800 rounded-xl p-5 outline-none focus:border-cyan-400 transition"
          />

          <button className="px-10 py-5 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            Envoyer
          </button>
        </form>
      </section>

      {/* Scroll top */}
      <button className="fixed bottom-10 right-10 w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center hover:border-cyan-400 transition">
        <ChevronUp />
      </button>
    </main>
  );
}