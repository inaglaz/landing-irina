const Contact = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-20 relative overflow-hidden" id="contact">
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-secondary/20 dark:bg-secondary/5 rounded-tl-full blur-3xl pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="p-10 md:p-12 md:w-1/2 flex flex-col justify-center">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Contacto</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-light dark:text-white mb-6">¿Hablamos de tus objetivos?</h2>
            <p className="text-text-light/70 dark:text-text-dark/70 mb-8">
              Reserva una auditoría inicial de 15 minutos. Sin coste, sin compromiso, solo valor desde el primer minuto.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>No cobro por consultar</span>
              </div>
              <div className="flex items-center gap-3 text-text-light/80 dark:text-text-dark/80">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Respuesta en menos de 24h</span>
              </div>
            </div>
          </div>
          <div className="bg-primary/5 dark:bg-black/20 p-10 md:p-12 md:w-1/2 flex flex-col justify-center">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1" htmlFor="name">Nombre</label>
                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark dark:text-white shadow-sm focus:border-primary focus:ring-primary" id="name" type="text"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1" htmlFor="email">Email</label>
                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark dark:text-white shadow-sm focus:border-primary focus:ring-primary" id="email" type="email"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-1" htmlFor="website">Sitio Web</label>
                <input className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark dark:text-white shadow-sm focus:border-primary focus:ring-primary" id="website" type="url"/>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-colors mt-4" type="button">
                Solicitar Auditoría
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
