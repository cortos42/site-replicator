import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-bold">
            Renov<span className="text-primary">&</span>Moi
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#why-choose-us" className="hover:text-primary transition-colors">Pourquoi nous choisir</a>
            <a href="#eligible-works" className="hover:text-primary transition-colors">Travaux éligibles</a>
            <a href="/ma-prime-renov" className="hover:text-primary transition-colors">MaPrimeRénov'</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#why-choose-us" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pourquoi nous choisir</a>
              <a href="#eligible-works" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Travaux éligibles</a>
              <a href="/ma-prime-renov" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>MaPrimeRénov'</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};