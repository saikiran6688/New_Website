import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const About: React.FC = () => {
  const features = [
    'Expert team with 10+ years of industry experience',
    'Tailored solutions for businesses of all sizes',
    'Cutting-edge technology and best practices',
    '24/7 support and maintenance services',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="About TechInnovate"
              subtitle="Empowering businesses through innovative technology solutions since 2015."
              className="mb-6"
            />
            
            <p className="text-gray-600 mb-6">
              At TechInnovate, we believe technology should be an enabler, not an obstacle. Our mission is to help businesses leverage technology to achieve their goals, improve efficiency, and stay ahead of the competition. With our team of experienced professionals, we deliver customized IT solutions that address your specific needs.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-accent-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button to="/about">
              Learn More About Us
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaborating"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary-900 opacity-20"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-accent-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;