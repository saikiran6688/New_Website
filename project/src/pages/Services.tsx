import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Code, Database, Cloud, BarChart, Laptop, LayoutGrid } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import CTA from '../components/home/CTA';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="text-accent-600 mb-4 bg-accent-50 w-16 h-16 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-primary-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-600 mr-2">•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button to="/contact" variant="outline">
        Learn More
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      icon: <Server size={32} />,
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation aligned with your business goals.',
      features: [
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'IT infrastructure assessment',
      ],
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: [
        'Security assessments and audits',
        'Vulnerability management',
        'Security monitoring and response',
        'Employee security training',
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Seamless migration and management of your infrastructure in the cloud.',
      features: [
        'Cloud readiness assessment',
        'Migration planning and execution',
        'Multi-cloud architecture design',
        'Cloud optimization and management',
      ],
    },
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Custom software solutions designed to address your specific business needs.',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'Mobile app development',
        'API development and integration',
      ],
    },
    {
      icon: <Database size={32} />,
      title: 'Data Management',
      description: 'Effective strategies for managing, protecting, and leveraging your data assets.',
      features: [
        'Database design and optimization',
        'Data migration and integration',
        'Data backup and recovery',
        'Data governance implementation',
      ],
    },
    {
      icon: <BarChart size={32} />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business intelligence implementation',
        'Predictive analytics solutions',
        'Data visualization dashboards',
        'Big data processing pipelines',
      ],
    },
    {
      icon: <Laptop size={32} />,
      title: 'Managed IT Services',
      description: 'Proactive monitoring and management of your IT infrastructure.',
      features: [
        '24/7 infrastructure monitoring',
        'Help desk support',
        'Patch management and updates',
        'IT asset management',
      ],
    },
    {
      icon: <LayoutGrid size={32} />,
      title: 'IT Infrastructure',
      description: 'Design, implementation, and optimization of your IT infrastructure.',
      features: [
        'Network design and implementation',
        'Server configuration and management',
        'Storage solutions',
        'Virtualization services',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | TechInnovate</title>
        <meta name="description" content="Explore our comprehensive range of IT services including consulting, cybersecurity, cloud solutions, software development, and data analytics." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive IT solutions designed to help your business thrive in the digital era.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What We Offer"
            subtitle="We provide a wide range of IT services to help your business leverage technology effectively."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Approach"
            subtitle="We follow a proven methodology to ensure successful project delivery."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discovery',
                description: 'We begin by understanding your business objectives, challenges, and requirements.',
              },
              {
                number: '02',
                title: 'Strategy',
                description: 'We develop a tailored strategy and roadmap aligned with your goals and budget.',
              },
              {
                number: '03',
                title: 'Implementation',
                description: 'Our experts execute the plan with precision, regular updates, and minimal disruption.',
              },
              {
                number: '04',
                title: 'Support',
                description: 'We provide ongoing support and optimization to ensure long-term success.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
                <div className="text-4xl font-bold text-accent-200 absolute -top-4 -left-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-primary-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Industries We Serve"
                subtitle="We have experience across diverse industries, each with unique technology needs."
                className="mb-6"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Healthcare',
                  'Financial Services',
                  'Manufacturing',
                  'Retail',
                  'Professional Services',
                  'Education',
                  'Non-Profit',
                  'Technology',
                ].map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-accent-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mb-8">
                Regardless of your industry, we have the expertise to understand your specific challenges and deliver solutions that drive results.
              </p>
              
              <Button to="/contact">
                Discuss Your Project
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Industry solutions"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-accent-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Services;