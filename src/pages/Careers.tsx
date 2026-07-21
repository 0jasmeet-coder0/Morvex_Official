import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  studio: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Gameplay Programmer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    studio: 'Nexaris Studio',
  },
  {
    id: 2,
    title: 'Environment Artist',
    department: 'Art',
    location: 'Remote / Los Angeles',
    studio: 'Nexaris Studio',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    studio: 'Kairon Games',
  },
  {
    id: 4,
    title: 'Cinematic Animator',
    department: 'Animation',
    location: 'Remote / Los Angeles',
    studio: 'Nexaris Studio',
  },
  {
    id: 5,
    title: 'Systems Programmer',
    department: 'Engineering',
    location: 'Remote',
    studio: 'Kairon Games',
  },
  {
    id: 6,
    title: 'Narrative Designer',
    department: 'Design',
    location: 'Remote / San Francisco',
    studio: 'Nexaris Studio',
  },
];

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'MOVEX || Careers';
    setIsVisible(true);
  }, []);

  const departments = ['Engineering', 'Art', 'Design', 'Animation'];
  const filteredJobs = selectedDepartment
    ? jobs.filter((job) => job.department === selectedDepartment)
    : jobs;

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
          style={{ filter: 'brightness(0.35)' }}
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
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
            JOIN MOVEX
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-12">
            Help us build the future of interactive entertainment
          </p>
          <p className="text-lg text-gray-400 font-light mb-2">
            Currently hiring visionary creators across all disciplines
          </p>
        </div>
      </section>

      {/* Opportunities section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            Open Positions
          </h2>

          {/* Department filters */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setSelectedDepartment(null)}
              className={`px-6 py-3 text-sm font-medium tracking-widest transition-all duration-300 border ${
                selectedDepartment === null
                  ? 'border-white bg-white text-black'
                  : 'border-white/30 hover:border-white text-white hover:bg-white/5'
              }`}
            >
              ALL
            </button>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 text-sm font-medium tracking-widest transition-all duration-300 border ${
                  selectedDepartment === dept
                    ? 'border-white bg-white text-black'
                    : 'border-white/30 hover:border-white text-white hover:bg-white/5'
                }`}
              >
                {dept.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Jobs list */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group"
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                <div className={`relative px-8 py-6 rounded-lg border transition-all duration-500 cursor-pointer ${
                  hoveredJob === job.id
                    ? 'border-white bg-white/10 backdrop-blur-lg'
                    : 'border-white/10 bg-white/5 hover:bg-white/8'
                }`}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-black tracking-tight mb-3 transition-colors duration-300 ${
                        hoveredJob === job.id ? 'text-white' : 'text-gray-200'
                      }`}>
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 font-light mb-1">DEPARTMENT</p>
                          <p className="text-white font-medium">{job.department}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-light mb-1">LOCATION</p>
                          <p className="text-white font-medium">{job.location}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-light mb-1">STUDIO</p>
                          <p className="text-white font-medium">{job.studio}</p>
                        </div>
                      </div>
                    </div>

                    <div className={`flex-shrink-0 transition-all duration-500 pt-2 ${
                      hoveredJob === job.id
                        ? 'translate-x-3 text-white'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Animated bottom border */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
                    hoveredJob === job.id ? 'right-0' : 'right-auto w-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg font-light">
                No positions available in this department. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why join section */}
      <section className="relative bg-white/5 py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16">
            Why Join MOVEX
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Creative Freedom</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                No corporate bloat. Pure creative vision drives every decision. Your ideas matter and directly impact millions of players.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">World-Class Talent</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Work alongside industry veterans and rising stars. Collaborate with people who are passionate about pushing the medium forward.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Meaningful Work</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Every project is a masterpiece. We create experiences that challenge and inspire players around the world.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Competitive Benefits</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Comprehensive health coverage, flexible work arrangements, and professional development opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Remote-First Culture</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Work from anywhere. Our distributed teams collaborate seamlessly across time zones.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-4">Industry Impact</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Help define the future of gaming. Your work will influence how interactive entertainment evolves globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
            Don't See Your Role?
          </h2>
          <p className="text-xl font-light text-gray-300 mb-12">
            We're always looking for talented individuals. Send us your portfolio and let's talk about creating something extraordinary together.
          </p>
          <button className="group relative px-12 py-4 text-lg font-medium tracking-wider border-2 border-white hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
            <span className="relative z-10">SEND YOUR PORTFOLIO</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </section>
    </main>
  );
}
