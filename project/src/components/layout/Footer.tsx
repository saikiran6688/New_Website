import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-accent-500 mr-1">Tech</span>Innovate
            </h3>
            <p className="text-gray-300 mb-4">
              Providing innovative IT solutions to businesses since 2015.
              We help companies transform through technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'IT Consulting',
                'Cloud Solutions',
                'Cybersecurity',
                'Software Development',
                'Data Analytics',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-accent-500 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-accent-500 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Technology Drive, Suite 400<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-500 flex-shrink-0" />
                <a 
                  href="tel:+14155551234" 
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  (415) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-500 flex-shrink-0" />
                <a 
                  href="mailto:info@techinnovate.com" 
                  className="text-gray-300 hover:text-accent-500 transition-colors"
                >
                  info@techinnovate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} TechInnovate. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-400 text-sm hover:text-accent-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-400 text-sm hover:text-accent-500 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;