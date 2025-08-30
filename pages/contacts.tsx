import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Phone, Mail, MapPin, Loader, Globe } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendContactForm } from '@/lib/api';
import { motion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#5128a0]/10 to-transparent rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5128a0]/10 to-blue-500/10 text-[#5128a0] px-4 py-2 rounded-full text-sm font-medium border border-[#5128a0]/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="w-2 h-2 bg-[#5128a0] rounded-full animate-pulse"></span>
            Let&apos;s Connect
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="bg-gradient-to-r from-[#5128a0] to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
         
          <motion.div 
            className="lg:col-span-1 space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <Phone className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">Mon-Fri from 9am to 10pm</p>
                <p className="mt-1 text-[#5128a0] font-medium">+923204464408</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <Mail className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">Our friendly team is here to help.</p>
                <p className="mt-1 text-[#5128a0] font-medium">codanityco@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <MapPin className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Office</h3>
                <p className="mt-1 text-gray-600">Johar Town Lahore, Pakistan.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-3 group-hover:shadow-lg transition-all duration-300">
                <Globe className="h-6 w-6 text-[#5128a0]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Website</h3>
                <p className="mt-1 text-gray-600">Visit our online presence</p>
                <a href="https://codanity.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-1 text-[#5128a0] hover:underline font-medium">
                  codanity.vercel.app
                </a>
              </div>
            </motion.div>
            
            {/* Social Media Links */}
            <motion.div 
              className="pt-4"
              variants={itemVariants}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/company/codanity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5128a0] hover:text-[#3e217e] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.facebook.com/codanityco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5128a0] hover:text-[#3e217e] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/codanityco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#5128a0] hover:text-[#3e217e] transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            variants={cardVariants}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name  <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0] transition-all duration-200"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0] transition-all duration-200"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </motion.div>

                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject  <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0] transition-all duration-200"
                  />
                  {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>}
                </motion.div>

                <motion.div 
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message  <span className='text-red-600'>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#5128a0] focus:outline-none focus:ring-1 focus:ring-[#5128a0] transition-all duration-200"
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                </motion.div>
              </div>

              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-[#5128a0] to-purple-600 hover:from-[#3e217e] hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5128a0] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader className="h-5 w-5 mr-2 animate-spin" /> : <Send className="h-5 w-5 mr-2" />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
