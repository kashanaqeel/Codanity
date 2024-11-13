import React from 'react';
import { Code, Server, Smartphone, Globe } from 'lucide-react'; 
import { useSpring, animated } from '@react-spring/web'; 

const ServicesPage: React.FC = () => {
 
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 200, friction: 15 },
  });

  const fadeInCard = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
    config: { tension: 200, friction: 25 },
  });

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#5128a0]">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to support your digital transformation. From full-stack web development to mobile app solutions, we use the latest technologies to build robust and scalable applications.
          </p>
        </div>

        
        <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <animated.div style={fadeInCard} className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Code className="h-12 w-12 text-[#5128a0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Web Development</h3>
            <p className="text-gray-600 mb-4">Build powerful and scalable web applications using modern technologies.</p>
            <ul className="text-gray-600">
              <li className="mt-1">React</li>
              <li className="mt-1">Node.js</li>
              <li className="mt-1">Express</li>
              <li className="mt-1">MongoDB</li>
            </ul>
          </animated.div>

        
          <animated.div style={fadeInCard} className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Globe className="h-12 w-12 text-[#5128a0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
            <p className="text-gray-600 mb-4">Craft engaging user experiences with modern frontend frameworks.</p>
            <ul className="text-gray-600">
              <li className="mt-1">React</li>
              <li className="mt-1">Next.js</li>
              <li className="mt-1">HTML & CSS</li>
              <li className="mt-1">Tailwind CSS</li>
            </ul>
          </animated.div>

        
          <animated.div style={fadeInCard} className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Server className="h-12 w-12 text-[#5128a0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
            <p className="text-gray-600 mb-4">Develop robust and efficient server-side applications and APIs.</p>
            <ul className="text-gray-600">
              <li className="mt-1">Node.js</li>
              <li className="mt-1">Express</li>
              <li className="mt-1">NestJS</li>
              <li className="mt-1">Django</li>
            </ul>
          </animated.div>

       
          <animated.div style={fadeInCard} className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Smartphone className="h-12 w-12 text-[#5128a0] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Development</h3>
            <p className="text-gray-600 mb-4">Create responsive and dynamic mobile applications for iOS and Android.</p>
            <ul className="text-gray-600">
              <li className="mt-1">React Native</li>
              <li className="mt-1">Flutter</li>
              <li className="mt-1">Swift</li>
              <li className="mt-1">Kotlin</li>
            </ul>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default ServicesPage;
