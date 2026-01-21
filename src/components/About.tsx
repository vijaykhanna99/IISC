import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About BS (Research) Program</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-gray-700 mb-6">
              The BS (Research) program at IISc is a unique undergraduate program that combines rigorous coursework with hands-on research experience. Our program is designed to nurture the next generation of scientists and researchers, providing them with a strong foundation in basic sciences and research methodology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Program Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Research-oriented curriculum</li>
                  <li>World-class faculty mentorship</li>
                  <li>State-of-the-art laboratory facilities</li>
                  <li>Interdisciplinary approach</li>
                  <li>International collaborations</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>4-year residential program</li>
                  <li>Flexible curriculum structure</li>
                  <li>Research project in final year</li>
                  <li>Industry internship opportunities</li>
                  <li>Global exposure through exchanges</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Why Choose IISc?</h2>
            <p className="text-gray-700 mb-6">
              IISc is India's premier research institution with a legacy of over 100 years in scientific research and education. Our BS (Research) program offers:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Top-ranked institution with exceptional academic standards</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge research facilities and opportunities</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Vibrant academic community and network</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Vision & Mission</h2>
              <p className="text-gray-700 mb-4">
                Our vision is to create world-class researchers and scientists who will contribute significantly to the advancement of science and technology. We aim to provide a nurturing environment that encourages curiosity, critical thinking, and innovation.
              </p>
              <p className="text-gray-700">
                Through our BS (Research) program, we mission to develop well-rounded individuals who are not only excellent in their chosen fields but also possess the skills and mindset to tackle global challenges through research and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;