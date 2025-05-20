import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import { toast } from 'sonner';

interface ServiceInfo {
  id: string;
  title: string;
  subtitle: string;
  headerImage: string;
  description: string;
  serviceTypes: string[];
  approach: {
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // This would typically come from an API or CMS
  const servicesData: Record<string, ServiceInfo> = {
    "web-development": {
      id: "web-development",
      title: "Web Application Development",
      subtitle: "Transforming digital landscapes, one pixel at a time. We craft web experiences that don't just look amazing—they drive your business forward with precision and passion.",
      headerImage: "https://via.placeholder.com/1200x600?text=Web+Development",
      description: "Our expert web development team creates powerful, scalable, and secure websites and applications that deliver exceptional user experiences while achieving your business goals.",
      serviceTypes: [
        "Landing Pages",
        "E-Commerce Applications",
        "Booking & Reservation Platforms",
        "Business & Corporate Websites",
        "Portfolio & Showcase Sites",
        "Educational & Learning Platforms",
        "Custom Web Applications"
      ],
      approach: [
        {
          title: "Discovery & Strategy",
          description: "We begin by understanding your business goals, target audience, and technical requirements to create a comprehensive development strategy."
        },
        {
          title: "Design & Prototyping",
          description: "Our designers create wireframes and interactive prototypes that visualize the user experience before any coding begins."
        },
        {
          title: "Development & Testing",
          description: "Using modern frameworks and best practices, we build your web application with clean, maintainable code and rigorous testing."
        },
        {
          title: "Launch & Optimization",
          description: "After a successful deployment, we monitor performance and make continuous improvements to ensure optimal results."
        }
      ],
      features: [
        {
          title: "Responsive & Adaptive Design",
          description: "Websites that look and perform beautifully across all devices and screen sizes.",
          icon: "device-desktop"
        },
        {
          title: "Performance Optimization",
          description: "Lightning-fast load times and smooth interactions that keep users engaged.",
          icon: "zap"
        },
        {
          title: "User-Centric Experience",
          description: "Intuitive interfaces that guide users effortlessly toward their goals.",
          icon: "users"
        }
      ],
      benefits: [
        {
          title: "Customized Solutions",
          description: "Tailored web solutions that precisely match your unique business requirements and vision.",
          icon: "settings"
        },
        {
          title: "Expert Team",
          description: "Skilled professionals with deep expertise in cutting-edge web technologies and design.",
          icon: "code"
        },
        {
          title: "Client First Approach",
          description: "Your goals and satisfaction are our top priority, with transparent communication throughout.",
          icon: "heart-handshake"
        },
        {
          title: "Fair and Affordable Pricing",
          description: "Competitive pricing models that provide exceptional value without compromising quality.",
          icon: "piggy-bank"
        },
        {
          title: "Strategic Partnership",
          description: "We don't just deliver projects; we build long-term relationships that drive your continued digital success.",
          icon: "handshake"
        }
      ],
      faqs: [
        {
          question: "How long does it take to develop a website?",
          answer: "The timeline varies based on complexity. Simple websites typically take 4-6 weeks, while complex web applications may require 3-6 months. We provide detailed timelines during our discovery phase and keep you updated throughout the development process."
        },
        {
          question: "What technologies do you use for web development?",
          answer: "We're technology-agnostic and select the best tools for your specific needs. Our expertise includes React, Angular, Vue.js, Node.js, PHP, Python, and Ruby on Rails. We'll recommend the most appropriate technology stack based on your requirements, budget, and long-term goals."
        },
        {
          question: "Do you provide website maintenance after launch?",
          answer: "Absolutely! We offer various maintenance packages to keep your website secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, performance optimization, and content management assistance."
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Yes, we specialize in website redesigns and transformations. We begin with a comprehensive audit of your current site, identify opportunities for improvement, and develop a strategy to enhance both the visual appeal and functionality while preserving your brand identity and SEO equity."
        },
        {
          question: "How do you ensure website security?",
          answer: "Security is built into every aspect of our development process. We implement industry best practices including secure coding standards, regular security updates, SSL implementation, data encryption, and compliance with relevant regulations like GDPR. We also offer ongoing security monitoring and maintenance."
        }
      ]
    },
    // Other services would follow the same pattern
    "app-development": {
      id: "app-development",
      title: "Mobile App Development",
      subtitle: "Creating powerful mobile experiences that connect with users and drive business growth. Our apps don't just function—they delight.",
      headerImage: "https://via.placeholder.com/1200x600?text=App+Development",
      description: "From concept to launch, we develop native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      serviceTypes: [
        "iOS Applications",
        "Android Applications",
        "Cross-Platform Apps",
        "Enterprise Mobile Solutions",
        "Mobile E-Commerce",
        "Social Media Apps",
        "AR/VR Applications"
      ],
      approach: [
        {
          title: "Strategy & Planning",
          description: "We define your app's goals, target audience, and key features to create a comprehensive development roadmap."
        },
        {
          title: "UI/UX Design",
          description: "Our designers create intuitive interfaces and engaging user experiences tailored to mobile users."
        },
        {
          title: "Development & Integration",
          description: "We build your app using the most appropriate framework and integrate essential services and APIs."
        },
        {
          title: "Testing & Deployment",
          description: "Rigorous testing across devices ensures your app performs flawlessly before submission to app stores."
        }
      ],
      features: [
        {
          title: "Native Performance",
          description: "Apps that leverage platform-specific capabilities for optimal speed and responsiveness.",
          icon: "zap"
        },
        {
          title: "Seamless Integration",
          description: "Connect with existing systems and third-party services for enhanced functionality.",
          icon: "plug"
        },
        {
          title: "Offline Capabilities",
          description: "Applications that continue to function even when network connectivity is limited.",
          icon: "wifi-off"
        }
      ],
      benefits: [
        {
          title: "User-Centered Design",
          description: "Apps designed with your specific users in mind, enhancing engagement and satisfaction.",
          icon: "users"
        },
        {
          title: "Technical Excellence",
          description: "Clean, efficient code that ensures stability and enables future updates and enhancements.",
          icon: "code"
        },
        {
          title: "Cross-Platform Expertise",
          description: "Solutions that work beautifully across iOS, Android, and other platforms when needed.",
          icon: "smartphone"
        },
        {
          title: "Ongoing Support",
          description: "Continuous maintenance and updates to keep your app secure and compatible with new OS versions.",
          icon: "life-buoy"
        },
        {
          title: "Analytics Integration",
          description: "Built-in tools to track user behavior and app performance for data-driven improvements.",
          icon: "bar-chart"
        }
      ],
      faqs: [
        {
          question: "Should I build a native app or a cross-platform app?",
          answer: "This depends on your specific needs. Native apps offer the best performance and access to all platform features but require separate development for iOS and Android. Cross-platform solutions like React Native or Flutter offer cost efficiency and faster development with good performance for most use cases. We'll help you determine the best approach based on your requirements, budget, and timeline."
        },
        {
          question: "How much does it cost to develop a mobile app?",
          answer: "App development costs vary widely based on complexity, features, platforms, and design requirements. Basic apps might start around $25,000-$50,000, while complex applications with custom functionality can range from $75,000-$250,000+. We provide detailed estimates after understanding your specific requirements during our discovery process."
        },
        {
          question: "How long does it take to develop a mobile app?",
          answer: "Typically, mobile app development takes 3-9 months from concept to launch, depending on complexity. Simple apps may require 3-4 months, while feature-rich applications might take 6-9 months or more. We break the process into sprints with regular deliverables so you can see progress throughout development."
        },
        {
          question: "Do you handle app store submission?",
          answer: "Yes, we manage the entire submission process for both Apple App Store and Google Play Store. This includes preparing all required assets, optimizing listings for discoverability, ensuring compliance with platform guidelines, and addressing any feedback from the review process."
        },
        {
          question: "What happens after my app is launched?",
          answer: "Post-launch support is crucial for app success. We offer maintenance packages that include bug fixes, compatibility updates for new OS versions, performance monitoring, and feature enhancements based on user feedback and analytics. We'll work with you to create the right support plan for your needs."
        }
      ]
    },
    // Additional services would be added here
  };
  
  // Default service data for services not yet fully detailed
  const defaultService: ServiceInfo = {
    id: serviceId || "",
    title: "Our Service",
    subtitle: "Professional solutions tailored to your unique business requirements.",
    headerImage: "https://via.placeholder.com/1200x600?text=Professional+Services",
    description: "We provide comprehensive services designed to help your business succeed in today's competitive market.",
    serviceTypes: [
      "Custom Solutions",
      "Professional Consulting",
      "Expert Implementation",
      "Ongoing Support"
    ],
    approach: [
      {
        title: "Discovery & Analysis",
        description: "We begin by understanding your specific needs and challenges to create a tailored strategy."
      },
      {
        title: "Strategic Planning",
        description: "Our experts develop a comprehensive plan that aligns with your business objectives."
      },
      {
        title: "Implementation",
        description: "We execute the plan with precision and attention to detail, ensuring quality at every step."
      },
      {
        title: "Review & Optimization",
        description: "Continuous evaluation and refinement ensure optimal results and long-term success."
      }
    ],
    features: [
      {
        title: "Customized Approach",
        description: "Solutions tailored specifically to your unique business requirements.",
        icon: "settings"
      },
      {
        title: "Expert Team",
        description: "Access to specialists with deep industry and technical knowledge.",
        icon: "users"
      },
      {
        title: "Data-Driven Methods",
        description: "Strategies and decisions based on solid analysis and proven methodologies.",
        icon: "bar-chart"
      }
    ],
    benefits: [
      {
        title: "Tailored Solutions",
        description: "Custom approaches that precisely match your unique business requirements.",
        icon: "settings"
      },
      {
        title: "Expert Guidance",
        description: "Access to experienced professionals with specialized knowledge in your field.",
        icon: "users"
      },
      {
        title: "Transparent Process",
        description: "Clear communication and visibility throughout our engagement.",
        icon: "message-square"
      },
      {
        title: "Measurable Results",
        description: "Defined metrics and KPIs to track progress and demonstrate value.",
        icon: "bar-chart"
      },
      {
        title: "Long-term Partnership",
        description: "Ongoing support to ensure sustainable success beyond the initial engagement.",
        icon: "handshake"
      }
    ],
    faqs: [
      {
        question: "How do you tailor your services to my specific needs?",
        answer: "We begin with a comprehensive discovery process to understand your unique challenges, goals, and requirements. Based on this assessment, we develop a customized approach that leverages our expertise while addressing your specific situation. Our solutions are never one-size-fits-all."
      },
      {
        question: "What makes your approach different from other providers?",
        answer: "Our difference lies in our holistic perspective, combining technical excellence with strategic business insight. We focus on outcomes rather than outputs, ensuring that our work directly contributes to your business objectives. Additionally, we emphasize partnership and knowledge transfer, empowering your team throughout the process."
      },
      {
        question: "How do you measure success?",
        answer: "Before beginning any engagement, we work with you to define clear, measurable success criteria aligned with your business goals. We track these metrics throughout our work and provide regular reports on progress. Our ultimate measure of success is the tangible value and positive impact we create for your organization."
      },
      {
        question: "What kind of support do you provide after completion?",
        answer: "Our relationship doesn't end when a project is delivered. We offer various support options including regular check-ins, maintenance services, ongoing optimization, and staff training. We're committed to your long-term success and will work with you to determine the right level of ongoing support for your needs."
      },
      {
        question: "How do you stay current with industry trends and best practices?",
        answer: "Continuous learning is core to our culture. Our team regularly participates in professional development, industry conferences, and specialized training. We maintain active networks with industry leaders, research partners, and technology providers to ensure we're always bringing the latest insights and approaches to our clients."
      }
    ]
  };
  
  // Get the service data or use the default if not found
  const service = servicesData[serviceId || ""] || {
    ...defaultService,
    id: serviceId || ""
  };
  
  // Handle service not found
  if (!serviceId || !servicesData[serviceId]) {
    // In a real app, you might redirect to a 404 page
    console.error(`Service not found: ${serviceId}`);
    
    // Show toast notification
    React.useEffect(() => {
      toast.error("Service details not found. Showing generic information.");
    }, []);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src={service.headerImage} 
                alt={service.title}
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
                Websites We Develop
              </h2>
              
              <p className="text-gray-700 mb-8">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.serviceTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-spigle-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Your Digital Success */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Your Digital Success, Our Obsession
            </h2>
            <p className="text-gray-600">
              We're not just developers; we're digital architects who understand that every line of code tells a story. Our web solutions are meticulously crafted to transform your unique vision into a powerful, scalable digital reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600">
              We follow a proven methodology that ensures quality, efficiency, and exceptional results for every project.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-spigle-100"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {service.approach.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center relative`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-spigle-500 z-10"></div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pb-8 md:pb-0 md:px-8">
                    <div className={`bg-white rounded-xl p-6 shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Spigle */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Why Choose Spigle?
            </h2>
            <p className="text-gray-600">
              We're not just service providers—we're partners committed to your long-term success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-spigle-100 text-spigle-600 mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Elevating Your Digital Potential */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-spigle-600 rounded-3xl text-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16">
                <h2 className="text-3xl font-serif font-semibold mb-6">Elevating Your Digital Potential</h2>
                <p className="mb-8 text-spigle-100">
                  At Spigle, we go beyond code. We create digital ecosystems that amplify your brand, engage your audience, and drive measurable business growth. Our holistic approach ensures your web presence is not just a website, but a powerful business asset.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strategy-Driven</h3>
                    <p className="text-spigle-100">Aligned with your business goals</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Informed</h3>
                    <p className="text-spigle-100">Insights that drive decision-making</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable</h3>
                    <p className="text-spigle-100">Solutions that grow with you</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
                    <p className="text-spigle-100">Continuous innovation and support</p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button 
                    asChild
                    className="bg-white text-spigle-600 hover:bg-gray-100 hover:text-spigle-700"
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <img 
                  src="https://via.placeholder.com/800x600?text=Digital+Potential" 
                  alt="Digital Potential"
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ & Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <FAQ faqs={service.faqs} />
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

export default ServiceDetail;
