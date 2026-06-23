"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    name: "TrellApp",
    image: "/projects/trellapp.png",
    type: "Application Mobile",
    year: "2024",
    desc: "Application de gestion de tâches utilisant l'API Trello.",
    tags: ["React Native", "Expo", "TypeScript"],
    demoUrl: "https://trellapp.vercel.app",
    githubUrl: "https://github.com/username/trellapp",
  },
  {
    name: "Portfolio",
    image: "/projects/portfolio.png",
    type: "Site Web",
    year: "2025",
    desc: "Portfolio moderne développé avec Next.js.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    demoUrl: "https://portfolio.vercel.app",
  },
  {
    name: "YOWL",
    image: "YOWL.jpeg",
    type: "Application Web",
    year: "2025",
    desc: "Tableau de bord analytique avec graphiques et statistiques.",
    tags: ["React", "Chart.js", "API"],
    demoUrl: "https://dashboard.vercel.app",
  },
  {
    name: "DOMINA",
    image: "/image.png",
    type: "Site de parainage",
    year: "2025",
    desc: "Plateforme moderne de vente de vêtements avec une expérience utilisateur fluide.",
    tags: ["Html","javascript", "Tailwind CSS"],
    demoUrl: "https://hhhhhhh-h09.github.io/DOMINA-1/",
  },
];

export default function ProjectsCarousel() {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Mes <span className="text-cyan-400">Projets</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group h-full rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2">
                
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 text-sm font-medium">
                      {project.type}
                    </span>

                    <span className="text-white/60 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {project.name}
                  </h3>

                  <p className="text-gray-300 mb-5">
                    {project.desc}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Boutons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
                    >
                      Voir le projet
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}