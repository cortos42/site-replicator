const Blog = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Notre Blog</h1>
      <p className="text-gray-600 mb-8">
        Découvrez nos derniers articles sur la rénovation énergétique, les aides financières et les conseils d'experts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder pour les articles du blog */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Comment optimiser votre chauffage ?</h2>
          <p className="text-gray-600 mb-4">
            Découvrez les meilleures pratiques pour réduire votre consommation d'énergie...
          </p>
          <button className="text-primary hover:underline">Lire la suite →</button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Les dernières nouveautés MaPrimeRénov'</h2>
          <p className="text-gray-600 mb-4">
            Restez informé des changements récents concernant les aides à la rénovation...
          </p>
          <button className="text-primary hover:underline">Lire la suite →</button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Isolation : par où commencer ?</h2>
          <p className="text-gray-600 mb-4">
            Guide complet pour bien démarrer vos travaux d'isolation...
          </p>
          <button className="text-primary hover:underline">Lire la suite →</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;