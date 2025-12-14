import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tous', 'Cyberviolence', 'Prévention', 'Loi', 'Témoignage'];

  const articles = [
    {
      id: 1,
      title: 'Comment reconnaître le cyberharcèlement',
      category: 'Prévention',
      date: '10 Dec 2024',
      excerpt: 'Les signes à surveiller et les actions à prendre pour se protéger du harcèlement en ligne.',
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Vos droits en matière de protection numérique',
      category: 'Loi',
      date: '8 Dec 2024',
      excerpt: 'Comprendre le cadre légal haïtien pour lutter contre les violences en ligne.',
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min',
    },
    {
      id: 3,
      title: 'Témoignage: Surmonter la cyberviolence',
      category: 'Témoignage',
      date: '5 Dec 2024',
      excerpt: 'Une histoire de courage et de résilience face aux violences numériques.',
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min',
    },
    {
      id: 4,
      title: 'Les nouvelles formes de cyberviolence',
      category: 'Cyberviolence',
      date: '3 Dec 2024',
      excerpt: "Deep fake, revenge porn et autres menaces émergentes de l'ère numérique.",
      image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjU2NTI5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'Protéger vos enfants en ligne',
      category: 'Prévention',
      date: '1 Dec 2024',
      excerpt: 'Guide pratique pour les parents sur la sécurité numérique des mineurs.',
      image: 'https://images.unsplash.com/photo-1764116679125-b1db58fb37f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvdGVjdGlvbiUyMHNoaWVsZHxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min',
    },
    {
      id: 6,
      title: 'Que faire en cas de sextorsion',
      category: 'Cyberviolence',
      date: '28 Nov 2024',
      excerpt: 'Procédures et ressources pour les victimes de chantage sexuel en ligne.',
      image: 'https://images.unsplash.com/photo-1761783536272-2fb78dd52c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwaGVscCUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU3MjU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '9 min',
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl text-transparent md:text-5xl">
            Articles & Ressources
          </h1>
          <p className="text-lg text-gray-400">
            Informations, conseils et témoignages pour mieux comprendre et combattre la cyberviolence
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:flex md:items-center md:justify-between md:space-y-0">
          {/* Search */}
          <div className="relative flex-1 md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-800 bg-gray-900/50 py-3 pl-10 pr-4 text-white placeholder-gray-500 transition-colors focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'border border-gray-800 bg-gray-900/50 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-gray-400">
          {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
        </p>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-cyan-500/50 hover:bg-gray-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-cyan-500/90 px-3 py-1 text-xs text-white">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} de lecture</span>
                </div>
                
                <h3 className="mb-2 text-xl text-white transition-colors group-hover:text-cyan-400">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-400">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredArticles.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-400">Aucun article trouvé pour cette recherche.</p>
          </div>
        )}

        {/* Pagination */}
        {filteredArticles.length > 0 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
              Précédent
            </button>
            
            <div className="flex gap-2">
              <button className="h-10 w-10 rounded-lg bg-cyan-500 text-white">1</button>
              <button className="h-10 w-10 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                2
              </button>
              <button className="h-10 w-10 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                3
              </button>
            </div>
            
            <button className="rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2 text-gray-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
