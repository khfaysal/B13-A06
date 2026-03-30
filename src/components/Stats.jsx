const Stats = () => {
  return (
    <section className="bg-[#8A2BE2] py-20">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-evenly divide-y md:divide-y-0 md:divide-x divide-purple-400/50">
        
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center text-center px-16 py-6 md:py-0 w-full md:w-auto">
          <h2 className="text-5xl font-bold text-white mb-3">50K+</h2>
          <p className="text-xl text-purple-100/90 font-medium">Active Users</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center text-center px-16 py-6 md:py-0 w-full md:w-auto">
          <h2 className="text-5xl font-bold text-white mb-3">200+</h2>
          <p className="text-xl text-purple-100/90 font-medium">Premium Tools</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center text-center px-16 py-6 md:py-0 w-full md:w-auto">
          <h2 className="text-5xl font-bold text-white mb-3">4.9</h2>
          <p className="text-xl text-purple-100/90 font-medium">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;
