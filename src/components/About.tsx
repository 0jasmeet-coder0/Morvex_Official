import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white text-black py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-0">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="text-gray-600 tracking-[0.3em] text-xs font-light uppercase">Who We Are</span>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter mt-6 mb-12 leading-tight">
              REDEFINING<br />INTERACTIVE<br />STORYTELLING
            </h2>
            <div className="space-y-8 text-lg font-light leading-relaxed text-gray-700">
              <p>
                We are a collective of visionaries, obsessed with pushing the boundaries of what games can be.
                Every project we undertake is a journey into uncharted territory.
              </p>
              <p>
                Our studio thrives on precision and innovation.
                We don't follow trends—we create them.
              </p>
              <p>
                Founded on the belief that games are the ultimate form of storytelling,
                we craft experiences that resonate long after the screen goes dark.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[12rem] font-black text-white/8 select-none">
                  M
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
