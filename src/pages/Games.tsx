import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface Game {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
}

const games: Game[] = [
  { id: 1, title: 'VEIL', category: 'Action RPG', year: '2026', description: 'An immersive action RPG set in a decaying world.' },
];

export default function Games() {

  useEffect(() => {
  document.title = 'MOVEX || Games';
}, []);
  
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">OUR GAMES</h1>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
            A collection of worlds, stories, and experiences that define a generation.
          </p>
        </div>

        <div className="flex justify-center">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/games/veil`}
              className="relative aspect-video bg-gray-900 overflow-hidden cursor-pointer group w-full max-w-7xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 transition-transform duration-700 group-hover:scale-110">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-black text-white/5 select-none tracking-tighter">
                    {game.id.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-white flex flex-col items-center justify-center transition-opacity duration-500 p-6 ${
                  hoveredId === game.id ? 'opacity-95' : 'opacity-0'
                }`}
                onMouseEnter={() => setHoveredId(game.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="text-center">
                  <h3 className="text-3xl font-black tracking-tighter mb-2 text-black">
                    {game.title}
                  </h3>
                  <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
                    {game.category}
                  </p>
                  <p className="text-sm text-gray-700 font-light mb-4">{game.year}</p>
                  <p className="text-xs text-gray-600 font-light">{game.description}</p>
                </div>
              </div>

              <div className="absolute top-6 right-6 text-xs tracking-[0.3em] text-white/30">
                {game.id.toString().padStart(2, '0')}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
