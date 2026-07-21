import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: 'ECLIPSE Wins Game of the Year',
    category: 'Awards',
    date: 'January 15, 2026',
    excerpt: 'Our flagship title receives industry recognition for innovation and artistic excellence.',
    image: '📊',
  },
  {
    id: 2,
    title: 'Studio Expansion Announcement',
    category: 'Studio',
    date: 'January 8, 2026',
    excerpt: 'Opening new offices in Tokyo and Berlin to expand our creative reach.',
    image: '🌍',
  },
  {
    id: 3,
    title: 'VOID WALKER: Behind the Scenes',
    category: 'Development',
    date: 'December 28, 2025',
    excerpt: 'An in-depth look at the creative process behind our latest adventure.',
    image: '🎬',
  },
  {
    id: 4,
    title: 'Partnering with Leading Universities',
    category: 'Education',
    date: 'December 15, 2025',
    excerpt: 'Establishing game development programs at top institutions worldwide.',
    image: '📚',
  },
  {
    id: 5,
    title: 'Industry Trends 2026',
    category: 'Insight',
    date: 'December 1, 2025',
    excerpt: 'Our predictions for the future of interactive entertainment.',
    image: '🔮',
  },
  {
    id: 6,
    title: 'Team Spotlight: Art Department',
    category: 'Team',
    date: 'November 20, 2025',
    excerpt: 'Meet the talented artists shaping the visual language of STUDIO.',
    image: '🎨',
  },
];

export default function NewsPage() {

  useEffect(() => {
  document.title = 'MOVEX || News';
}, []);
  
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">NEWS & UPDATES</h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Stay informed on the latest developments from STUDIO.
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/news/${article.id}`}
              className="group border-b border-white/10 pb-8 transition-all duration-500"
              onMouseEnter={() => setHoveredId(article.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="flex gap-4 items-center mb-3">
                    <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">{article.category}</span>
                    <span className="text-xs text-gray-600">{article.date}</span>
                  </div>
                  <h2
                    className={`text-3xl md:text-4xl font-black tracking-tight mb-3 transition-colors duration-300 ${
                      hoveredId === article.id ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {article.title}
                  </h2>
                  <p className="text-lg text-gray-500 font-light mb-4 max-w-3xl">
                    {article.excerpt}
                  </p>
                  <div
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      hoveredId === article.id ? 'translate-x-2' : 'translate-x-0'
                    }`}
                  >
                    <span className="text-sm tracking-wider">READ MORE</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="hidden md:block text-6xl flex-shrink-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  {article.image}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
