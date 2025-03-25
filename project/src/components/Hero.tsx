import { useState } from 'react';
// import { ShieldCheck } from 'lucide-react';
import AuthModal from './AuthModal';

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <section id="home" className="pt-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="text-left">
            <div className="flex items-center mb-6">
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Credit Risk Analysis
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your lending decisions with advanced machine learning and real-time risk assessment. Make smarter, data-driven choices with confidence.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 border-2 border-blue-600">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                alt="Credit Analysis Dashboard"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 font-semibold mb-1">Risk Score</p>
                      <p className="text-2xl font-bold text-gray-900">87/100</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold">A+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </section>
  );
};

export default Hero;