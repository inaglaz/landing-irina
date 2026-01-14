const Methodology = () => {
  return (
    <section className="py-20 bg-primary dark:bg-surface-dark text-white relative overflow-hidden" id="methodology">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-widest font-semibold text-sm">El Proceso</span>
          <h2 className="font-display text-4xl font-bold mt-2">Mi Metodología</h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">Un enfoque estructurado para eliminar la incertidumbre y garantizar resultados.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">search</span>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Auditoría</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Analizamos tu situación actual, tu competencia y tus activos digitales para encontrar fugas de dinero y oportunidades.
            </p>
            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent -ml-4 z-0"></div>
          </div>
          <div className="relative group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Acción</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Implementamos la estrategia: configuración de campañas, optimización de landing pages y configuración de tracking.
            </p>
            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent -ml-4 z-0"></div>
          </div>
          <div className="relative group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">bar_chart</span>
            </div>
            <h3 className="text-xl font-bold mb-3">3. Medición</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Monitoreo constante. Lo que no se mide, no se puede mejorar. Recibes reportes claros y accionables.
            </p>
            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent -ml-4 z-0"></div>
          </div>
          <div className="relative group">
            <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">loop</span>
            </div>
            <h3 className="text-xl font-bold mb-3">4. Optimización</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Ciclo de mejora continua basado en datos reales para maximizar el retorno de inversión y escalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Methodology;
