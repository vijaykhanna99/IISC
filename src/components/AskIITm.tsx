const AskIITM = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section: Logo & Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-xl font-bold">
          <span className="text-red-600">|</span> IISC Aspirants
        </h2>

        {/* Logo */}
        <div className="flex items-center mt-4 justify-center md:w-1/3">
          <img
            src="https://iisc.ac.in/wp-content/uploads/2020/08/IISc_Master_Seal.jpg" // Replace with actual logo path
            alt="Ask IIT Madras"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-4">
          Studying at IISc has been an incredible journey of growth and
          discovery. The institute’s rigorous academic environment, world-class
          research facilities, and vibrant peer community have shaped my
          learning in ways beyond textbooks. From engaging in cutting-edge
          research to collaborating with brilliant minds, every moment at IISc
          has been intellectually enriching. The freedom to explore
          interdisciplinary fields, interact with esteemed professors, and work
          on real-world problems has broadened my perspective and
          problem-solving skills. IISc is not just an institution—it’s an
          experience that fosters innovation, curiosity, and excellence.
        </p>

        {/* Visit Link */}
      </div>

      {/* Right Section: Embedded YouTube Video */}
      <div className="md:w-1/2">
        <div className="relative w-full h-64 md:h-80">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/n54s3FrxOT4"
            title="Ask IITM - JoSAA Counselling"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {
          // <iframe src="https://whereness.vercel.app/here/5584bf78-05a6-4c0d-a849-701149dfa1c9" width="800" height="315" frameborder="0" allowFullScreen></iframe> 
          }
        </div>
      </div>
    </div>
  );
};

export default AskIITM;
