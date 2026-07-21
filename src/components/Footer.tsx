import { Disc, Youtube, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* LOGO */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-4xl font-black tracking-tighter mb-6 block hover:text-gray-400 transition-colors"
            >
              MOVEX
            </Link>

            <p className="text-gray-500 font-light leading-relaxed max-w-md">
              Crafting the future of interactive entertainment.
              One world at a time.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm tracking-[0.3em] text-gray-500 mb-6 font-light">
              NAVIGATE
            </h4>

            <nav className="space-y-3">

              <Link
                to="/games"
                className="group block text-white font-light w-fit"
              >
                <span className="relative">
                  Games
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                to="/about"
                className="group block text-white font-light w-fit"
              >
                <span className="relative">
                  About
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                to="/news"
                className="group block text-white font-light w-fit"
              >
                <span className="relative">
                  News
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                to="/contact"
                className="group block text-white font-light w-fit"
              >
                <span className="relative">
                  Reach Out
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

            </nav>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="text-sm tracking-[0.3em] text-gray-500 mb-6 font-light">
              CONNECT
            </h4>

            <div className="flex flex-col gap-4 font-light">

              <a
                href="https://discord.gg/ZGp2FCjjkX"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <Disc className="w-5 h-5" />

                <span className="relative">
                  DISCORD
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="https://youtube.com/@Morvex_Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <Youtube className="w-5 h-5" />

                <span className="relative">
                  YOUTUBE
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <Instagram className="w-5 h-5" />

                <span className="relative">
                  INSTAGRAM
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-fit"
              >
                <Twitter className="w-5 h-5" />

                <span className="relative">
                  TWITTER
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-10 flex justify-between items-center flex-wrap gap-6">

          <p className="text-gray-600 text-sm font-light">
            © {currentYear} MOVEX. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6 text-sm flex-wrap justify-center">

            <a
              href="#"
              className="text-gray-600 hover:text-white transition-colors font-light"
            >
              Privacy
            </a>

             <p className="text-gray-600 text-sm font-light">
              | </p>
            
            <a
              href="#"
              className="text-gray-600 hover:text-white transition-colors font-light"
            >
              Terms
            </a>

             <p className="text-gray-600 text-sm font-light">
              | </p>
            
            <a
              href="#"
              className="text-gray-600 hover:text-white transition-colors font-light"
            >
              Legal
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}