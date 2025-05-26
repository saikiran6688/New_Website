import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  imgSrc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  company,
  rating,
  imgSrc,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <img
          src={imgSrc}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-semibold text-primary-900">{author}</p>
          <p className="text-sm text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote:
        "TechInnovate transformed our IT infrastructure and significantly improved our operational efficiency. Their team was professional, knowledgeable, and responsive throughout the entire process.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "Global Retail Inc.",
      rating: 5,
      imgSrc: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "Working with TechInnovate on our cloud migration project was a game-changer for our business. They delivered on time and within budget, with exceptional attention to detail.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "InnovateTech",
      rating: 5,
      imgSrc: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      quote:
        "The cybersecurity solutions implemented by TechInnovate have given us peace of mind. Their ongoing support and proactive approach to security challenges is invaluable to our organization.",
      author: "Jennifer Lopez",
      role: "CEO",
      company: "SecureFinance Ltd.",
      rating: 4,
      imgSrc: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from some of our satisfied clients."
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              imgSrc={testimonial.imgSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;