import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Plan du site
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/ma-prime-renov" className="hover:text-primary transition-colors">
                  MaPrimeRénov'
                </a>
              </li>
              <li>
                <a href="/travaux-eligibles" className="hover:text-primary transition-colors">
                  Travaux éligibles
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-bold mb-6">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span>contact@renovetmoi.fr</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Renov&Moi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};