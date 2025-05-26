import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Code, Database, Cloud, BarChart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <Link to="/services" className="group">
      <div className="bg-white h-full p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-accent-100 group-hover:translate-y-[-5px]">
        <div className="text-accent-600 mb-4 bg-accent-50 w-12 h-12 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-primary-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation to align with your business goals.',
      icon: <Server size={24} />,
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and proactive monitoring.',
      icon: <Shield size={24} />,
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions designed to address your specific business needs.',
      icon: <Code size={24} />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Seamless migration and management of your infrastructure in the cloud.',
      icon: <Cloud size={24} />,
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics solutions.',
      icon: <BarChart size={24} />,
    },
    {
      title: 'Database Management',
      description: 'Optimize your databases for performance, security, and reliability.',
      icon: <Database size={24} />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="We offer a comprehensive range of IT services to help your business thrive in the digital era."
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;