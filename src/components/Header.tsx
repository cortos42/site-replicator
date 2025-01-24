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
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">À propos</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projets</a>
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
              <a href="#services" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>À propos</a>
              <a href="#projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projets</a>
              <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};