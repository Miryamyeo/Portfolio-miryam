import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <Skills />
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <Projects />
        <div style={{ borderTop: "1px solid var(--border)" }} />
        <Contact />
      </main>
    </>
  );
}
