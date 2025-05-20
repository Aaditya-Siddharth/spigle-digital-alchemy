
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteForm from './QuoteForm';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Learn', path: 'https://blog.spigle.com', external: true },
    { name: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-spigle-600 font-medium' : 'text-gray-700 hover:text-spigle-500 transition-colors';
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-lg'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-gray-900">Spigle</span>
              <span className="ml-1 text-spigle-600 text-2xl">.</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                {navItems.map((item) => (
                  item.external ? (
                    <a 
                      key={item.name} 
                      href={item.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-spigle-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      className={isActive(item.path)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>
              <Button 
                onClick={() => setShowQuoteForm(true)}
                className="bg-spigle-600 hover:bg-spigle-700 text-white"
              >
                Get a Quote
              </Button>
            </div>
            
            <button 
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'max-h-[400px] py-4' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              item.external ? (
                <a 
                  key={item.name} 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-spigle-500 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`${isActive(item.path)} py-2`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button 
              onClick={() => {
                setIsOpen(false);
                setShowQuoteForm(true);
              }}
              className="bg-spigle-600 hover:bg-spigle-700 text-white w-full"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </header>
      
      {showQuoteForm && (
        <QuoteForm open={showQuoteForm} onClose={() => setShowQuoteForm(false)} />
      )}
    </>
  );
};

export default Navbar;
