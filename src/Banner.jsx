import { FiPlayCircle } from 'react-icons/fi';
import bannerImg from './assets/banner.png';

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

      {/* Right Content - Banner Image */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <img
          src={bannerImg}
          alt="Digital Workflow"
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Banner;
