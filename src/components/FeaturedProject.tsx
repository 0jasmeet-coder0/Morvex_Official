import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedProject() {
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
        <div className={`mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-500 tracking-[0.3em] text-sm font-light uppercase">Featured Project</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6 leading-tight">THE VEIL</h2>
        </div>

        <Link
          to="/games/veil"
          className="relative aspect-[21/9] bg-gray-900 overflow-hidden cursor-pointer group block transition-all duration-500"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 transition-transform duration-700"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl md:text-[12rem] font-black text-white/10 tracking-tighter">
                  VEIL
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex items-center justify-center transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center">
              <h3 className="text-6xl font-black tracking-tighter mb-4">VEIL</h3>
              <p className="text-xl text-gray-400 tracking-wider mb-4">PSYCHOLOGICAL THRILLER</p>
              <p className="text-lg text-gray-400 font-light max-w-2xl px-6 leading-relaxed">
                Dive into the depths of human consciousness. A narrative experience that challenges reality itself.
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8 text-sm tracking-[0.3em] text-white/50 group-hover:text-white/70 transition-colors duration-300">
            FEATURED
          </div>
        </Link>

        <div className={`mt-16 grid md:grid-cols-3 gap-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="group">
            <h4 className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-3 font-light">Genre</h4>
            <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">Psychological Thriller</p>
          </div>
          <div className="group">
            <h4 className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-3 font-light">Platform</h4>
            <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">PC</p>
          </div>
          <div className="group">
            <h4 className="text-xs tracking-[0.3em] text-gray-600 uppercase mb-3 font-light">Status</h4>
            <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
