const Services = () => {
  return (
    <section className="py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold text-text-light dark:text-white mb-6">Soluciones a medida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-soft hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Paid Media</h3>
              <p className="text-text-light/60 dark:text-text-dark/60 text-sm">Gestión experta de Google Ads, Meta Ads y LinkedIn Ads para captar clientes cualificados.</p>
            </div>
            <div className="p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-soft hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">E-commerce</h3>
              <p className="text-text-light/60 dark:text-text-dark/60 text-sm">Estrategias full-funnel para tiendas online. Recuperación de carritos y aumento del ticket medio.</p>
            </div>
            <div className="p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-soft hover:shadow-xl transition-shadow border-t-4 border-accent">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined">filter_alt</span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Lead Gen</h3>
              <p className="text-text-light/60 dark:text-text-dark/60 text-sm">Sistemas automatizados de captación de leads para servicios profesionales y B2B.</p>
            </div>
            <div className="p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-soft hover:shadow-xl transition-shadow border-t-4 border-text-light">
              <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Estrategia 360º</h3>
              <p className="text-text-light/60 dark:text-text-dark/60 text-sm">Consultoría integral para alinear ventas y marketing. Definición de buyer persona y customer journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
