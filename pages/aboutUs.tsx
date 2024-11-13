import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-[#5128a0]">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Founded in 2024, our company is dedicated to delivering high-quality full-stack solutions in web and app development.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are passionate about building powerful and scalable applications to help businesses thrive in the digital age. 
              Our mission is to empower companies with modern, reliable, and effective solutions using state-of-the-art 
              technologies in web and mobile development.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Technologies</h2>
            <p className="text-gray-600">
              Our team specializes in the following technologies:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
              <li>Full Stack Web Development: <strong>MERN (MongoDB, Express, React, Node.js)</strong></li>
              <li>Frontend Frameworks: <strong>Next.js</strong></li>
              <li>Backend Frameworks: <strong>NestJS, Django</strong></li>
              <li>Mobile and App Development: Modern frameworks and tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              We are driven by a commitment to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
              <li><strong>Quality:</strong> We strive to deliver products of the highest standard.</li>
              <li><strong>Integrity:</strong> Honesty and transparency are the foundations of our work.</li>
              <li><strong>Innovation:</strong> We continuously explore new ideas to provide the best solutions.</li>
              <li><strong>Collaboration:</strong> Teamwork and open communication define our culture.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-gray-600">
              At our company, we foster a culture of learning and growth. We believe in creating an environment where everyone 
              is encouraged to innovate and excel. Our team is composed of highly skilled and passionate professionals dedicated 
              to making an impact through technology.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
