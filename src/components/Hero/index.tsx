const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 dark:bg-secondary/5 rounded-l-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 dark:bg-primary/5 rounded-r-full blur-3xl transform -translate-x-1/4"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 dark:bg-secondary/10 rounded-full text-primary dark:text-secondary text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              Marketing para PyMES
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-text-light dark:text-white">
              Ayudo a pequeños negocios a <span className="text-primary dark:text-secondary italic">conseguir clientes</span>
            </h1>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-lg leading-relaxed">
              Transformo tu inversión digital en resultados medibles. Sin jerga técnica, sin agencias impersonales. Estrategia real para crecimiento real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a className="px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-full shadow-xl shadow-green-500/20 hover:transform hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-3" href="https://wa.me/#" target="_blank">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.319 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.735-.98zm11.367-7.403c-.315-.158-1.86-.918-2.149-1.023-.289-.105-.499-.158-.709.158-.21.316-.814 1.023-1 1.234-.185.211-.37.237-.685.079-.315-.158-1.33-.49-2.532-1.562-.936-.834-1.567-1.865-1.751-2.181-.184-.315-.02-.485.138-.642.142-.142.315-.368.473-.553.158-.185.21-.316.316-.526.105-.211.052-.395-.026-.553-.079-.158-.709-1.71-.971-2.342-.254-.616-.511-.533-.709-.543-.182-.008-.394-.01-.605-.01-.21 0-.552.079-.841.395-.289.316-1.104 1.079-1.104 2.632 0 1.553 1.131 3.052 1.288 3.263.158.211 2.227 3.4 5.397 4.766.753.325 1.341.519 1.8.663.758.241 1.448.207 1.993.126.608-.09 1.86-.763 2.122-1.474.262-.711.262-1.316.184-1.447-.078-.131-.289-.21-.604-.368z"></path></svg>
                Contáctame por Whatsapp
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/20 dark:bg-secondary/10 rounded-2xl rotate-3 transform transition-transform duration-500 hover:rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Irina Glazún - Consultora de marketing digital" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1o9jsTRtmkOC-MgCX-mtfUMkzWLXHrvVXSpZuk1cJw0oIzaW7oqANQC9A7H7uKCAaxNFXHVVTlbrvQyWIHypM3kHAKIT5T1JQXwmsVH3--n37wi8CojpkNp6p6bTWGAKAHO3bmff3ok9G_Z0LyGiua9EMUlUNe31Tr4XhDt-sjoDg5X81HPWALm2dY4aG9iQhywgeoPZaI1i73gU3szZrpbnTyX4ZfXeAcU1vscBW6aJUdVl4YEpSfJRM48fHMcA68hNqfaANDeY"/>
            </div>
            <div className="absolute bottom-8 -left-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce duration-[3000ms]">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-xs text-text-light/60 dark:text-text-dark/60 font-medium">ROAS Promedio</p>
                <p className="text-xl font-bold text-primary dark:text-white">4.5x</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
