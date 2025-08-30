import React, { useState } from 'react';
import { Code, Server, Smartphone, Globe, Database, Zap, Shield, Users, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'; 
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: 'fullstack',
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web solutions from concept to deployment',
      features: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'RESTful APIs', 'Authentication & Security', 'Performance Optimization'],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
    },
    {
      id: 'frontend',
      icon: Globe,
      title: 'Frontend Development',
      description: 'Beautiful, responsive, and interactive user interfaces',
      features: ['Modern React Hooks', 'Next.js 13+ Features', 'Tailwind CSS & Styled Components', 'TypeScript', 'Responsive Design', 'Accessibility'],
      color: 'from-green-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-blue-50'
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side applications and microservices',
      features: ['Node.js & Express', 'NestJS Framework', 'Django & Python', 'Database Design', 'API Development', 'Cloud Deployment'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform and native mobile applications',
      features: ['React Native', 'Flutter', 'iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50'
    }
  ];

  const stats = [
    { icon: Users, value: 20, label: 'Happy Clients', suffix: '+' },
    { icon: Star, value: 4.8, label: 'Client Rating', suffix: '/5', decimals: 1 },
    { icon: TrendingUp, value: 94, label: 'Success Rate', suffix: '%' },
    { icon: Zap, value: 24, label: 'Support', suffix: '/7' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-4 py-2 rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What We Offer
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our <span className="text-[#5128a0]">Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We transform your ideas into powerful digital solutions. From concept to deployment, 
            we deliver cutting-edge applications that drive business growth and user engagement.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section - Innovative Design */}
      <motion.div 
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated background elements using Framer Motion */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ 
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ 
              x: [0, -30, 20, 0],
              y: [0, 50, -20, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{ 
              x: [0, 40, -30, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{ 
              duration: 9, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

                  <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Codanity?</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Our track record speaks for itself. Here&apos;s what makes us the right choice for your project.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Floating stat container */}
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl"
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                      <stat.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    {/* Orbiting dots */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-400 rounded-full"
                      animate={{ 
                        rotate: -360,
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Animated number */}
                  <motion.div 
                    className="text-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-4xl font-bold text-white mb-2">
                      <CountUp
                        end={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals || 0}
                        duration={2.5}
                        delay={0.5}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                      />
                    </div>
                    <div className="text-purple-200 font-medium text-lg">{stat.label}</div>
                  </motion.div>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl p-3`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#5128a0] transition-colors" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                >
                  <Link href="/contacts">
                    <button className="w-full bg-gradient-to-r from-[#5128a0] to-[#6b46c1] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#3e217e] hover:to-[#553c9a] transition-all duration-300 transform hover:scale-105">
                      Get Started
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="bg-[#5128a0] py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Build Something Amazing?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let&apos;s discuss your project and turn your vision into reality. 
            Our team is ready to help you create the next big thing.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-purple-200 text-sm mb-2">Get in touch</div>
              <a href="mailto:codanityco@gmail.com" className="text-white hover:text-purple-200 transition-colors">
                codanityco@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-purple-200 text-sm mb-2">Visit our website</div>
              <a href="https://codanity.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-200 transition-colors">
                codanity.vercel.app
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contacts">
              <motion.button
                className="bg-white text-[#5128a0] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-[#5128a0] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default ServicesPage;
