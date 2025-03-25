// import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Credit Analysis"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Credit Risk
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  <strong className="text-blue-600">Background:</strong> Lenders face significant challenges in assessing borrower creditworthiness, 
                  leading to potential financial losses and missed opportunities.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  <strong className="text-blue-600">Challenge:</strong> Traditional credit assessment methods often fall short in 
                  accurately predicting borrower behavior and risk levels.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  <strong className="text-blue-600">Solution:</strong> Our AI-powered tool leverages advanced algorithms and 
                  historical data to provide accurate, real-time risk assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;