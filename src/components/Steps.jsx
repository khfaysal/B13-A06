import { FiUser, FiBox, FiSend } from 'react-icons/fi';

const Steps = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
              01
            </div>
            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
              <FiUser size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
              02
            </div>
            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
              <FiBox size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">
              03
            </div>
            <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
              <FiSend size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;
