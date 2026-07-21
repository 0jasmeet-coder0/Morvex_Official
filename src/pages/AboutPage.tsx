import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {

  useEffect(() => {
  document.title = 'MOVEX || About';
}, []);
  
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
    <main className="bg-black text-white">
      <div className="pt-40 pb-20 px-6 md:px-12 min-h-screen bg-white text-black flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gray-400 tracking-[0.3em] text-sm font-light">OUR STORY</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 mb-8 leading-tight">
                FOUNDED ON<br />VISION
              </h1>
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
                <p>
                  Morvex exists to build games that don’t explain everything — they reveal themselves.
                  MORVEX was born from a collective vision to revolutionize interactive entertainment.
                  We believe games are the most powerful medium for storytelling and human connection.
                </p>
                <p>
                  We've dedicated ourselves to crafting experiences that push boundaries,
                  challenge conventions, and inspire wonder.

                  Morvex Studios is an independent game studio focused on crafting premium, story-first                         gaming experiences. We are driven by one idea: a game should respect the player’s                             intelligence.
                </p>
              </div>
            </div>
            <div className="aspect-[3/4] bg-black relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-[15rem] font-black text-white/5 select-none">S</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="min-h-screen bg-black py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-gray-500 tracking-[0.3em] text-sm font-light">CORE VALUES</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4">WHAT DRIVES US</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'OBSESSIVE QUALITY',
                description: 'Every pixel, every frame, every interaction demands excellence. We never compromise on craft.',
              },
              {
                title: 'INNOVATION FIRST',
                description: 'We don\'t follow trends. We create them. Risk-taking is embedded in our DNA.',
              },
              {
                title: 'HUMAN CENTERED',
                description: 'Games are for people. We design with empathy, understanding, and respect for our players.',
              },
              {
                title: 'WE EARN TRUST',
                description: 'No bait. No false scarcity. We communicate when there’s substance, not pressure.',
              },
              {
                title: 'COLLABORATIVE GENIUS',
                description: 'The best work happens when brilliant minds unite. Collaboration is our secret weapon.',
              },
              {
                title: 'FUTURE THINKING',
                description: 'We\'re not building for today. We\'re creating the experiences of tomorrow.',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 delay-${idx * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <h3 className="text-2xl font-black tracking-tight mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white text-black py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-gray-400 tracking-[0.3em] text-sm font-light">LEADERSHIP</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-4">THE VISIONARIES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'JASMEET MANJ', role: 'Founder & Creative Director', bio: 'Architect of worlds, seeker of beauty.' },
              { name: 'JORDAN CHEN', role: 'Head of Engineering', bio: 'Turning imagination into reality through code.' },
              { name: 'MAYA SVETLOVA', role: 'Art Direction Lead', bio: 'Visual storyteller, aesthetic perfectionist.' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="aspect-square bg-black mb-6 flex items-center justify-center">
                  <div className="text-8xl font-black text-white/10">{member.name[0]}</div>
                </div>
                <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                <p className="text-gray-500 tracking-wider text-sm mb-4">{member.role}</p>
                <p className="text-gray-700 font-light">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
