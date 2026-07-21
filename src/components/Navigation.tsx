import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const [gamesOpen, setGamesOpen] = useState(false);
  const [studiosOpen, setStudiosOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[99999] bg-black border-b border-white/10 backdrop-blur-xl overflow-visible">

      <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-visible">

        <div className="flex justify-between items-center py-6">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter hover:text-gray-400 transition-colors"
          >
            MORVEX
          </Link>
        

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">

            {/* GAMES */}
            <div className="relative group">

              <Link
                to="/games"
                className="group relative text-sm tracking-widest font-light flex items-center gap-2"
              >
                GAMES
                <ChevronDown className="w-4 h-4" />

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

             <div className=" bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] rounded-2xl relative overflow-hidden min-w-[220px] p-6 space-y-4">
               
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>
                  <Link
                    to="/games/veil"
                   className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      VEIL
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-2"></span>
                  </Link>

                  <div className="group/item cursor-default">
                    <p className="text-sm tracking-widest text-white/40">
                      FUTURE PROJECTS
                    </p>

                    <span className="block h-[1px] w-0 bg-white/40 transition-all duration-300 group-hover/item:w-full mt-2"></span>
                  </div>

                </div>
              </div>
            </div>

            {/* STUDIOS */}
            <div className="relative group">

              <Link
                to="/studios"
                className="group relative text-sm tracking-widest font-light flex items-center gap-2"
              >
                STUDIOS
                <ChevronDown className="w-4 h-4" />

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

               <div className=" bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] rounded-2xl relative overflow-hidden min-w-[260px] p-6 space-y-4">
               
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>

                  <Link
                    to="/studios/nexaris"
                   className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      NEXARIS STUDIO
                    </p>

                    <p className="text-xs text-white/40 mt-2">
                      Cinematic storytelling division
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-3"></span>
                  </Link>

                  <Link
                    to="/studios/kairon"
                    className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      KAIRON GAMES
                    </p>

                    <p className="text-xs text-white/40 mt-2">
                      Multiplayer interactive experiences
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-3"></span>
                  </Link>

                </div>
              </div>
            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              className="group relative text-sm tracking-widest font-light"
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* NEWS */}
            <div className="relative group">

              <Link
                to="/news"
                className="group relative text-sm tracking-widest font-light flex items-center gap-2"
              >
                NEWS
                <ChevronDown className="w-4 h-4" />

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <div className=" bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] rounded-2xl relative overflow-hidden min-w-[220px] p-6 space-y-4">
               
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>
                  <Link
                    to="/news"
                    className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      LATEST NEWS
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-2"></span>
                  </Link>

                  <Link
                    to="/blog"
                    className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      BLOG
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-2"></span>
                  </Link>

                  <Link
                    to="/press"
                   className="block group/item relative z-10"
                  >
                    <p className="text-sm tracking-widest">
                      PRESS
                    </p>

                    <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover/item:w-full mt-2"></span>
                  </Link>

                </div>
              </div>
            </div>

            {/* CAREERS */}
            <Link
              to="/reach-out"
              className="group relative text-sm tracking-widest font-light"
            >
              CAREERS
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="group relative text-sm tracking-widest font-light"
            >
              SUPPORT
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* LANGUAGE */}
            <div className="flex items-center text-[11px] tracking-[0.3em] uppercase font-light text-white/60">

              <button
                onClick={() => setLanguage('KR')}
                className={`transition-colors duration-300 ${
                  language === 'KR'
                    ? 'text-white'
                    : 'hover:text-white'
                }`}
              >
                KR
              </button>

              <span className="mx-2 text-white/40">|</span>

              <button
                onClick={() => setLanguage('EN')}
                className={`transition-colors duration-300 ${
                  language === 'EN'
                    ? 'text-white'
                    : 'hover:text-white'
                }`}
              >
                EN
              </button>

            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (

          <div className="md:hidden border-t border-white/10 py-6 space-y-6">

            {/* LANGUAGE */}
            <div className="flex items-center gap-3 text-sm tracking-widest">

              <button
                onClick={() => setLanguage('KR')}
                className={`${
                  language === 'KR'
                    ? 'text-white'
                    : 'text-white/40'
                }`}
              >
                KR
              </button>

              <span className="text-white/40">|</span>

              <button
                onClick={() => setLanguage('EN')}
                className={`${
                  language === 'EN'
                    ? 'text-white'
                    : 'text-white/40'
                }`}
              >
                EN
              </button>

            </div>

            {/* HOME */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-widest"
            >
              HOME
            </Link>

            {/* GAMES */}
            <div>

              <div className="flex items-center justify-between">

                <Link
                  to="/games"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-widest"
                >
                  GAMES
                </Link>

                <button
                  onClick={() => setGamesOpen(!gamesOpen)}
                >
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      gamesOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

              </div>

              {gamesOpen && (

                <div className="ml-4 mt-4 space-y-4 border-l border-white/10 pl-4">

                  <Link
                    to="/games/veil"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    VEIL
                  </Link>

                </div>
              )}
            </div>

            {/* STUDIOS */}
            <div>

              <div className="flex items-center justify-between">

                <Link
                  to="/studios"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-widest"
                >
                  STUDIOS
                </Link>

                <button
                  onClick={() => setStudiosOpen(!studiosOpen)}
                >
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      studiosOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

              </div>

              {studiosOpen && (

                <div className="ml-4 mt-4 space-y-4 border-l border-white/10 pl-4">

                  <Link
                    to="/studios/nexaris"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    NEXARIS STUDIO
                  </Link>

                  <Link
                    to="/studios/kairon"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    KAIRON GAMES
                  </Link>

                </div>
              )}
            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-widest"
            >
              ABOUT
            </Link>

            {/* NEWS */}
            <div>

              <div className="flex items-center justify-between">

                <Link
                  to="/news"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-widest"
                >
                  NEWS
                </Link>

                <button
                  onClick={() => setNewsOpen(!newsOpen)}
                >
                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      newsOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

              </div>

              {newsOpen && (

                <div className="ml-4 mt-4 space-y-4 border-l border-white/10 pl-4">

                  <Link
                    to="/news"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    LATEST NEWS
                  </Link>

                  <Link
                    to="/blog"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    BLOG
                  </Link>

                  <Link
                    to="/press"
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-white/60 hover:text-white transition-colors"
                  >
                    PRESS
                  </Link>

                </div>
              )}
            </div>

            {/* CAREERS */}
            <Link
              to="/reach-out"
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-widest"
            >
              CAREERS
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-sm tracking-widest"
            >
              SUPPORT
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}