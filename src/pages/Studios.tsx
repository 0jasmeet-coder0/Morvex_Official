import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface StudioCard {
  id: number;
  name: string;
  description: string;
  logo: string;
}

const studios: StudioCard[] = [
  {
    id: 1,
    name: 'NEXARIS STUDIO',
    description: 'Specializing in immersive narrative experiences and psychological gameplay design.',
    logo: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'KAIRON GAMES',
    description: 'Creating innovative interactive worlds that push the boundaries of game design.',
    logo: 'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function Studios() {

  useEffect(() => {
  document.title = 'MOVEX || Studios';
}, []);
  
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Keep intersection observer for potential future use
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className={`max-w-4xl text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
            STUDIOS
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed">
            Independent teams united under one vision. Each studio brings unique expertise and creative perspective to the MOVEX ecosystem.
          </p>
        </div>
      </section>

      {/* Grid section */}
      <section ref={gridRef} className="relative bg-black text-white py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {studios.map((studio) => (
              <div
                key={studio.id}
                className="group relative transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredCard(studio.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card background */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredCard === studio.id
                    ? 'bg-white'
                    : 'bg-white/5'
                }`}></div>

                {/* Content wrapper */}
                <div className="relative p-12 transition-all duration-500">
                  {/* Logo/Image */}
                  <div className="relative aspect-[16/10] mb-12 overflow-hidden">
                    <img
                      src={studio.logo}
                      alt={studio.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      hoveredCard === studio.id
                        ? 'bg-black/40'
                        : 'bg-black/0'
                    }`}></div>
                  </div>

                  {/* Text content */}
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <h3 className={`text-4xl font-black tracking-tight mb-4 transition-colors duration-500 ${
                        hoveredCard === studio.id
                          ? 'text-black'
                          : 'text-white'
                      }`}>
                        {studio.name}
                      </h3>
                      <p className={`text-lg font-light leading-relaxed transition-colors duration-500 ${
                        hoveredCard === studio.id
                          ? 'text-gray-800'
                          : 'text-gray-400'
                      }`}>
                        {studio.description}
                      </p>
                    </div>

                    {/* Custom arrow */}
                    <div className={`flex-shrink-0 pt-1 transition-all duration-500 ${
                      hoveredCard === studio.id
                        ? 'translate-x-3 text-black'
                        : 'text-white/50 group-hover:text-white/80'
                    }`}>
                      <div className="relative w-8 h-10 flex items-center justify-center">
                        {/* Minimalist arrow design */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="w-full h-full"
                        >
                          <line x1="6" y1="12" x2="20" y2="12" />
                          <polyline points="14 6 20 12 14 18" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                    hoveredCard === studio.id
                      ? 'bg-black'
                      : 'bg-white/0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="relative bg-white py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
            JOIN OUR CREATIVE COLLECTIVE
          </h2>
          <p className="text-xl font-light text-gray-700 mb-12 leading-relaxed">
            Are you a visionary developer, designer, or artist? Explore opportunities to join our studios and help shape the future of interactive entertainment.
          </p>
          <button className="group relative px-12 py-4 text-lg font-medium tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">CAREERS</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </section>
    </main>
  );
}
