
import React from 'react';
import { Users, Heart, CheckCircle, Award, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: 2015,
      title: "The Beginning",
      description: "Spigle was founded with a vision to bridge the gap between complex technology and business success."
    },
    {
      year: 2017,
      title: "Expanding Horizons",
      description: "We expanded our services beyond web development to include comprehensive digital solutions."
    },
    {
      year: 2019,
      title: "Innovation at Scale",
      description: "Introduced AI and automation services to help businesses leverage cutting-edge technology."
    },
    {
      year: 2021,
      title: "Global Reach",
      description: "Expanded our client base to serve businesses across 15+ countries with localized solutions."
    },
    {
      year: 2024,
      title: "Future Forward",
      description: "Continuing to innovate and transform businesses through technology and strategic partnerships."
    }
  ];
  
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With 15+ years in tech leadership, Sarah brings strategic vision and innovation to every client engagement.",
      image: "https://via.placeholder.com/400x400?text=Sarah+J"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael leads our technical teams with expertise in enterprise architecture and emerging technologies.",
      image: "https://via.placeholder.com/400x400?text=Michael+C"
    },
    {
      name: "Priya Patel",
      position: "Creative Director",
      bio: "Award-winning designer who transforms complex challenges into beautiful, intuitive digital experiences.",
      image: "https://via.placeholder.com/400x400?text=Priya+P"
    },
    {
      name: "David Rodriguez",
      position: "Director of Strategy",
      bio: "Former management consultant who ensures our solutions drive meaningful business outcomes.",
      image: "https://via.placeholder.com/400x400?text=David+R"
    }
  ];
  
  const values = [
    {
      title: "Excellence Without Compromise",
      description: "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
      icon: <Award className="w-10 h-10 text-spigle-600" />
    },
    {
      title: "Client-Centered Innovation",
      description: "We innovate with purpose, focusing on solutions that create real value for our clients and their customers.",
      icon: <Users className="w-10 h-10 text-spigle-600" />
    },
    {
      title: "Genuine Partnership",
      description: "We view ourselves as an extension of your team, invested in your long-term success beyond individual projects.",
      icon: <CheckCircle className="w-10 h-10 text-spigle-600" />
    },
    {
      title: "Community Impact",
      description: "We believe in using our skills to create positive change, both for our clients and the wider community.",
      icon: <Heart className="w-10 h-10 text-spigle-600" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're a team of passionate innovators, strategists, and creators committed to transforming how businesses succeed in the digital world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-spigle-600">Our Mission</h2>
              <p className="text-gray-700">
                To democratize digital excellence by making powerful technology solutions accessible, understandable, and valuable for businesses of all sizes. We're committed to bridging the gap between complex technology and measurable business success.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-spigle-600">Our Vision</h2>
              <p className="text-gray-700">
                To become the most trusted partner for businesses navigating digital transformation, known for our technical excellence, strategic insight, and genuine commitment to client success. We envision a world where technology empowers rather than complicates.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Journey</h2>
            <p className="text-gray-600">
              From a small team with big dreams to an industry-leading digital solutions provider, our story is one of continuous growth and innovation.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-spigle-100"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center relative`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-spigle-500 z-10 flex items-center justify-center text-white font-bold">
                    {milestone.year.toString().substring(2)}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pb-8 md:pb-0 md:px-8">
                    <div className={`bg-white rounded-xl p-6 shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-spigle-600 font-semibold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do, from how we build our products to how we interact with clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              Talented professionals who bring diverse backgrounds and shared passion to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-spigle-600 text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-6">
              Behind our leadership team is a talented group of developers, designers, strategists, and specialists working together to bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Community Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Giving Back to Our Community</h2>
              <p className="text-gray-700 mb-6">
                We believe technology should be a force for good. That's why we dedicate time, resources, and expertise to initiatives that create positive social impact:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-spigle-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-semibold">Digital Literacy Programs:</span> Teaching essential tech skills to underserved communities.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-spigle-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-semibold">Pro Bono Projects:</span> Developing digital solutions for nonprofits making a difference.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-spigle-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-semibold">Environmental Initiatives:</span> Reducing our carbon footprint and helping clients do the same.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-spigle-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <span className="font-semibold">Mentorship:</span> Guiding the next generation of tech talent through internships and educational partnerships.
                  </span>
                </li>
              </ul>
              
              <p className="text-gray-700">
                When you work with Spigle, you're not just getting a digital partner—you're supporting our mission to make technology accessible and beneficial for everyone.
              </p>
            </div>
            
            <div>
              <img 
                src="https://via.placeholder.com/600x500?text=Community+Impact" 
                alt="Community Impact"
                className="rounded-xl shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-spigle-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-spigle-100 mb-8 max-w-2xl mx-auto">
            Let's turn your digital challenges into opportunities for growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-spigle-600 hover:bg-gray-100 hover:text-spigle-700 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
