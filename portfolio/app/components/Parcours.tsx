"use client";

import { GraduationCap, Code2, BarChart3, Rocket } from "lucide-react";

const parcours = [
  {
    icon: GraduationCap,
    year: "2024 - Aujourd'hui",
    title: "Licence en Développement d'Applications et E-Services",
    place: "Université Virtuelle de Côte d'Ivoire (UVCI)",
    description:
      "Formation axée sur le développement web, les bases de données, la modélisation MERISE, le génie logiciel et la gestion de projets.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    year: "2026 - Aujourd'hui",
    title: "Formation Développeuse Full Stack",
    place: "WeCode",
    description:
      "Apprentissage de PHP, Laravel, SQL, Git et GitHub à travers des projets collaboratifs et des mises en situation professionnelles.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    year: "2026",
    title: "Formation Data Analysis",
    place: "Power BI • Excel",
    description:
      "Création de tableaux de bord interactifs, nettoyage, traitement et visualisation de données pour la prise de décision.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    year: "Aujourd'hui",
    title: "À la recherche d'un stage",
    place: "Développeuse Full Stack",
    description:
      "Je souhaite intégrer une équipe dynamique afin de mettre en pratique mes compétences et contribuer à des projets innovants.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Parcours() {
  return (
    <section
      id="parcours"
      className="relative py-24 px-6 bg-black text-white overflow-hidden"
    >
      {/* Fond décoratif */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titre */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Mon évolution
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Mon{" "}
            <span className="text-cyan-400">
              Parcours
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            Chaque étape de mon parcours m'a permis d'acquérir de nouvelles
            compétences et de renforcer ma passion pour le développement
            d'applications modernes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-cyan-500/30" />

          <div className="space-y-16">
            {parcours.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Point */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl`}
                    >
                      <Icon size={26} />
                    </div>
                  </div>

                  {/* Carte */}
                  <div
                    className={`ml-24 md:ml-0 w-full md:w-[45%] ${
                      left ? "md:mr-auto md:pr-14" : "md:ml-auto md:pl-14"
                    }`}
                  >
                    <div className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]">
                      <span className="text-cyan-400 font-semibold text-sm">
                        {item.year}
                      </span>

                      <h3 className="text-2xl font-bold mt-2">
                        {item.title}
                      </h3>

                      <p className="text-cyan-300 mt-1">
                        {item.place}
                      </p>

                      <p className="text-gray-300 mt-5 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}