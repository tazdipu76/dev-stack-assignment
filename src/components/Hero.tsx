import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 text-left">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl font-normal leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 shadow-lg shadow-pink-500/20 transition-all duration-200 transform hover:-translate-y-0.5 text-center"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-lg text-gray-700 font-medium bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-md lg:max-w-lg w-full">
              {/* Optional Subtle Glow Effect Behind Image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-15"></div>
              
              <img
                src="../assets/banner-stack.png" 
                alt="3D Development Stack Illustration"
                className="relative z-10 w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;