import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogData';
import CTA from '../components/home/CTA';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      <Helmet>
        <title>Blog | TechInnovate</title>
        <meta name="description" content="Stay updated with the latest IT trends, insights, and best practices through our blog. Explore articles on cloud computing, cybersecurity, digital transformation, and more." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-gray-200">
              Insights, trends, and expert perspectives on IT and digital transformation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionHeading
              title="Latest Articles"
              subtitle="Stay up-to-date with the latest technology trends and insights."
            />
            
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 w-full sm:w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  imgSrc={post.imgSrc}
                  featured={index === 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Subscribe to Our Newsletter"
              subtitle="Stay updated with our latest articles, insights, and technology news."
              centered
              className="mb-8"
            />
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-600 text-white font-medium rounded-md hover:bg-accent-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Blog;