export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Notre équipe au travail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">À propos de nous</h2>
            <p className="text-gray-600 mb-6">
              Depuis plus de 10 ans, notre équipe d'experts passionnés transforme les espaces intérieurs 
              en lieux de vie exceptionnels. Nous mettons notre savoir-faire au service de vos projets 
              pour créer des espaces qui vous ressemblent.
            </p>
            <p className="text-gray-600 mb-8">
              Notre engagement pour la qualité et notre attention aux détails nous permettent de garantir 
              des résultats qui dépassent vos attentes.
            </p>
            <a 
              href="#contact"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg 
              transition-colors font-medium"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};