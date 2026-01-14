const Familiar = () => {
  return (
    <section className="py-20 bg-white dark:bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 text-text-light dark:text-white">¿Te suena familiar?</h2>
          <p className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto text-lg">
            Muchos dueños de negocio se sienten perdidos en el mundo digital. Identifiquemos si estás pasando por esto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-soft border border-transparent hover:border-secondary/30 transition-all relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400 mb-6 relative z-10">
              <span className="material-symbols-outlined">sentiment_dissatisfied</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3 dark:text-white">Tráfico sin ventas</h3>
            <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
              Tienes visitas en tu web, likes en redes sociales, pero la caja registradora no suena. Los "vanity metrics" no pagan facturas.
            </p>
          </div>
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-soft border border-transparent hover:border-secondary/30 transition-all relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 relative z-10">
              <span className="material-symbols-outlined">visibility_off</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3 dark:text-white">Agencias 'Caja Negra'</h3>
            <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
              Pagas una iguala mensual pero no sabes qué están haciendo realmente. Reportes confusos y cero explicaciones claras.
            </p>
          </div>
          <div className="group bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-soft border border-transparent hover:border-secondary/30 transition-all relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6 relative z-10">
              <span className="material-symbols-outlined">money_off</span>
            </div>
            <h3 className="font-display text-xl font-bold mb-3 dark:text-white">Desconocimiento del gasto</h3>
            <p className="text-text-light/70 dark:text-text-dark/70 leading-relaxed">
              Sientes que estás tirando dinero en anuncios de Google o Meta sin entender cuál es el retorno real de cada euro invertido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Familiar;
