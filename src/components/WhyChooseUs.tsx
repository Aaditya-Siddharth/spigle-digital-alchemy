
import React from 'react';
import { CheckCircle, Clock, Users, LineChart, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Users className="w-10 h-10 text-spigle-600" />,
      title: "Expert Team",
      description: "Our professionals bring decades of combined experience across industries, technologies, and business domains to deliver exceptional results.",
      detail: "With specialized experts in UI/UX, full-stack development, data science, and business strategy, we combine deep technical knowledge with industry insights to deliver solutions that truly transform businesses."
    },
    {
      icon: <Clock className="w-10 h-10 text-spigle-600" />,
      title: "Results-Driven Timeline",
      description: "We don't just deliver on time—we optimize our timelines for maximum impact and efficiency, creating value at every stage.",
      detail: "Our agile methodology means you'll see progress weekly, not monthly. We break projects into strategic sprints, focusing on delivering value incrementally rather than making you wait for the final result."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-spigle-600" />,
      title: "Client Obsession",
      description: "Your success is our purpose. We prioritize your specific needs, goals, and vision throughout the development and support process.",
      detail: "We don't just listen—we immerse ourselves in your business. Our team becomes an extension of yours, aligning our success metrics with your business outcomes to ensure perfect alignment."
    },
    {
      icon: <LineChart className="w-10 h-10 text-spigle-600" />,
      title: "Measurable Success",
      description: "We define clear KPIs and metrics from day one and provide transparent reporting that ties our work to your business outcomes.",
      detail: "Our custom analytics dashboards show you exactly how our work impacts your key business metrics. We don't just create solutions—we prove their value with data you can trust."
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-spigle-600" />,
      title: "Lifetime Partnership",
      description: "We're not just providers; we're partners invested in your long-term success with support that extends beyond project completion.",
      detail: "Our relationship doesn't end at launch. We offer strategic support packages, quarterly business reviews, and proactive optimization to ensure your digital assets continue to evolve with your business."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 heading-gradient">Why Choose Spigle?</h2>
          <p className="text-gray-600">We don't just meet industry standards—we set them. Our approach combines technical excellence with business acumen to create solutions that truly transform.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <motion.div 
                  variants={item}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                >
                  <div className="mb-4 animate-float">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{reason.title} - In Depth</h4>
                  <p className="text-sm text-muted-foreground">{reason.detail}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
