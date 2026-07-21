import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play } from 'lucide-react';

export default function VeilGame() {

  useEffect(() => {
  document.title = 'MOVEX || VEIL';
}, []);
  
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-black/40 to-black"></div>

        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/5"
                style={{
                  width: Math.random() * 2 + 'px',
                  height: Math.random() * 80 + 40 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 8 + 8}s linear infinite`,
                  animationDelay: `-${Math.random() * 8}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-600 tracking-[0.3em] text-xs font-light mb-8 block uppercase">Psychological Thriller</span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            VEIL
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            A fractured world. A fragmented mind. The line between reality dissolves.
          </p>
          <button
            onClick={() => {
              document.getElementById("trailer")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-12 py-4 text-lg font-medium tracking-wider border-2 border-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 justify-center">
              <Play className="w-4 h-4" />
              WATCH TRAILER
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>

        <div className="absolute bottom-3 left-55 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white/50 hover:text-white transition-colors" />
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }
        `}</style>
      </section>

      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="group">
              <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-4 font-light uppercase">Genre</h3>
              <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">Psychological Thriller</p>
            </div>
            <div className="group">
              <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-4 font-light uppercase">Platform</h3>
              <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">PC, Console, Mobile</p>
            </div>
            <div className="group">
              <h3 className="text-xs tracking-[0.3em] text-gray-600 mb-4 font-light uppercase">Status</h3>
              <p className="text-2xl font-light group-hover:text-white transition-colors duration-300">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">ABOUT VEIL</h2>
          <div className="space-y-8 text-lg font-light leading-relaxed">
            <p>
              VEIL is a narrative-driven psychological thriller that exists at the intersection of consciousness and reality.
              Step into a fragmented world where every choice echoes across dimensions, and truth becomes increasingly elusive.
            </p>
            <p>
              Built for players who prefer tension over spectacle—and stories that reveal themselves instead of explaining everything.
              VEIL respects your intelligence. It challenges your perception. It lingers long after you finish.
            </p>
            <p>
              This is not a game about saving the world. It's a game about understanding yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">FEATURES</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="group border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="text-2xl font-black tracking-tight mb-4">Immersive Narrative</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                A story that unfolds through gameplay, environment, and choice. No cutscenes. Pure immersion.
              </p>
            </div>
            <div className="group border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="text-2xl font-black tracking-tight mb-4">Choice Matters</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Your decisions shape reality itself. Multiple endings based on the path you carve.
              </p>
            </div>
            <div className="group border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="text-2xl font-black tracking-tight mb-4">Cinematic Atmosphere</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Stunning visuals, haunting sound design, and a world that feels alive and breathing.
              </p>
            </div>
            <div className="group border-l-2 border-white/20 pl-8 hover:border-white/40 transition-colors duration-300">
              <h3 className="text-2xl font-black tracking-tight mb-4">Psychological Depth</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Themes of identity, reality, and consciousness explored through interactive storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">EXPERIENCE VEIL</h2>
          <p className="text-xl font-light text-gray-700 mb-12">
            8-12 hours of cinematic, choice-driven gameplay that will stay with you long after the screen goes dark.
          </p>
          <button className="group relative px-12 py-4 text-lg font-medium tracking-wider border-2 border-black hover:bg-black hover:text-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">GET VEIL NOW</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            id="trailer"
            className="relative aspect-video bg-gray-900 overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 transition-transform duration-700" style={{ transform: isVideoHovered ? 'scale(1.05)' : 'scale(1)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-20 h-20 border-2 border-white rounded-full flex items-center justify-center transition-all duration-300 ${
                    isVideoHovered ? 'scale-110 bg-white/10' : 'bg-transparent'
                  }`}
                >
                  <Play className={`w-8 h-8 ${isVideoHovered ? 'text-white' : 'text-gray-500'}`} />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 font-light mt-8">
            VEIL - Official Trailer
          </p>
        </div>
      </section>
    </main>
  );
}
