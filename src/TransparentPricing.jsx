import { FiCheck, FiUser, FiBox, FiSend } from 'react-icons/fi';

const TransparentPricing = () => {
  return (
    <>
      {/* ===== Get Started In 3 Steps ===== */}
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
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">01</div>
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <FiUser size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Create Account</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative">
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">02</div>
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <FiBox size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Products</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative">
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">03</div>
              <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <FiSend size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Creating</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Simple, Transparent Pricing ===== */}
      <section id="pricing" className="py-24 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col h-full text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
              <div className="mb-8 flex items-end tracking-tight">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400 font-medium mb-1 ml-1">/Month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Access to 10 free tools</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Basic templates</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Community support</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />1 project per month</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3.5 font-semibold text-sm transition-colors mt-auto">Get Started Free</button>
            </div>

            {/* Pro Plan */}
            <div className="bg-purple-600 border border-purple-500 rounded-3xl p-8 shadow-xl shadow-purple-200 flex flex-col h-full relative text-left transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-purple-200 text-sm mb-6">Best for professionals</p>
              <div className="mb-8 flex items-end tracking-tight text-white">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-purple-200 font-medium mb-1 ml-1">/Month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-white">
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Access to all premium tools</li>
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Unlimited templates</li>
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Priority support</li>
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Unlimited projects</li>
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Cloud sync</li>
                <li className="flex items-center text-sm font-medium"><FiCheck className="text-white mr-3 flex-shrink-0" size={18} />Advanced analytics</li>
              </ul>
              <button className="w-full bg-white hover:bg-gray-50 text-purple-600 rounded-full py-3.5 font-semibold text-sm transition-colors mt-auto">Start Pro Trial</button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col h-full text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
              <div className="mb-8 flex items-end tracking-tight">
                <span className="text-5xl font-bold text-gray-900">$99</span>
                <span className="text-gray-400 font-medium mb-1 ml-1">/Month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Everything in Pro</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Team collaboration</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Custom integrations</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Dedicated support</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />SLA guarantee</li>
                <li className="flex items-center text-sm text-gray-600 font-medium"><FiCheck className="text-emerald-500 mr-3 flex-shrink-0" size={18} />Custom branding</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3.5 font-semibold text-sm transition-colors mt-auto">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="bg-purple-600 py-24">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-purple-100 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3.5 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all">Explore Products</button>
            <button className="w-full sm:w-auto bg-transparent border border-purple-300 hover:bg-purple-500/50 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all">View Pricing</button>
          </div>
          <p className="text-sm text-purple-200">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>
    </>
  );
};

export default TransparentPricing;
