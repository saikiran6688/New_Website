import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | TechInnovate</title>
        <meta name="description" content="Get in touch with TechInnovate for innovative IT solutions. Contact our team for a consultation about your technology needs." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Ready to transform your business with technology? Get in touch with our team of experts.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="We'd love to hear from you. Contact us using the form or reach out directly."
                className="mb-8"
              />
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="bg-accent-100 p-3 rounded-lg mr-4">
                    <Phone className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+14155551234" className="hover:text-accent-600 transition-colors">
                        (415) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 p-3 rounded-lg mr-4">
                    <Mail className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@techinnovate.com" className="hover:text-accent-600 transition-colors">
                        info@techinnovate.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Location</h3>
                    <p className="text-gray-600">
                      123 Technology Drive, Suite 400<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 p-3 rounded-lg mr-4">
                    <Clock className="text-accent-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.11864369372!2d-122.43717135199355!3d37.77516352177284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1652449876542!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TechInnovate office location"
                ></iframe>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
            centered
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What types of businesses do you work with?',
                answer: 'We work with businesses of all sizes across various industries, including healthcare, finance, manufacturing, retail, professional services, education, and technology.',
              },
              {
                question: 'How do you charge for your services?',
                answer: 'Our pricing structure varies based on the service and project scope. We offer project-based pricing, retainer agreements, and hourly rates. We\'ll discuss the most appropriate option during our initial consultation.',
              },
              {
                question: 'Do you offer ongoing support after project completion?',
                answer: 'Yes, we offer various support and maintenance packages to ensure your technology continues to perform optimally. Our team can provide regular updates, monitoring, and technical support as needed.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity and scope. A small website might take a few weeks, while a comprehensive digital transformation initiative could span several months. We\'ll provide a detailed timeline during the planning phase.',
              },
              {
                question: 'Can you work with our existing IT team?',
                answer: 'Absolutely. We often collaborate with in-house IT teams, providing specialized expertise or additional resources as needed. We can adapt our approach to complement your existing capabilities.',
              },
              {
                question: 'How do you ensure the security of our data?',
                answer: 'Security is our priority. We implement industry best practices, including encryption, secure development methodologies, regular security audits, and compliance with relevant regulations and standards.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;