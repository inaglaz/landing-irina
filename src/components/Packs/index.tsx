const Packs = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden" id="packs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest font-semibold text-sm">Planes</span>
          <h2 className="font-display text-4xl font-bold mt-2 text-text-light dark:text-white">Packs de Gestión</h2>
          <p className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto mt-4">Transparencia desde el primer día con opciones adaptadas a tu volumen de negocio.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-soft border border-secondary/20 hover:border-primary/40 transition-all flex flex-col">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-text-light dark:text-white mb-4 text-center">Standard</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-primary">200€</span>
                <span className="text-text-light/60 dark:text-text-dark/60">/mes</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span>Gestión integral de 1 plataforma (Meta o Google)</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span>Setup de conversiones avanzado</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span>Reporte mensual de resultados</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                <span>Optimización semanal de campañas</span>
              </li>
            </ul>
            <a className="w-full py-4 bg-primary text-white font-bold rounded-xl text-center hover:bg-opacity-90 transition-all" href="#contact">Empezar ahora</a>
          </div>
          <div className="bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-soft border border-secondary/20 hover:border-accent/40 transition-all flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Más Popular</div>
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-text-light dark:text-white mb-4 text-center">Custom</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-accent">A medida</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-accent text-xl">add_circle</span>
                <span>Estrategia Multi-canal (Google + Meta + LinkedIn)</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-accent text-xl">add_circle</span>
                <span>Dashboard en tiempo real (Looker Studio)</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-accent text-xl">add_circle</span>
                <span>Consultoría estratégica de negocio</span>
              </li>
              <li className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-accent text-xl">add_circle</span>
                <span>Escalado de presupuestos dinámico</span>
              </li>
            </ul>
            <a className="w-full py-4 bg-accent text-white font-bold rounded-xl text-center hover:bg-opacity-90 transition-all" href="#contact">Solicitar presupuesto</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Packs;
