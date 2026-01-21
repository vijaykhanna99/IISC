import { useState } from "react";
import Rahul from "../assets/BioTechResearcher.png";
import Priya from "../assets/Priya.png";
import Aditya from "../assets/AdityaMenon.png";
import LakshmiNarayanan from "../assets/Lakshmi Narayanan.png";
const Alumni = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const alumniData = {
    Biology: [
      {
        name: "Dr. Rahul Sharma",
        batch: "2012-2016",
        image: Rahul,
        designation: "Senior Research Scientist",
        occupation: "Biotechnology Researcher",
        description:
          "Leading groundbreaking research in cellular biology and genetic engineering at a premier international research institute.",
      },
      {
        name: "Dr. Priya Srinivasan",
        batch: "2014-2018",
        image: Priya,
        designation: "Assistant Professor",
        occupation: "Molecular Biology Specialist",
        description:
          "Pioneering research in genomics and developing novel therapeutic approaches for genetic disorders.",
      },
      {
        name: "Dr. Aditya Menon",
        batch: "2015-2019",
        image: Aditya,
        designation: "Chief Scientist",
        occupation: "Pharmaceutical Research",
        description:
          "Spearheading innovative drug discovery processes and leading major pharmaceutical research initiatives.",
      },
      {
        name: "Dr. Lakshmi Narayanan",
        batch: "2017-2021",
        image: LakshmiNarayanan,
        designation: "Research Director",
        occupation: "Ecological Biology",
        description:
          "Conducting critical research on biodiversity conservation and ecological sustainability.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Welcome to IISC Alumni Network
        </h1>

        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-gray-700 font-semibold mb-2"
          >
            Select Department
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a Department</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Environmental Science">Environmental Science</option>
            <option value="Materials">Materials</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

        {selectedDepartment === "Biology" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alumniData.Biology.map((alumni, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-48 h-48 mx-auto object-cover rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-center">
                  {alumni.name}
                </h2>
                <h3 className="text-md font-semibold text-center mb-2">
                  ({alumni.batch})
                </h3>
                <p className="text-center text-gray-700 font-medium">
                  {alumni.designation}
                </p>
                <p className="text-center text-gray-600 mb-2">
                  {alumni.occupation}
                </p>
                <p className="text-center text-gray-500 italic">
                  {alumni.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alumni;
