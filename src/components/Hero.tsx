import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // SCROLL PROGRESS
  const progress = Math.min(scrollY / 500, 1);

  // IMAGE EFFECTS
  const imageScale = 1 + progress * 0.12;
  const brightness = 0.3 + progress * 0.7;

  // TEXT FILL
  const fillHeight = 100 - progress * 100;

  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 will-change-transform transition-transform duration-300"
        style={{
          transform: `scale(${imageScale})`,
          filter: `brightness(${brightness})`
        }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* CONTENT */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >

        {/* TEXT CONTAINER */}
        <div className="relative inline-block">

          {/* OUTLINE TEXT */}
          <h1
            className="text-[20vw] md:text-[12vw] font-black uppercase leading-none tracking-tight text-transparent select-none"
            style={{
              WebkitTextStroke: '2px white'
            }}
          >
            MORVEX
          </h1>

          {/* FILL TEXT */}
          <h1
            className="absolute inset-0 text-[20vw] md:text-[12vw] font-black uppercase leading-none tracking-tight text-white overflow-hidden select-none"
            style={{
              clipPath: `inset(${fillHeight}% 0 0 0)`
            }}
          >
            MORVEX
          </h1>

        </div>

        {/* SUBTEXT */}
        <p className="mt-8 text-xs md:text-lg uppercase tracking-[0.5em] text-white/70">
          WE BUILD WORLDS
        </p>

      </div>

      {/* CENTERED SCROLL ARROW */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">

        <ChevronDown className="w-8 h-8 text-white/60" />

      </div>

    </section>
  );
}
