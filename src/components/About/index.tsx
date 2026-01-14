const About = () => {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/30 dark:bg-secondary/10 rounded-full blur-3xl"></div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-text-light dark:text-white">Más que una consultora, <span className="text-primary dark:text-secondary">tu aliada estratégica.</span></h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 mb-8 leading-relaxed">
              Con 7 años de experiencia navegando el ecosistema digital, he ayudado a más de 50 pequeños negocios a escalar. Mi enfoque combina la calidez humana con la frialdad de los datos.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm border-l-4 border-accent">
                <h4 className="text-3xl font-bold text-text-light dark:text-white mb-1">7+</h4>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium uppercase tracking-wider">Años de experiencia</p>
              </div>
              <div className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm border-l-4 border-primary">
                <h4 className="text-3xl font-bold text-text-light dark:text-white mb-1">-40%</h4>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium uppercase tracking-wider">Reducción de CAC</p>
              </div>
              <div className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm border-l-4 border-secondary">
                <h4 className="text-3xl font-bold text-text-light dark:text-white mb-1">300%</h4>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium uppercase tracking-wider">Aumento de ROAS</p>
              </div>
              <div className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm border-l-4 border-teal-500">
                <h4 className="text-3xl font-bold text-text-light dark:text-white mb-1">100%</h4>
                <p className="text-sm text-text-light/60 dark:text-text-dark/60 font-medium uppercase tracking-wider">Transparencia</p>
              </div>
            </div>
            <a className="inline-flex items-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20" href="#contact">
              ¿Quieres ser mi próximo cliente?
            </a>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-2xl -z-10"></div>
            <img alt="Retrato profesional Irina Glazún" className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover border-8 border-white dark:border-surface-dark transform -rotate-2 hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYD5UFg54eYVXm4HlJmwBp3yQnRJp1cEKtmQaQcrcJ6XTR_l2ed62dXGT8zawwdwx6OwR4oDBIHCMk90yE-eRbkSXQFuarLETakXjDr1gC7YyF6x7zsH1_RZzhxscyTXBVvvLrLOwaU8UPAR1Q207jcVrJaAv-EMHKNnyin8caHum-LBHril0Krq19Wwqf-reyBnIDfWseEmu1sGdQmDniVDAE1HpjkWlX7SPlk6N4cWCllXshvSjKeRoNCgCRmkS4ZvSaL131T7I"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
