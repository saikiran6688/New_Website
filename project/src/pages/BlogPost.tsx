import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import Button from '../components/ui/Button';
import { blogPosts, BlogPost as BlogPostType } from '../data/blogData';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Button to="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <>
      <Helmet>
        <title>{post.title} | TechInnovate Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="pt-32">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </button>
        </div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8">
              <div className="flex items-center mr-6 mb-2">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src={post.imgSrc}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center">
                <Tag size={18} className="text-gray-500 mr-2" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8">
                  Related Articles
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                        <div className="overflow-hidden">
                          <img
                            src={relatedPost.imgSrc}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full mb-2">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPost;