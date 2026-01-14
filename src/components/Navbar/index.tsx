const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-secondary/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display font-bold text-2xl tracking-tight text-primary dark:text-secondary uppercase">
              irina glaz<span className="lowercase">ú</span>n<span className="text-accent">.</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#about">Sobre mí</a>
            <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#methodology">Metodología</a>
            <a className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary transition-colors" href="#services">Servicios</a>
            <a className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-primary/30 font-medium" href="#contact">Hablemos</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
