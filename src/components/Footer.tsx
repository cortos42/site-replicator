import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Renov<span className="text-primary">&</span>Moi
            </h3>
            <p className="text-gray-400">
              Transformez votre espace avec notre expertise en rénovation d'intérieur.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span>contact@renovetmoi.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-primary" />
                <span>123 rue de la Rénovation, Paris</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Horaires</h4>
            <div className="space-y-2 text-gray-400">
              <p>Lundi - Vendredi: 9h - 18h</p>
              <p>Samedi: 10h - 16h</p>
              <p>Dimanche: Fermé</p>
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