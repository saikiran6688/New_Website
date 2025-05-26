import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800 opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Innovative IT Solutions for Your Business
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We help businesses transform and grow through cutting-edge technology and strategic IT consulting. 
            Elevate your company with our expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/services" size="lg">
              Our Services
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract Shape */}
      <div className="hidden lg:block absolute -right-64 top-0 h-full w-1/2 bg-accent-600 bg-opacity-20 rounded-full blur-3xl z-0"></div>
    </section>
  );
};

export default Hero;