import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import labImage from "../assets/Lab_Img.jpg";
import highlightImage from "../assets/Highlights_Img.jpg";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import MessageFromDirector from "./MessageFromDirector";
import AskIITM from "./AskIITm";
import championsImg from "../assets/champions.png";
import championsImg1 from "../assets/champions1.png";
const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1} // Only one slide visible at a time
          loop={true} // Enable looping of slides
          speed={2000}
          autoplay={{
            delay: 2500, // Autoplay with 2.5 seconds delay
            disableOnInteraction: false, // Keep autoplay even after user interacts
          }}
          effect="fade" // Optional: Add fade effect for smooth transitions
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="relative"
        >
          <SwiperSlide>
            <img
              src={championsImg1}
              alt="IISc Campus"
              className="w-full h-[600px]"
            />
            {/* Overlay Text and Button */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to IISc's BS (Research) Program
            </h1>
            <p className="text-xl mb-8">
              Shaping the future through excellence in research and education
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Programs
            </button>
          </div>
        </div> */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 uppercase">
                  Champions in research
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.iitm.ac.in/sites/default/files/banners/home/homepage%20banner4.jpg"
              alt="Lab Image"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 uppercase">
                  The Best of the Best
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.iitm.ac.in/sites/default/files/banners/home/homepagebanner-03.jpg"
              alt="Highlights"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4 uppercase">
                  Catalyzing Careers
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="custom-prev absolute left-10 top-1/2 transform -translate-y-1/2 p-4 rounded-full  z-10">
          <i className="fa fa-chevron-left text-4xl w-10 h-10 text-white"></i>
        </button>
        <button className="custom-next absolute right-10 top-1/2 transform -translate-y-1/2 p-4 rounded-full  z-10">
          <i className="fa fa-chevron-right text-4xl w-10 h-10 text-white"></i>
        </button>
      </div>

      {/* Value Proposition and Highlights Section */}
      {/* <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 justify-center">
        <div className="border-2 border-blue-400 bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-blue-800">Value Proposition</h2>
          <ul className="mt-4 space-y-2 text-gray-700 text-lg">
            <div className="flex space-x-2">
              <div className="space-y-2">
                <li>
                  • Immense value to be unlocked by providing a strong foundation
                  in Mathematics, Computation, and Data Science at the UG level.
                </li>
                <li>• Significant impact in both academia and industry.</li>
                <li>
                  • Interdisciplinary program by leveraging the unmatched expertise
                  available across the institute.
                </li>
              </div>
              <div className="flex justify-end shadow-md shadow-slate-500">
                <img src={labImage} alt="Lab Image" className="w-72 h-45" />
              </div>
            </div>
            <li>• Located in the tech hub of the country.</li>
            <li>• Opportunities for various specializations and diverse projects.</li>
            <li>
              • Institute PG Medical School Initiative: Projects in precision,
              AI-enabled medicine.
            </li>
          </ul>
        </div>
        <div className="border-2 border-blue-400 bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-blue-800">Highlights</h2>
          <div className="mt-4 text-gray-700 text-lg">
            <div className="flex space-x-2">
              <div className="space-y-4">
                <p>
                  <span className="font-bold">Core Courses:</span> Mathematics,
                  Computing, EECS, Breadth soft core, Humanities.
                </p>
                <p>
                  <span className="font-bold">Soft Core Courses:</span> Selection
                  of courses in Mathematics and Computing.
                </p>
                <p>
                  <span className="font-bold">Elective Courses:</span> Large list of
                  exciting courses to choose from.
                </p>
              </div>
              <div className="flex justify-end shadow-md shadow-slate-500">
                <img
                  src={highlightImage}
                  alt="Computer Lab Image"
                  className="w-52 h-45"
                />
              </div>
            </div>
            <p>
              <span className="font-bold">Projects:</span> Diverse projects to
              choose from.
            </p>
          </div>
        </div>
      </div> */}

      <div>
        <MessageFromDirector />
      </div>
      <div>
        <AskIITM />
      </div>
      {/* Latest News Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Research Breakthrough in Quantum Computing",
                desc: "IISc researchers make significant progress in quantum computing research...",
                image:
                  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "New Collaboration with MIT",
                desc: "IISc partners with MIT for advanced research in artificial intelligence...",
                image:
                  "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
              {
                title: "Student Achievement in International Competition",
                desc: "IISc students win first place in international science competition...",
                image:
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              },
            ].map((news, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.desc}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
