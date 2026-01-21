export default function StudentActivities() {
    return (
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          <img
            src="https://www.iitm.ac.in/sites/default/files/2020-05/Campus%20Life%20-%20Student%20Activities.jpg"
            alt="Student Activities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-6xl font-bold">STUDENT ACTIVITIES AT IISc</h1>
            <p className="text-white text-lg mt-2">A vibrant campus life beyond academics.</p>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row p-10 space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Left Column - Clubs and Societies */}
          <div className="lg:w-2/3">
            {/* Science & Tech Clubs */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-blue-600 pl-4">
              Extra Mural Lectures
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-03/Static%20Campus%20Life%20Student%20Activities%20EML.jpg"
                alt="Tech Club"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              As children, we admire; as adolescents, we aspire; as adults, we perspire; and as responsible, successful citizens, we inspire. It is this inspiration that one gets in these Extra Mural Lectures (EML). One cannot achieve big without listening to people who have done it before. It is as they say: "We shall not live long enough to learn from our own mistakes. We have to learn from others’ too".
              </p>
              <br /> <br />
              <p className="text-gray-700 mt-4 text-lg">
              The EMLs cover diverse topics and bring in recognised pioneers and industry experts from across the globe. The EML student team strives to bring the likes of bureaucrats, ground-level heroes, celebrities, political leaders and sports personnel for engaging sessions with the IIT Madras community.
              </p>
            </div>
  
            {/* Cultural Clubs */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-red-600 pl-4">
                Leisure Time Activity Program
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-03/Static%20Campus%20Life%20Student%20Activities%20LTAP.jpg"
                alt="Cultural Club"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              The Leisure Time Activity Program (L-TAP) aims to enrich students’ personalities by giving opportunities to learn various skills in their leisure time. L-TAP courses are designed for beginners and require no prior knowledge in the corresponding subject. It is also an opportunity for students and scholars to discover new interests and hobbies.
              </p>
              <br /> <br />
              <p className="text-gray-700 mt-4 text-lg">
              Classes take place outside the academic hours. Courses, ranging from filmmaking, terracotta crafts, self-defence techniques like Krav Maga, meditation, western and classical music, bharatnatyam, spoken Tamil, web programming, swimming, and instruments, are meant to provide a detailed introduction so students can choose what interests them and pursue it further
              </p>
            </div>
  
            {/* Sports Activities */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-green-600 pl-4">
              NCC | NSS | NSO | NCA
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-05/Static%20Campus%20Life%20Student%20Activities%20NSS.jpg"
                alt="Sports Activities"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              Undergraduate students in all the IITs are mandated to choose among the National Cadet Corps (NCC), National Service Scheme (NSS), National Sports Organisation (NSO) and National Cultural Academy (NCA) in their first year. The National Cadet Corps is a tri-service organisation comprising the Army, Navy and Air Force that engages in grooming students into disciplined and patriotic citizens. 
              </p>
              <br /> <br />
              <p className="text-gray-700 mt-4 text-lg">
              The Government of India, through its National Sports Organisation, provides a scheme in all IITs to sign up for and undergo training in a particular sport. Students enrolled under this scheme are required to attend coaching sessions over a period of two semesters as part of the prescribed curriculum.
              </p>
            </div>
          </div>
  
          {/* Right Column - Campus Life and Clubs */}

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
          <h2 className="text-3xl font-bold">Join Student Activities at IISc!</h2>
          <p className="text-lg mt-2">
            Explore, participate, and grow with IISc’s diverse student organizations.
          </p>
          <a
            href="https://www.iisc.ac.in/student-activities/"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full inline-block mt-4 hover:bg-gray-200 transition"
          >
            Get Involved
          </a>
        </div>
      </div>
    );
  }
  