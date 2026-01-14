const Footer = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark py-20 relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-text-light/40 dark:text-text-dark/40">
          <p>© 2023 Irina Glazún. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
            <a className="hover:text-primary transition-colors" href="#">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
