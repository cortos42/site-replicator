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
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformez votre intérieur
          </h1>
          <p className="text-xl mb-8">
            Des solutions de rénovation sur mesure pour créer l'espace de vos rêves
          </p>
          <a 
            href="#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg 
            transition-colors text-lg font-medium"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
};