import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Target, Zap, Shield, Award, Globe, Code, Smartphone, Database, Rocket, Heart, Star } from 'lucide-react';
import CountUp from 'react-countup';

const AboutUsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'values', label: 'Our Values', icon: Heart },
    { id: 'culture', label: 'Our Culture', icon: Users },
    { id: 'tech', label: 'Technologies', icon: Code }
  ];

  const values = [
    { icon: Shield, title: 'Quality', description: 'We strive to deliver products of the highest standard' },
    { icon: Zap, title: 'Innovation', description: 'Continuously exploring new ideas and technologies' },
    { icon: Users, title: 'Collaboration', description: 'Teamwork and open communication define our culture' },
    { icon: Award, title: 'Excellence', description: 'Committed to exceeding expectations in everything we do' }
  ];

  const technologies = [
    { icon: Code, name: 'Next.js', category: 'Frontend', description: 'React framework for production' },
    { icon: Database, name: 'MERN Stack', category: 'Full-Stack', description: 'MongoDB, Express, React, Node.js' },
    { icon: Globe, name: 'Django', category: 'Backend', description: 'Python web framework' },
    { icon: Smartphone, name: 'Mobile Dev', category: 'Mobile', description: 'React Native & Flutter' }
  ];

  const stats = [
    { icon: Users, value: 15, label: 'Team Members', suffix: '+' },
    { icon: Star, value: 20, label: 'Projects Delivered', suffix: '+' },
    { icon: Award, value: 4.8, label: 'Client Rating', suffix: '/5', decimals: 1 },
    { icon: Rocket, value: 94, label: 'Success Rate', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="bg-white py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-4 py-2 rounded-full text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Our Story
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            About <span className="text-[#5128a0]">Codanity</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Founded in 2024, we&apos;re a passionate team of developers, designers, and innovators 
            dedicated to transforming ideas into powerful digital solutions that drive business growth.
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="py-16 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5128a0] rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#5128a0] mb-2">
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
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Tabs Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Navigation */}
                  <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#5128a0] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#5128a0]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          >
            {activeTab === 'mission' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are passionate about building powerful and scalable applications to help businesses thrive in the digital age. 
              Our mission is to empower companies with modern, reliable, and effective solutions using state-of-the-art 
              technologies in web and mobile development.
            </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">What We Do</h3>
                    <p className="text-gray-600">Transform business ideas into powerful digital solutions</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">How We Do It</h3>
                    <p className="text-gray-600">Using cutting-edge technologies and best practices</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5128a0] rounded-2xl mb-6">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'culture' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-8">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Codanity, we foster a culture of learning, innovation, and collaboration. We believe in creating an environment 
                  where everyone is encouraged to think creatively, take risks, and push the boundaries of what&apos;s possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Learning</h3>
                    <p className="text-gray-600">Continuous growth and skill development</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                    <p className="text-gray-600">Exploring new ideas and technologies</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">Teamwork and open communication</p>
        </div>
      </div>
              </div>
            )}

            {activeTab === 'tech' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5128a0] rounded-2xl">
                          <tech.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                          <span className="inline-block px-3 py-1 bg-[#5128a0] text-white text-sm rounded-full">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <motion.div 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We&apos;re a diverse team of passionate developers, designers, and innovators 
            working together to create amazing digital experiences.
          </p>
          <motion.div
            className="bg-gradient-to-r from-[#5128a0] to-[#6b46c1] text-white p-8 rounded-3xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-blue-100 mb-6">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <Link href="/careers">
              <motion.button
                className="bg-white text-[#5128a0] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
              </motion.button>
            </Link>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-blue-100 text-sm mb-3">Get in touch with us</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="mailto:codanityco@gmail.com" className="text-white hover:text-blue-200 transition-colors">
                  📧 codanityco@gmail.com
                </a>
                <a href="https://codanityco.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                  🌐 codanityco.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
