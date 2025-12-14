import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/articles', label: 'Articles' },
    { path: '/infos', label: 'Infos' },
    { path: '/centre-aide', label: "Centre d'aide" },
    { path: '/a-propos', label: 'À propos' },
    { path: '/utilisateur', label: 'Utilisateur' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-xl font-bold text-transparent">
              CYBERSENSIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-2 py-1 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute -bottom-[17px] left-0 h-0.5 w-full bg-gradient-to-r from-cyan-500 to-teal-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-gray-800 py-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 text-sm transition-colors ${
                  isActive(item.path)
                    ? 'bg-gray-800/50 text-cyan-400'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
