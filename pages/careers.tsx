import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Users, 
  Zap, 
  Globe, 
  Code, 
  Heart, 
  Award, 
  Mail, 
  Linkedin, 
  Github, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Rocket
} from 'lucide-react';
import CountUp from 'react-countup';

const CareersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    { icon: Zap, title: 'Fast-Paced Growth', description: 'Rapid learning and career advancement opportunities' },
    { icon: Globe, title: 'Remote First', description: 'Work from anywhere with flexible schedules' },
    { icon: Code, title: 'Latest Tech', description: 'Work with cutting-edge technologies and frameworks' },
    { icon: Heart, title: 'Great Culture', description: 'Collaborative, inclusive, and supportive environment' },
    { icon: Award, title: 'Recognition', description: 'Your contributions are valued and celebrated' },
    { icon: Users, title: 'Team Events', description: 'Regular team building and social activities' }
  ];

  const values = [
    { icon: Rocket, title: 'Innovation', description: 'We push boundaries and explore new possibilities' },
    { icon: Star, title: 'Excellence', description: 'We strive for the highest quality in everything we do' },
    { icon: TrendingUp, title: 'Growth', description: 'Continuous learning and personal development' },
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our work' }
  ];

  const stats = [
    { icon: Users, value: 15, label: 'Team Members', suffix: '+' },
    { icon: Star, value: 4.9, label: 'Team Rating', suffix: '/5', decimals: 1 },
    { icon: Globe, value: 8, label: 'Countries', suffix: '+' },
    { icon: Award, value: 100, label: 'Satisfaction', suffix: '%' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Briefcase },
    { id: 'culture', label: 'Culture', icon: Heart },
    { id: 'benefits', label: 'Benefits', icon: Award },
    { id: 'contact', label: 'Get In Touch', icon: Mail }
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
            Join Our Team
          </motion.div>
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-[#5128a0]">Careers</span> at Codanity
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join us in shaping the future of technology. We&apos;re looking for passionate and talented individuals 
            to be part of our mission to transform ideas into powerful digital solutions.
          </motion.p>
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
            {activeTab === 'overview' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Opportunities</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions Right Now</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    We don&apos;t have any job openings at the moment, but we&apos;re always interested in meeting talented people!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">What We Look For</h4>
                      <p className="text-gray-600">Passionate developers with a growth mindset</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                      <p className="text-gray-600">Next.js, React, Node.js, Django, Mobile</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Experience Level</h4>
                      <p className="text-gray-600">Junior to Senior developers welcome</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'culture' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Culture & Values</h2>
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

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5128a0] rounded-2xl mb-6">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-8">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Even though we don&apos;t have open positions right now, we&apos;re always interested in meeting talented people. 
                  Send us your resume and we&apos;ll keep you in mind for future opportunities!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">Send your resume and cover letter</p>
                    <a 
                      href="mailto:codanityco@gmail.com" 
                      className="inline-flex items-center gap-2 text-[#5128a0] font-medium hover:text-[#3e217e] transition-colors"
                    >
                      codanityco@gmail.com
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
                    <p className="text-gray-600 mb-3">Stay updated on opportunities</p>
                    <div className="flex gap-4 justify-center">
                      <a href="https://www.linkedin.com/company/codanity" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5128a0] text-white rounded-lg hover:bg-[#3e217e] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://www.facebook.com/codanityco" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5128a0] text-white rounded-lg hover:bg-[#3e217e] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/codanityco" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#5128a0] text-white rounded-lg hover:bg-[#3e217e] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <a href="mailto:codanityco@gmail.com?subject=Resume Submission - Codanity Careers&body=Hi Codanity Team,%0D%0A%0D%0AI'm interested in joining your team and would like to submit my resume for future opportunities.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]">
                  <motion.button
                    className="bg-gradient-to-r from-[#5128a0] to-[#6b46c1] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-[#3e217e] hover:to-[#553c9a] transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Your Resume
                  </motion.button>
                </a>
              </div>
            )}
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
            Ready to Join Our Team?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Even if we don&apos;t have open positions right now, we&apos;re always looking for talented individuals 
            who share our passion for innovation and excellence.
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
            <a href="mailto:codanityco@gmail.com?subject=Resume Submission - Codanity Careers">
              <motion.button
                className="bg-white text-[#5128a0] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Resume
              </motion.button>
            </a>
            <Link href="/aboutUs">
              <motion.button
                className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-[#5128a0] transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
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

export default CareersPage;
