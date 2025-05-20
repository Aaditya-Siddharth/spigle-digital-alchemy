
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import ServiceDetail from './ServiceDetail';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFound from './NotFound';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
