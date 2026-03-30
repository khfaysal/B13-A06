const CTA = () => {
  return (
    <section className="bg-purple-600 py-24">
      <div className="max-w-4xl mx-auto px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-purple-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all">
            Explore Products
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-purple-300 hover:bg-purple-500/50 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all">
            View Pricing
          </button>
        </div>
        
        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
