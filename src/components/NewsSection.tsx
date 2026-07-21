import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'VEIL Development Update',
    date: 'May 8, 2026',
    image:
      'https://images.pexels.com/photos/1563254/pexels-photo-1563254.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'New Studio Expansion',
    date: 'May 1, 2026',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Team Spotlight Series',
    date: 'April 24, 2026',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: 'MOVEX Universe Expansion',
    date: 'April 12, 2026',
    image:
      'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentIndex < newsItems.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

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
      className="relative bg-black py-32 px-6 md:px-12 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE + ARROWS */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-between">

            <Link
              to="/news"
              className="inline-flex items-center gap-8 group"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-[0.05em] text-white group-hover:text-gray-200 transition-colors duration-300">
                NEWS
              </h2>

              <ArrowRight className="w-8 h-8 text-white/50 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2" />
            </Link>

            {/* ARROWS */}
            <div className="flex gap-6">

              {/* LEFT */}
              <button
                onClick={prevSlide}
                className="group flex items-center"
              >
                <div className="w-4 h-4 border-l border-b border-white/30 rotate-45 ml-1 group-hover:border-white transition-all duration-400 transform group-hover:translate-x-2"></div>

                <div className="w-12 h-[1px] bg-white/30 group-hover:bg-white transition-all duration-400 transform group-hover:translate-x-2"></div>
              </button>

              {/* RIGHT */}
              <button
                onClick={nextSlide}
                className="group flex items-center"
              >
                <div className="w-12 h-[1px] bg-white/30 group-hover:bg-white transition-all duration-400 transform group-hover:translate-x-2"></div>

                <div className="w-4 h-4 border-r border-t border-white/30 rotate-45 -mr-2 group-hover:border-white transition-all duration-400 transform group-hover:translate-x-2"></div>
              </button>

            </div>

          </div>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex gap-4 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 340}px)`,
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[320px] flex-shrink-0"
              >
                <div className="group cursor-pointer">

                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-900">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500"></div>

                  </div>

                  {/* CONTENT */}
                  <div>

                    <p className="text-xs tracking-[0.3em] text-gray-600 mb-3 uppercase font-light">
                      {item.date}
                    </p>

                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-gray-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 mt-6"></div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}