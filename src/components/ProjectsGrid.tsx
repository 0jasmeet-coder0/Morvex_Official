import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsGrid() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
    <section ref={sectionRef} className="relative min-h-screen bg-black py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-600 tracking-[0.3em] text-xs font-light uppercase">Featured Experience</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6 mb-8 leading-tight">VEIL</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            The ultimate narrative experience. Where reality dissolves and consciousness becomes the canvas.
          </p>
        </div>

        <Link
          to="/games/veil"
          className="block group transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[16/9] bg-gray-900 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 transition-transform duration-1000"
              style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[20rem] md:text-[28rem] font-black text-white/8 select-none tracking-tighter leading-none">
                    VEIL
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end pb-16 transition-all duration-700 ${
                isHovered ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className="text-center px-6 mb-6">
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">VEIL</h3>
                <p className="text-2xl tracking-widest text-gray-300 mb-6 font-light">A fractured world. A fragmented mind.</p>
                <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                  Built for players who prefer tension over spectacle — stories that reveal themselves instead of explaining everything.
                </p>
                <div className="flex justify-center gap-16 text-sm">
                  <div>
                    <div className="tracking-[0.3em] text-gray-500 mb-3 uppercase text-xs font-light">Platform</div>
                    <div className="font-light text-lg">PC</div>
                  </div>
                  <div>
                    <div className="tracking-[0.3em] text-gray-500 mb-3 uppercase text-xs font-light">Status</div>
                    <div className="font-light text-lg">Coming Soon</div>
                  </div>
                  <div>
                    <div className="tracking-[0.3em] text-gray-500 mb-3 uppercase text-xs font-light">Experience</div>
                    <div className="font-light text-lg">8-12 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8 text-xs tracking-[0.3em] text-white/40 group-hover:text-white/70 transition-colors duration-300 uppercase font-light">
              Featured Title
            </div>
          </div>
        </Link>

        <div className={`mt-20 text-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-500 font-light text-lg">
            Experience the pinnacle of narrative gaming with MOVEX's acclaimed psychological thriller.
          </p>
        </div>
      </div>
    </section>
  );
}
