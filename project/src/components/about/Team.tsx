import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imgSrc: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imgSrc,
  linkedin,
  twitter,
  email,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-1">{name}</h3>
        <p className="text-accent-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-800 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-800 transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-primary-800 transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const team = [
    {
      name: 'David Miller',
      role: 'CEO & Founder',
      bio: 'With over 20 years in the IT industry, David founded TechInnovate with a vision to help businesses leverage technology for growth.',
      imgSrc: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: '#',
      twitter: '#',
      email: 'david@techinnovate.com',
    },
    {
      name: 'Sarah Thompson',
      role: 'CTO',
      bio: 'Sarah leads our technical strategy and ensures our solutions leverage cutting-edge technology while maintaining reliability and security.',
      imgSrc: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@techinnovate.com',
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Michael brings his expertise in software architecture and development to create robust, scalable solutions for our clients.',
      imgSrc: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: '#',
      email: 'michael@techinnovate.com',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Specialist',
      bio: 'Emily ensures our clients\' systems and data are protected with state-of-the-art cybersecurity measures and best practices.',
      imgSrc: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      linkedin: '#',
      twitter: '#',
      email: 'emily@techinnovate.com',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our team of experts is passionate about technology and committed to your success."
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imgSrc={member.imgSrc}
              linkedin={member.linkedin}
              twitter={member.twitter}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;