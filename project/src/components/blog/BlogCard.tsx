import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imgSrc: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  author,
  category,
  imgSrc,
  featured = false,
}) => {
  return (
    <article className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/blog/${id}`} className="block overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
            {category}
          </span>
        </div>
        
        <Link to={`/blog/${id}`} className="block mb-2">
          <h3 className="text-xl font-bold text-primary-900 hover:text-accent-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mt-auto">
          <div className="flex items-center mr-4">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;