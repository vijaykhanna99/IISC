import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showAdmissions, setShowAdmissions] = useState(false);
  const [showCampusLife, setShowCampusLife] = useState(false);
  const subjects = [
    "Biology",
    "Chemistry",
    "Earth & Environmental Science",
    "Materials",
    "Mathematics",
    "Physics",
  ];

  const admissionItems = [
    "Online Application",
    "Announcements/Important Dates",
    "Cutoff and Selection Process",
    "FAQ",
    "Contact (Admissions)",
  ];

  const campuslife = [
    "Campus Festivals",
    "Student Activities",
    "Social Consciousness",
    "Wellness Community Centre",
    "Hostel Life",
    "Student Governance",
    "Women's Forum",
    "Sports",
    "Clubs",
    "Technology & Innovation",
  ];

  return (
    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <button
              onClick={() => setCurrentPage("home")}
              className={`py-4 px-2 hover:text-blue-300 ${
                currentPage === "home" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Home
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => setCurrentPage("curriculum")}
              // onMouseEnter={() => setShowSubjects(true)}
              // onMouseLeave={() => setShowSubjects(false)}
              className={`py-4 px-2 hover:text-blue-300 flex items-center ${
                currentPage === "curriculum" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Course Structure
            </button>
            {showSubjects && (
              <div
                className="absolute left-0 mt-0 w-48 bg-white text-gray-800 shadow-lg rounded-b-lg z-50"
                onMouseEnter={() => setShowSubjects(true)}
                onMouseLeave={() => setShowSubjects(false)}
              >
                {subjects.map((subject, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      if (subject === "Biology") {
                        setCurrentPage(subject);
                      } else {
                        setCurrentPage("curriculum");
                      }
                    }}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            )}
          </li>
          {/* <li>
            <button
              className={`py-4 px-2 hover:text-blue-300 ${
                currentPage === "about" ? "border-b-2 border-blue-300" : ""
              }`}
              onClick={() => setCurrentPage("studentHandbook")}
            >
              Student Handbook
            </button>
          </li> */}
          <li className="relative group">
            <button
              onClick={() => setCurrentPage("admissions")}
              onMouseEnter={() => setShowAdmissions(true)}
              onMouseLeave={() => setShowAdmissions(false)}
              className={`py-4 px-2 hover:text-blue-300 flex items-center ${
                currentPage === "admissions" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Admissions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showAdmissions && (
              <div
                className="absolute left-0 mt-0 w-64 bg-white text-gray-800 shadow-lg rounded-b-lg z-50"
                onMouseEnter={() => setShowAdmissions(true)}
                onMouseLeave={() => setShowAdmissions(false)}
              >
                {admissionItems.map((item, index) =>
                  item === "Online Application" ? (
                    <a
                      href="https://admissions-august.iisc.ac.in/index.html"
                      target="_blank"
                      key={index}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ) : (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => setCurrentPage("admissions")}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            )}
          </li>
          <li>
            <button
              className={`py-4 px-2 hover:text-blue-300 ${
                currentPage === "FacultyCorner"
                  ? "border-b-2 border-blue-300"
                  : ""
              }`}
              onClick={() => setCurrentPage("FacultyCorner")}
            >
              Dean & co-ordinators
            </button>
          </li>
          <li>
            <button
              className={`py-4 px-2 hover:text-blue-300 ${
                currentPage === "FeesAndScholarShip"
                  ? "border-b-2 border-blue-300"
                  : ""
              }`}
              onClick={() => setCurrentPage("FeesAndScholarShip")}
            >
              Fee structure and Scholarship
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => setCurrentPage("campusLife")}
              onMouseEnter={() => setShowCampusLife(true)}
              onMouseLeave={() => setShowCampusLife(false)}
              className={`py-4 px-2 hover:text-blue-300 flex items-center ${
                currentPage === "campusLife" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Campus Life <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {showCampusLife && (
              <div
                className="absolute left-0 mt-0 w-48 bg-white text-gray-800 shadow-lg rounded-b-lg z-50"
                onMouseEnter={() => setShowCampusLife(true)}
                onMouseLeave={() => setShowCampusLife(false)}
              >
                {campuslife.map((campus, index) => (
                  <button
                    key={index}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => setCurrentPage(campus)}
                  >
                    {campus}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`py-4 px-2 hover:text-blue-300 ${
                currentPage === "contact" ? "border-b-2 border-blue-300" : ""
              }`}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
