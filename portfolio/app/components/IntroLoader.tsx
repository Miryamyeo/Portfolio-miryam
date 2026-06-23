"use client";

import { useEffect, useState } from "react";

interface IntroLoaderProps {
  onFinish: () => void;
}

export default function IntroLoader({
  onFinish,
}: IntroLoaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 700);

          return 100;
        }

        return prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-black via-[#041a1f] to-black text-white">
      {/* Lumières Turquoise */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[140px] animate-pulse" />

      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/20 blur-[140px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Cercle décoratif */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[450px] h-[450px] rounded-full border border-cyan-500/10 animate-spin [animation-duration:20s]" />

        <div className="absolute w-[350px] h-[350px] rounded-full border border-cyan-400/10 animate-spin [animation-duration:15s] [animation-direction:reverse]" />
      </div>

      {/* Contenu */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <p className="uppercase tracking-[10px] text-gray-400 mb-4">
          Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
          MIRYAM
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Découverte du portfolio...
        </p>
      </div>

      {/* Barre de chargement */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[320px]">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Chargement</span>
          <span>{count}%</span>
        </div>

        <div className="h-[4px] bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-100"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>

      {/* Particules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <div className="absolute top-[30%] right-[20%] w-2 h-2 rounded-full bg-teal-300 animate-ping delay-300" />
        <div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping delay-700" />
        <div className="absolute bottom-[35%] right-[30%] w-2 h-2 rounded-full bg-cyan-500 animate-ping delay-1000" />
      </div>
    </div>
  );
}