import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const studios = [
  {
    id: 1,
    title: 'NEXARIS STUDIO',
    description: 'Focused on cinematic storytelling and immersive worlds.',
    image: '/nexaris.jpg',
  },
  {
    id: 2,
    title: 'ROBLOX STUDIO',
    description: 'Creating innovative multiplayer experiences for the next generation.',
    image: '/robloxstudio.jpg',
  },
];

export default function StudiosSection() {
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
    <section
      ref={sectionRef}
      className="relative bg-white py-32 px-4 md:px-8 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >

          <Link
            to="/studios"
            className="inline-flex items-center gap-8 group"
          >

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black">
              STUDIOS
            </h2>

            <ArrowRight className="w-8 h-8 text-black/50 group-hover:text-black transition-all duration-300 transform group-hover:translate-x-2" />

          </Link>

          <p className="text-gray-500 mt-6 max-w-xl text-lg font-light leading-relaxed">
            Independent creative teams building the future of interactive entertainment.
          </p>

        </div>

        {/* STUDIO GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {studios.map((studio) => (
            <div
              key={studio.id}
              className="border border-black/10 bg-white group cursor-pointer transition-all duration-500 hover:bg-black"
            >

              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">

                <img
                  src={studio.image}
                  alt={studio.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500"></div>

              </div>

              {/* CONTENT */}
              <div className="p-6 transition-all duration-500">

                <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-white transition-all duration-500 mb-3">
                  {studio.title}
                </h3>

                <p className="text-gray-600 group-hover:text-gray-300 transition-all duration-500 leading-relaxed text-sm">
                  {studio.description}
                </p>

                {/* ARROW */}
                <div className="flex items-center gap-3 mt-8">

                  <div className="w-10 h-[1px] bg-black group-hover:bg-white transition-all duration-500"></div>

                  <ArrowRight className="w-4 h-4 text-black group-hover:text-white transition-all duration-500 group-hover:translate-x-1" />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}