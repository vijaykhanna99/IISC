export default function CampusFestivals() {
    return (
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[600px]">
          <img
            src="https://www.iitm.ac.in/sites/default/files/2020-05/Campus%20life-Festivals.jpg"
            alt="Campus Festival"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-6xl font-bold">CAMPUS FESTIVALS AT IISc</h1>
            <p className="text-white text-lg mt-2">A celebration of knowledge, culture, and sports.</p>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row p-10 space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Left Column - Festivals and Events */}
          <div className="lg:w-2/3">
            {/* Pravega - Technical Festival */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-blue-600 pl-4">
               Shastra
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-05/static-campus-festivals%20Shaastra2-1.jpg"
                alt="Pravega IISc"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              Shaastra is the annual technical festival of IIT Madras. True to its name, the Sanskrit equivalent of science, Shaastra is a celebration of unconstrained thinking and love for the spirit of engineering. A melting pot of diverse disciplines in science, it provides the opportunity to catch a glimpse of the latest worldwide trending technologies.
                <br /><br />
                Established in 2000, Shaastra held its 20th edition this year. The completely student-run techno-managerial festival stretches over four days and nights in the first week of January. The fest holds the distinction of being the first student-managed event in the world to implement a Quality Management System and earn the ISO 9001:2000 certification. This has since been upgraded twice to ISO 9001:2008 and ISO 9001:2015 certifications – a testament to the impeccable standards of the festival over the years.
                <br /> <br />
                Shaastra has always been a tremendous learning experience for the organisers, participants and visitors. The fest attracts an immense number of participants from diverse technical, scientific and managerial backgrounds, from school students to graduates, academicians to professionals, engineers to entrepreneurs. Shaastra also has something to offer to non-hardcore techies, with events such as drone wars, laser shows and firework displays that make up a huge part of the Shows and Exhibitions every year.
              </p>
            </div>
  
            {/* Miditha - Cultural Festival */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-red-600 pl-4">
                
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/2020-04/static-campus-festivals%20Shaastra1.jpg"
                alt="Miditha IISc"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              Shaastra is the annual technical festival of IIT Madras. True to its name, the Sanskrit equivalent of science, Shaastra is a celebration of unconstrained thinking and love for the spirit of engineering. A melting pot of diverse disciplines in science, it provides the opportunity to catch a glimpse of the latest worldwide trending technologies.
                <br /><br />
                Established in 2000, Shaastra held its 20th edition this year. The completely student-run techno-managerial festival stretches over four days and nights in the first week of January. The fest holds the distinction of being the first student-managed event in the world to implement a Quality Management System and earn the ISO 9001:2000 certification. This has since been upgraded twice to ISO 9001:2008 and ISO 9001:2015 certifications – a testament to the impeccable standards of the festival over the years.
              </p>
            </div>
  
            {/* Sports Festival - Josh */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 border-l-6 border-green-600 pl-4">
              Saarang
              </h2>
              <img
                src="https://www.iitm.ac.in/sites/default/files/instigram/202005/Static%20Campus%20Life%20Campus%20Festivals%20Saarang%20-new.jpg"
                alt="Josh IISc"
                className="w-full h-[300px] mt-4 object-cover rounded-lg shadow"
              />
              <p className="text-gray-700 mt-4 text-lg">
              IIT Madras has seen a 60-year journey marked by many milestones, one of which was the advent of Mardi Gras, a pioneer student cultural extravaganza. Mardi Gras had the distinction of hosting Uriah Heep (in one of their rare world tours), Buddha’s Babies and even A R Rahman as a college student. Almost 45 years later, the legacy lives on, but now known as Saarang.
                <br /><br />
                One of the largest cultural festivals in India, Saarang attracts over 50,000 people from around the country. Held in January every year, Saarang is commonly acknowledged as the mother of all cultural festivals, a reputation that the Institute is honour-bound to uphold.
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
          <h2 className="text-3xl font-bold">Join the Festivities at IISc!</h2>
          <p className="text-lg mt-2">
            Be a part of the most exciting campus festivals and experience the vibrant student life at IISc Bangalore.
          </p>
          <a
          target="_blank"
            href="https://www.iisc.ac.in/"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full inline-block mt-4 hover:bg-gray-200 transition"
          >
            Explore More
          </a>
        </div>
      </div>
    );
  }
  