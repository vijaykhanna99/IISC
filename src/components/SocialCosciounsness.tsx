export default function StudentActivities() {
    return (
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          <img
            src="https://www.iitm.ac.in/sites/default/files/2020-05/Campus%20life%20-%20Social%20conciousness.jpg"
            alt="Student Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-6xl font-bold">Social Consciousness</h1>
            <p className="text-white text-lg mt-2">
              Explore vibrant student life, and leadership programs.
            </p>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row p-10 space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Left Column - Student Activities */}
          <div className="lg:w-2/3">
            {/* Technical Clubs */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-blue-600 pl-4">
                 IIT for Villages
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-03/Static%20Campus%20Life%20Social%20Consciousness.jpg"
                alt="Tech Club"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              IIT for Villages (IViL) was started with the vision to leverage the unique and vast resource base in the Institute for a wider audience. IViL is a discussion forum and an action platform for students to implement their thoughts for rural India. The forum has a dozen projects, ranging from setting up an accessibility lab for visually challenged students to bridging the gap between farmers and agriculture experts to teaching the children of mess workers on campus. They undertake frequent visits to villages on the outskirts of Chennai, and engage with students and community through various events.
              </p>
            </div>
  
            {/* Cultural & Arts Clubs */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-red-600 pl-4">
                Sustainability Network
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-03/Static%20Campus%20Life%20Social%20Consciousness%20-%20SNet.jpg"
                alt="Cultural Club"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              The Sustainability Network (S-Net) team at IIT Madras makes sure environmental sustainability is achieved and continuously pursued in the future within our campus and beyond. To be a part of this beautiful campus is to not only enjoy every part of it, but to also work towards preserving its diversity and aiding its needs.
              </p>
              <p className="text-gray-700 mt-4 text-lg">
              S-Net works on major issues such as water crises, electricity consumption, food wastage, climate change, green cover on campus and waste management. They make noticeable changes by incorporating small projects to achieve immediate change, conducting awareness events, holding competitions to find solutions to problems within the Institute, and most of all, getting every single student to contribute to the betterment of our surroundings. 
              </p>
            </div>
  
            {/* Leadership & Social Activities */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-green-600 pl-4">
                Team Sahaay
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-03/Static%20Campus%20Life%20Social%20Consciousness%20-%20Sahaay.jpg"
                alt="Leadership and Social Work"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              “The pleasure one experiences by helping someone in need is invaluable and the level of contentment of such achievements is extremely high.” Sahaay, as the name suggests, aims to develop technological products and provide technical solutions to assist specially-abled people in their daily lives. The goal is to establish a team of enthusiastic students who would collaborate with various NGOs and work towards the development of technologies as societally impactful solutions.
              </p>
            </div>
          </div>
  
          {/* Right Column - Student Life and Quick Links */}
          <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg h-fit sticky top-10">
            <h3 className="text-3xl font-bold flex items-center">
              <span className="text-blue-600 mr-2">🏛</span> Student Life at IISc
            </h3>
            <p className="text-gray-700 mt-4 text-lg">
              Life at IISc is **more than academics** – it’s a journey filled with experiences, friendships, and personal growth.
            </p>
  
            {/* Clubs and Societies */}
            <h4 className="text-2xl font-semibold text-gray-900 mt-6">Popular Clubs</h4>
            <ul className="mt-4 text-gray-800 space-y-3 text-lg">
              <li>🎭 **Drama Club** - Street plays, theater, and improv nights.</li>
              <li>🎶 **Music Club** - Indian & Western music performances.</li>
              <li>📷 **Photography Club** - Capturing campus beauty.</li>
              <li>🖌 **Art & Design Club** - Sketching, painting, and digital art.</li>
              <li>🤖 **Robotics & AI Club** - Hands-on tech projects.</li>
              <li>🌍 **Nature & Trekking Club** - Exploring Western Ghats.</li>
            </ul>
  
            {/* Quick Links */}
            <h4 className="text-2xl font-semibold text-gray-900 mt-6">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://www.iisc.ac.in/" target="_blank" className="text-blue-600 hover:underline">
                  🌐 IISc Official Website
                </a>
              </li>
              <li>
                <a href="https://www.pravega.in/" target="_blank"  className="text-blue-600 hover:underline">
                  🔬 Pravega Science Fest
                </a>
              </li>
              <li>
                <a href="https://www.iisc.ac.in/" target="_blank"  className="text-blue-600 hover:underline">
                  🎭 Miditha Cultural Fest
                </a>
              </li>
              <li>
                <a href="https://iisc.ac.in/sports/" target="_blank"  className="text-blue-600 hover:underline">
                  ⚽ Josh Sports Fest
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Call-to-Action Section */}
        <div className="w-full bg-blue-600 text-white text-center py-10 mt-10">
          <h2 className="text-3xl font-bold">Get Involved at IISc!</h2>
          <p className="text-lg mt-2">
            Join student clubs, participate in events, and make your IISc journey unforgettable.
          </p>
          <a
            href="https://www.iisc.ac.in/student-life/"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full inline-block mt-4 hover:bg-gray-200 transition"
          >
            Explore Student Activities
          </a>
        </div>
      </div>
    );
  }
  