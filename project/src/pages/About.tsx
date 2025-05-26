import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Team from '../components/about/Team';
import CTA from '../components/home/CTA';

const About: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We continuously explore and implement cutting-edge technologies to provide the best solutions for our clients.',
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and client relationships.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from solution design to implementation and support.',
    },
    {
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We prioritize understanding their needs and delivering value.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | TechInnovate</title>
        <meta name="description" content="Learn about TechInnovate, our mission, values, and expert team dedicated to providing innovative IT solutions since 2015." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TechInnovate</h1>
            <p className="text-xl text-gray-200">
              We are a team of passionate IT professionals dedicated to helping businesses succeed through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From humble beginnings to a leading IT solutions provider."
                className="mb-6"
              />
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Founded in 2015 by David Miller, TechInnovate began with a simple mission: to help businesses leverage technology effectively to achieve their goals. With a small team of dedicated IT professionals, we started by offering basic IT support services to local businesses in San Francisco.
                </p>
                <p>
                  As our reputation for excellence grew, so did our team and service offerings. We expanded into cloud solutions, cybersecurity, and custom software development to address the evolving needs of our clients. By 2018, we had opened offices in Los Angeles and Seattle, serving clients across the West Coast.
                </p>
                <p>
                  Today, TechInnovate is recognized as a leading provider of comprehensive IT solutions with clients ranging from startups to Fortune 500 companies across the United States. Despite our growth, we maintain the same client-focused approach and commitment to excellence that defined us from day one.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="TechInnovate team"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-64 h-64 bg-accent-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="mr-4 text-accent-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <Team />
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default About;