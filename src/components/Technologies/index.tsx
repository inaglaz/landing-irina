const Technologies = () => {
  return (
    <section className="py-10 bg-white dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-text-light/40 dark:text-text-dark/40 mb-8">Tecnología &amp; Herramientas</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">ads_click</span> Google Ads</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">social_leaderboard</span> Meta Ads</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">analytics</span> GA4</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">data_usage</span> Looker</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">mail</span> HubSpot</div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-600 dark:text-gray-400"><span className="material-symbols-outlined">shopping_cart</span> Shopify</div>
        </div>
      </div>
    </section>
  );
};
export default Technologies;
