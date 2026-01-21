import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import BiologyCurriculum from "./components/BiologyCurriculum";
import FacultyCorner from "./components/FacultyCorner";
import CampusLife from "./components/CampusLife";
import Scholarship from "./components/Scholarship";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StudentHandbook from "./components/StudentHandbook";
import CampusFestivals from "./components/CampusFestivals";
import StudentActivities from "./components/StudentActivities";
import SocialCosciounsness from "./components/SocialCosciounsness";
import Alumini from "./components/Alumini";
import FeeAndScholarship from "./components/FeeAndScholarship";
import CurriculumGrid from "./components/Curriculum2";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      // case "curriculum":
      //   return <Curriculum setCurrentPage={setCurrentPage} />;
      case "curriculum":
        return <CurriculumGrid setCurrentPage={setCurrentPage} />;
      case "Biology":
        return <BiologyCurriculum />;
      case "FacultyCorner":
        return <FacultyCorner />;
      case "admissions":
        return <Admissions />;
      case "studentHandbook":
        return <StudentHandbook />;
      case "Campus Festivals":
        return <CampusFestivals />;
      case "Student Activities":
        return <StudentActivities />;
      case "Social Consciousness":
        return <SocialCosciounsness />;
      case "FeesAndScholarShip":
        return <FeeAndScholarship />;
      case "contact":
        return <Contact />;
      case "Scholarship":
        return <Scholarship />;
      case "campusLife":
        return <CampusLife />;
      case "Alumini":
        return <Alumini />;
      default:
        return <Hero />;
    }
  };

  const handleOpen = () => {
    const pdfUrl = "./Wall Calendar 2025.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-4 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                alt="IISc Logo"
                className="h-16 w-16 object-cover rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Indian Institute of Science - Bangalore
                </h1>
                <h2 className="text-xl text-gray-600">
                  Bachelor of Science (Research)
                </h2>
              </div>
            </div>
            <div className="py-2 px-4">
              <div className="container mx-auto flex justify-end items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-1 rounded-md text-sm border border-gray-300"
                  />
                </div>
                <div className="relative">
                  <select className="bg-white px-3 py-1 rounded-md text-sm border border-gray-300">
                    <option>English</option>
                    <option>हिंदी</option>
                    <option>ಕನ್ನಡ</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="flex-grow">{renderContent()}</div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 w-full bottom-0">
        <div className="container mx-auto lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="">
              <h3 className="text-xl font-semibold underline mb-2">
                Contact Us
              </h3>
              <div className="space-y-2">
                <p>Indian Institute of Science, Bangalore</p>
                <p>+91-80-2293-2228</p>
                <p>ugprogram@iisc.ac.in</p>
              </div>
              <div>
                {/* <h3 className="text-xl font-semibold mb-4">Follow Us</h3> */}
                <div className="flex space-x-4 mt-5">
                  <a
                    href="https://x.com/iiscbangalore"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="https://in.linkedin.com/school/indian-institute-of-science/"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/iiscbangalore/"
                    className="hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold underline mb-2">
                Quick Links
              </h3>
              <ul className=" grid grid-cols-2 gap-2">
                <li className="hover:text-gray-300 cursor-pointer">
                  {" "}
                  <a
                    href="https://iisc.ac.in/wp-content/uploads/2024/09/UG-Handbook-2024-25-signed.pdf"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Student Handbook
                  </a>
                </li>
                <li
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={handleOpen}
                >
                  {" "}
                  Academic Calendar
                </li>
                <li>
                  <a
                    href="https://occap.iisc.ac.in/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Placements{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Research and Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="https://scouncil.iisc.ac.in/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Student Council
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.iisc.ac.in/health-centre/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    {" "}
                    Health Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://iisc.ac.in/complaints/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Internal Complaint Committee
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Counselling Center
                  </a>
                </li>

                <li onClick={() => setCurrentPage("Alumini")}>
                  <a href="#" className="hover:text-gray-300">
                    Alumini
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
              <a
                  href="https://x.com/iiscbangalore"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="https://in.linkedin.com/school/indian-institute-of-science/"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/iiscbangalore/"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div> */}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} Indian Institute of Science. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
