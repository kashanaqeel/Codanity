import React from "react";
import Head from "next/head";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/config/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Our Projects - Codanity</title>
        <meta name="description" content="Explore our portfolio of successful projects across various technologies and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.div 
          className="bg-white py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div 
              className="inline-flex items-center gap-2 bg-blue-50 text-[#5128a0] px-4 py-1 rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Our Portfolio
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Showcasing Our
              <span className="text-[#5128a0]"> Digital Excellence</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Discover our diverse portfolio of successful projects spanning full-stack development, 
              web applications, mobile solutions, and innovative digital experiences.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section - At the End */}
        <motion.div 
          className="bg-[#5128a0] py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Ready to Start Your Next Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Let&apos;s collaborate to bring your digital vision to life with our expertise 
              in modern technologies and innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
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
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Link href="/contacts">
                <motion.button
                  className="bg-white text-[#5128a0] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/aboutUs">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#5128a0] transition-all duration-300 shadow-lg hover:shadow-xl"
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
      </main>
    </>
  );
}
