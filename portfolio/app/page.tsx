"use client";

import { useState } from "react";
import IntroLoader from "./components/IntroLoader";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Parcours from "./components/Parcours";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <IntroLoader onFinish={() => setLoading(false)} />
      ) : (
        <main className="bg-[#09090f] text-white">
          <Navbar/>
          <Hero />
          <Skills />
          <Parcours />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}