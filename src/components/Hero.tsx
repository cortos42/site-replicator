export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Rénovez Votre Maison et Économisez Avec MaPrimeRénov' !
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Rénov'&Moi : Votre Accompagnateur Expert Pour une Rénovation Réussie
          </p>
          <a 
            href="/maprimerenov"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg 
            transition-colors text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Obtenir Mon Évaluation Gratuite
          </a>
        </div>
      </div>
    </section>
  );
};