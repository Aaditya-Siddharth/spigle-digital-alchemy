
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Palette, Megaphone, BarChart3, Truck, Users, Brain, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites and web applications that combine stunning design with powerful functionality.",
      icon: <Code size={32} className="text-spigle-600" />,
      features: [
        "Responsive Web Design",
        "E-Commerce Solutions",
        "Progressive Web Apps",
        "Custom Web Applications",
        "Content Management Systems"
      ]
    },
    {
      id: "app-development",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on any device.",
      icon: <Smartphone size={32} className="text-spigle-600" />,
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "App Strategy & Planning",
        "UI/UX Design",
        "Maintenance & Support"
      ]
    },
    {
      id: "branding",
      title: "Branding",
      description: "Strategic brand identity development that helps you stand out in today's competitive market.",
      icon: <Palette size={32} className="text-spigle-600" />,
      features: [
        "Brand Strategy",
        "Visual Identity Design",
        "Brand Messaging",
        "Brand Guidelines",
        "Rebranding Services"
      ]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & SEO",
      description: "Data-driven strategies that boost your visibility and drive qualified traffic to your business.",
      icon: <Megaphone size={32} className="text-spigle-600" />,
      features: [
        "Search Engine Optimization",
        "Content Marketing",
        "Social Media Management",
        "PPC Advertising",
        "Email Marketing"
      ]
    },
    {
      id: "business-analytics",
      title: "Business Analytics",
      description: "Transform your data into actionable insights that drive better business decisions.",
      icon: <BarChart3 size={32} className="text-spigle-600" />,
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence",
        "KPI Development",
        "Custom Reporting Solutions"
      ]
    },
    {
      id: "supply-chain",
      title: "Supply Chain Optimization",
      description: "Streamline operations and reduce costs with our expert supply chain solutions and procurement strategies.",
      icon: <Truck size={32} className="text-spigle-600" />,
      features: [
        "Supply Chain Analysis",
        "Process Optimization",
        "Inventory Management",
        "Logistics Consulting",
        "Procurement Strategy"
      ]
    },
    {
      id: "consulting",
      title: "Business & Technical Consulting",
      description: "Strategic guidance from industry experts to help your business reach its full potential.",
      icon: <Users size={32} className="text-spigle-600" />,
      features: [
        "Digital Transformation",
        "Technology Selection",
        "Business Process Optimization",
        "Growth Strategy",
        "Change Management"
      ]
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      description: "Cutting-edge AI solutions that automate processes and unlock new possibilities for your business.",
      icon: <Brain size={32} className="text-spigle-600" />,
      features: [
        "Machine Learning Solutions",
        "Process Automation",
        "Custom AI Development",
        "Chatbots & Virtual Assistants",
        "Predictive Modeling"
      ]
    }
  ];
  
  const agileApproach = [
    {
      title: "Discovery & Planning",
      description: "We begin by deeply understanding your business goals, target audience, and unique challenges to create a tailored strategy."
    },
    {
      title: "Iterative Development",
      description: "Our agile approach ensures you see progress early and often, with opportunities for feedback and refinement at every stage."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing throughout the development process ensures a flawless final product that meets the highest standards."
    },
    {
      title: "Deployment & Training",
      description: "We ensure smooth implementation and provide comprehensive training to empower your team for long-term success."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch. We provide continuous support and optimization to maximize your investment."
    }
  ];
  
  const faqs = [
    {
      question: "How do you determine which services are right for my business?",
      answer: "We start with a comprehensive consultation to understand your business goals, challenges, and vision. Based on this discovery, we recommend a tailored combination of services designed to deliver the specific outcomes you're seeking. Our approach is never one-size-fits-all—it's always customized to your unique situation."
    },
    {
      question: "Can you work with businesses of any size?",
      answer: "Absolutely! We have experience working with organizations of all sizes, from startups to Fortune 500 companies. We scale our approach to match your organization's size, needs, and budget while maintaining the same level of quality and attention to detail."
    },
    {
      question: "Do you offer packages or bundles of services?",
      answer: "Yes, we offer several strategic service bundles designed for common business needs, such as our Digital Transformation Package or Growth Accelerator Bundle. However, we're always flexible and can create a custom service package specifically tailored to your unique requirements."
    },
    {
      question: "How do you measure the success of your services?",
      answer: "Before beginning any project, we establish clear, measurable KPIs aligned with your business goals. Throughout our engagement, we track these metrics and provide transparent reporting on progress. Whether it's increased revenue, improved efficiency, or enhanced customer satisfaction, we focus on delivering measurable results."
    },
    {
      question: "Can I start with one service and add more later?",
      answer: "Definitely! Many of our clients begin with a focused engagement addressing their most pressing need, then expand our relationship as they see results. Our modular approach makes it easy to start small and scale up as your business grows or new needs emerge."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive digital solutions tailored to your unique business needs. From web development to supply chain optimization, we provide the expertise to help you thrive.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="p-8 md:p-12 md:w-2/3">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-serif font-semibold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-spigle-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild
                    className="bg-spigle-600 hover:bg-spigle-700 text-white"
                  >
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-gray-100 md:w-1/3">
                  <div className="h-full flex items-center justify-center p-8">
                    <img 
                      src={`https://via.placeholder.com/400x300?text=${service.title.replace(/\s+/g, '+')}`} 
                      alt={service.title}
                      className="max-h-full rounded-lg shadow-md" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Agile Approach</h2>
            <p className="text-gray-600">We follow a flexible, collaborative methodology that adapts to your needs while ensuring exceptional results.</p>
          </div>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            {agileApproach.map((step, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/2 lg:w-1/5 p-4"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-spigle-100 text-spigle-600 flex items-center justify-center font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ & Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FAQ 
                title="Services FAQ"
                subtitle="Find answers to common questions about our services."
                faqs={faqs}
              />
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

export default ServicesPage;
