import React from 'react';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us today for a free consultation and discover how our IT solutions can help your business grow and thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button to="/contact" size="lg">
              Get Started
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;