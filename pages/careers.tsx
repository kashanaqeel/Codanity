import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="text-[#5128a0]">Careers</span> at Our Company
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Join us in shaping the future of technology. We’re looking for passionate and talented individuals to be a part of our team.
        </p>
        
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Openings Yet</h2>
          <p className="text-gray-600">
            We don’t have any job openings at the moment. However, we’re always interested in meeting talented people. Feel free to check back later or send us your resume at <span className="text-[#5128a0] font-semibold">codanityco@gmail.com</span> for future opportunities.
          </p>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Why Work With Us?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We value innovation, teamwork, and growth. Our team is committed to delivering impactful solutions and fostering a collaborative environment. By joining us, you will have the opportunity to work with cutting-edge technologies and contribute to exciting projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
