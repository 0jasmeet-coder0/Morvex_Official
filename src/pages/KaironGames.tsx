import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function KaironGames() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'MOVEX || Kairon Games';
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Nexus Realms',
      subtitle: 'Multiplayer Exploration Experience',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Dimensional Canvas',
      subtitle: 'Creative Building Platform',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Synth Collective',
      subtitle: 'Social Experience Design',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

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
            KAIRON
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-12">
            Innovative Interactive Worlds
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
              Kairon Games develops innovative multiplayer experiences and experimental interactive systems. We focus on creating spaces where players can collaborate, create, and explore together in real-time.
            </p>

            <p>
              Our approach combines cutting-edge technology with community-driven design. Every experience is built with scalability and creativity in mind, empowering players to become creators themselves.
            </p>

            <p>
              We believe the future of gaming lies in connected experiences where imagination knows no bounds. Kairon is dedicated to building the infrastructure and inspiration for the next generation of interactive entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative bg-white/5 py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
                    hoveredCard === project.id ? 'bg-black/40' : 'bg-black/0'
                  }`}></div>
                </div>

                <h3 className={`text-2xl font-black tracking-tight mb-2 transition-colors duration-300 ${
                  hoveredCard === project.id ? 'text-gray-300' : 'text-white'
                }`}>
                  {project.title}
                </h3>

                <p className="text-gray-500 font-light mb-4">{project.subtitle}</p>

                <div className={`flex items-center gap-2 transition-all duration-300 ${
                  hoveredCard === project.id ? 'translate-x-2 text-white' : 'text-gray-600'
                }`}>
                  <span className="text-sm font-medium tracking-widest uppercase">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12">
            Technology & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Real-Time Systems</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Distributed architecture built for millions of simultaneous players. Our infrastructure prioritizes stability, latency, and creative freedom.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Creator Tools</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Intuitive design systems that empower creators without requiring programming expertise. Building should be fun and accessible.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Community First</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Every system is designed with community feedback in mind. Player experiences shape our roadmap and technical direction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Innovation Lab</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Constant experimentation with emerging technologies. AI integration, procedural generation, and dynamic world systems are ongoing focus areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
