
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold">Spigle</span>
              <span className="ml-1 text-spigle-500 text-2xl">.</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              We don't just build websites, apps, or strategies—we build dreams, one pixel and plan at a time.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-spigle-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-spigle-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-spigle-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/web-development" className="text-gray-400 hover:text-spigle-500 transition-colors">Web Development</Link>
              <Link to="/services/app-development" className="text-gray-400 hover:text-spigle-500 transition-colors">App Development</Link>
              <Link to="/services/branding" className="text-gray-400 hover:text-spigle-500 transition-colors">Branding</Link>
              <Link to="/services/digital-marketing" className="text-gray-400 hover:text-spigle-500 transition-colors">Digital Marketing & SEO</Link>
              <Link to="/services/business-analytics" className="text-gray-400 hover:text-spigle-500 transition-colors">Business Analytics</Link>
              <Link to="/services/supply-chain" className="text-gray-400 hover:text-spigle-500 transition-colors">Supply Chain Optimization</Link>
              <Link to="/services/consulting" className="text-gray-400 hover:text-spigle-500 transition-colors">Business Consulting</Link>
              <Link to="/services/ai-automation" className="text-gray-400 hover:text-spigle-500 transition-colors">AI & Automation</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-spigle-500 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-400 hover:text-spigle-500 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-400 hover:text-spigle-500 transition-colors">About Us</Link>
              <Link to="/contact" className="text-gray-400 hover:text-spigle-500 transition-colors">Contact</Link>
              <a href="https://blog.spigle.com" className="text-gray-400 hover:text-spigle-500 transition-colors" target="_blank" rel="noopener noreferrer">Learn</a>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-spigle-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-spigle-500 transition-colors">Terms of Service</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-spigle-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">123 Innovation Drive, Tech Valley, California 94123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-spigle-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-spigle-500 transition-colors">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-spigle-500" />
                <a href="mailto:hello@spigle.com" className="text-gray-400 hover:text-spigle-500 transition-colors">hello@spigle.com</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mb-12 rounded-lg overflow-hidden h-64">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-122.41941549999999!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1621512767749!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            title="Spigle office location"
          ></iframe>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Spigle. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">Designed with ❤️ for innovation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
