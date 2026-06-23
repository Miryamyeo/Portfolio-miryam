"use client";

const categories = [
  {
    id: "T.01",
    title: "Frontend",
    stars: "8 STARS",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Responsive Design",
    ],
  },
  {
    id: "T.02",
    title: "Backend",
    stars: "5 STARS",
    skills: [
      "Laravel",
      "NestJS",
      "PHP",
      "Node.js",
      "REST API",
      "MySQL",
    ],
  },
  {
    id: "T.03",
    title: "Mobile",
    stars: "7 STARS",
    skills: [
      "React Native",
      "Expo",
      "NativeWind",
      "Expo Router",
      "Android",
    ],
  },
  {
    id: "T.04",
    title: "Outils",
    stars: "9 STARS",
    skills: [
      "Git",
      "VS Code",
      "Figma",
      "Power BI",
      "Excel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className=" bg-black text-white overflow-hidden relative py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-sm text-teal-500 font-semibold">
          Compétences
        </p>
                    {/* Glow */}
      <div className="absolute top-56 left-[35%] w-5 h-5 rounded-full bg-cyan-400 blur-sm shadow-[0_0_30px_#00e5ff]" />

        <h2 className="text-6xl font-black mt-5 mb-16 text-white">
          Ce que je maîtrise
        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-7">

          {categories.map((cat) => (
            <div
              key={cat.title}
              className="
              rounded-[28px]
              border
              border-cyan-400
              bg-black
              p-8
              transition-all
              duration-300
              hover:border-teal-500
              hover:-translate-y-1
              "
            >
              <div className="flex justify-between items-center mb-10">

                <span className="text-xs tracking-[0.3em] text-teal-500 font-semibold">
                  {cat.id}
                </span>

                <span className="text-xs tracking-[0.25em] text-neutral-500">
                  {cat.stars}
                </span>

              </div>

              <h3 className="text-4xl font-bold text-gray-500 mb-8">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {cat.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-[#DDD8D2]
                    text-sm
                    tracking-[0.12em]
                    uppercase
                    text-neutral-700
                    transition
                    hover:bg-teal-500
                    hover:text-white
                    hover:border-teal-500
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}