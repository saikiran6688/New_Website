import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary-900 flex items-center"
          >
            <span className="text-accent-600 mr-1">Tech</span>Innovate
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-accent-600 ${
                    location.pathname === item.path
                      ? 'text-accent-600'
                      : scrolled ? 'text-gray-800' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <ul className="py-4 px-6 space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block text-sm font-medium transition-colors hover:text-accent-600 ${
                      location.pathname === item.path
                        ? 'text-accent-600'
                        : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;