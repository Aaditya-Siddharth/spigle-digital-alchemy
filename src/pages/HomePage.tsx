
import React from 'react';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, BarChart3, Truck, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ClientLogos from '@/components/ClientLogos';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

const HomePage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications that combine stunning design with powerful functionality.",
      icon: <Code size={24} />,
      link: "/services/web-development"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: <Smartphone size={24} />,
      link: "/services/app-development"
    },
    {
      title: "Branding",
      description: "Strategic brand identity development that helps you stand out in today's competitive market.",
      icon: <Palette size={24} />,
      link: "/services/branding"
    },
    {
      title: "Digital Marketing & SEO",
      description: "Data-driven strategies that boost your visibility and drive qualified traffic to your business.",
      icon: <Megaphone size={24} />,
      link: "/services/digital-marketing"
    },
    {
      title: "Business Analytics",
      description: "Transform your data into actionable insights that drive better business decisions.",
      icon: <BarChart3 size={24} />,
      link: "/services/business-analytics"
    },
    {
      title: "Supply Chain Optimization",
      description: "Streamline operations and reduce costs with our expert supply chain solutions.",
      icon: <Truck size={24} />,
      link: "/services/supply-chain"
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance from industry experts to help your business reach its full potential.",
      icon: <Users size={24} />,
      link: "/services/consulting"
    },
    {
      title: "AI & Automation",
      description: "Cutting-edge AI solutions that automate processes and unlock new possibilities.",
      icon: <Brain size={24} />,
      link: "/services/ai-automation"
    }
  ];
  
  const testimonials = [
    {
      content: "Spigle transformed our outdated website into a powerful lead generation machine. Their strategic approach and attention to detail exceeded our expectations at every turn.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      rating: 5
    },
    {
      content: "The team at Spigle doesn't just deliver projects—they deliver results. Their supply chain optimization strategy saved us over $2M in the first year alone.",
      author: "Michael Chen",
      position: "COO",
      company: "Global Logistics Partners",
      rating: 5
    },
    {
      content: "Working with Spigle was refreshingly different. They took the time to understand our unique challenges and created a custom solution that perfectly addressed our needs.",
      author: "Olivia Rodriguez",
      position: "CEO",
      company: "Innovate Startup",
      rating: 5
    }
  ];
  
  const faqs = [
    {
      question: "What makes Spigle different from other digital agencies?",
      answer: "Unlike traditional agencies that focus solely on deliverables, we prioritize business outcomes. We combine deep technical expertise with strategic business acumen to create solutions that directly impact your bottom line. Our cross-disciplinary approach means we can handle everything from digital product development to supply chain optimization under one roof."
    },
    {
      question: "How does your pricing model work?",
      answer: "We believe in transparent, value-based pricing. Depending on your needs, we offer fixed-price projects, retainer arrangements, or success-based pricing models. During our initial consultation, we'll discuss your goals, scope, and budget to find the perfect arrangement that aligns our success with yours."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We pride ourselves on accurate timeline estimates and transparent communication throughout the process. We'll provide a detailed timeline during our proposal phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We view every project as the beginning of a partnership, not the end. We offer various support and maintenance packages to ensure your solution continues to perform optimally. From routine updates to strategic enhancements, we're committed to your long-term success."
    },
    {
      question: "Can you work with our existing tech stack?",
      answer: "Yes! We're technology-agnostic and have experience working with a wide range of platforms and technologies. We can seamlessly integrate with your existing systems or recommend new solutions if they better serve your needs. Our team stays current with the latest technologies while maintaining expertise in established platforms."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Transform Your Business with Digital Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              At Spigle, we don't just build websites, apps, or strategies—we build dreams, one pixel and plan at a time.
            </p>
            <p className="text-lg md:text-xl text-spigle-300 italic mb-10">
              "As copilots of innovation, we're here to turbocharge your growth while making complex solutions look effortless (and a little fun too). Let's create brilliance together!"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-spigle-600 hover:bg-spigle-700 text-white px-8 py-6 text-lg"
              >
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <ClientLogos />
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What We Offer</h2>
            <p className="text-gray-600">Comprehensive digital solutions tailored to your unique business needs. From web development to AI implementation, we've got you covered.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-spigle-600 hover:bg-spigle-700 text-white"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Don't just take our word for it. Here's what some of our amazing clients have to say about working with Spigle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ & Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FAQ 
                title="Frequently Asked Questions"
                subtitle="Find quick answers to common questions about our services and process."
                faqs={faqs.slice(0, 3)}
              />
              <div className="mt-8 text-center lg:text-left">
                <Link to="/services" className="text-spigle-600 hover:text-spigle-700 font-medium inline-flex items-center">
                  View All FAQs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
