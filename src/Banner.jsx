import { FiPlayCircle, FiDisc } from 'react-icons/fi';

const Banner = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 px-10 max-w-7xl mx-auto gap-12 bg-white">
      {/* Left Content */}
      <div className="flex-1 space-y-8 flex flex-col items-start text-left">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
          <span>New: AI-Powered Tools Available</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] tracking-tight">
          Supercharge Your<br />Digital Workflow
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex items-center space-x-4 pt-2">
          <button className="btn-primary px-8 py-3.5 text-base shadow-lg shadow-purple-200">
            Explore Products
          </button>
          <button className="btn-outline-primary px-6 py-3.5 text-base flex items-center space-x-2">
            <FiPlayCircle size={20} />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>

      {/* Right Content - Abstract Tech Graphic */}
      <div className="flex-1 w-full flex justify-center lg:justify-end relative">
        <div className="w-[450px] h-[450px] bg-gradient-to-tr from-purple-50 to-purple-100 rounded-3xl relative overflow-hidden flex items-center justify-center shadow-xl border border-white">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(170,59,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10 w-64 h-64 border border-purple-200 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border border-purple-300 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border border-purple-400 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm">
                <FiDisc size={64} className="text-purple-600 opacity-80" />
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"><div className="w-6 h-6 border-2 border-purple-400 rounded"></div></div>
          <div className="absolute bottom-32 left-20 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-purple-300"></div></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
