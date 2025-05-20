
import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-spigle-600" />,
      title: "Phone",
      content: ["+1 (234) 567-890", "+1 (234) 567-891"],
      action: "tel:+12345678901"
    },
    {
      icon: <Mail className="h-6 w-6 text-spigle-600" />,
      title: "Email",
      content: ["hello@spigle.com", "support@spigle.com"],
      action: "mailto:hello@spigle.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-spigle-600" />,
      title: "Address",
      content: ["123 Innovation Drive", "Tech Valley, CA 94123"],
      action: "https://maps.google.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-spigle-600" />,
      title: "Working Hours",
      content: ["Monday - Friday: 9am - 6pm", "Weekend: By appointment"],
      action: ""
    }
  ];
  
  const socialLinks = [
    { icon: <Linkedin size={24} />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <Twitter size={24} />, name: "Twitter", url: "https://twitter.com" },
    { icon: <Instagram size={24} />, name: "Instagram", url: "https://instagram.com" },
    { icon: <Facebook size={24} />, name: "Facebook", url: "https://facebook.com" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Have a question or want to work together? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-spigle-100 p-3 mr-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                </div>
                
                <div className="space-y-1">
                  {info.content.map((item, i) => (
                    <p key={i} className="text-gray-600">{item}</p>
                  ))}
                </div>
                
                {info.action && (
                  <a 
                    href={info.action}
                    className="text-spigle-600 font-medium mt-4 inline-block hover:text-spigle-700"
                    target={info.action.startsWith('http') ? "_blank" : undefined}
                    rel={info.action.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    Connect with us
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and we'll get back to you within 24 hours. We're excited to learn about your project and how we can help you achieve your goals.
              </p>
              
              <ContactForm />
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:text-spigle-600 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                We're located in the heart of Tech Valley, easily accessible by public transportation. Feel free to stop by—we always have coffee ready!
              </p>
              
              <div className="h-[450px] rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-122.41941549999999!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1621512767749!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Spigle office location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">Common Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">What's your typical response time?</h3>
                <p className="text-gray-600">
                  We pride ourselves on quick communication. You can expect a response to your inquiry within 24 business hours, and often much sooner.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Do you work with international clients?</h3>
                <p className="text-gray-600">
                  Absolutely! We have clients across the globe and are experienced in collaborating across time zones. We use a variety of tools to ensure smooth communication regardless of location.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">What information should I prepare for our first call?</h3>
                <p className="text-gray-600">
                  It's helpful to have a general idea of your project goals, timeline, and budget range. Don't worry if you don't have all the details—our discovery process will help clarify what you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
