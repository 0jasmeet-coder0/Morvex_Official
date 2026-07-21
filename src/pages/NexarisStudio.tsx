import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NexarisStudio() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'MOVEX || Nexaris Studio';
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Hero section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source
            src="https://videos.pexels.com/video-files/3571263/3571263-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

        <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg tracking-widest text-gray-400 mb-6 uppercase font-light">
            Independent Studio
          </p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
            NEXARIS
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-12">
            Crafting Immersive Narrative Experiences
          </p>
          <Link
            to="/studios"
            className="inline-block px-8 py-3 text-sm font-medium tracking-widest border border-white/50 hover:bg-white hover:text-black transition-all duration-500"
          >
            BACK TO STUDIOS
          </Link>
        </div>
      </section>

      {/* About section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12">
            Our Vision
          </h2>

          <div className="space-y-8 text-lg font-light leading-relaxed text-gray-300">
            <p>
              Nexaris Studio specializes in cinematic storytelling and psychological gameplay design. We believe that interactive experiences should challenge players emotionally and intellectually, creating moments that linger long after the credits roll.
            </p>

            <p>
              Every project from Nexaris is crafted with meticulous attention to narrative structure, character development, and environmental storytelling. We push the boundaries of what games can be as a medium for human expression.
            </p>

            <p>
              Our team consists of passionate developers, artists, and designers united by a singular purpose: to create worlds that feel genuine, stories that resonate, and experiences that inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="relative bg-white/5 py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm tracking-widest text-gray-600 mb-6 uppercase font-light">
            Featured Project
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-black tracking-tighter mb-6">
                VEIL
              </h3>
              <p className="text-lg font-light text-gray-400 mb-8 leading-relaxed">
                A narrative-driven experience that blurs the line between reality and perception. VEIL challenges players to question their understanding of truth through an intricate web of psychological puzzles and emotional storytelling.
              </p>
              <Link
                to="/games/veil"
                className="inline-block px-8 py-3 text-sm font-medium tracking-widest border border-white/50 hover:bg-white hover:text-black transition-all duration-500"
              >
                DISCOVER VEIL
              </Link>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1563254/pexels-photo-1563254.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="VEIL"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team philosophy */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12">
            Team Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Authenticity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Every detail serves the narrative. We never compromise creative vision for commercial appeal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Innovation</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We experiment with new technologies and storytelling techniques to push the medium forward.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Excellence</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Obsessive attention to craft, from code to cinematics. Quality is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
