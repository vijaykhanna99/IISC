import { useState } from "react";
import {
  FaCaretDown,
  FaCaretRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import feestructure from "../assets/fee-structur.jpg";

const FeeAndScholarship = () => {
  const [isFeeStructureOpen, setIsFeeStructureOpen] = useState(false);
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [isFellowshipOpen, setIsFellowshipOpen] = useState(false);
  const [isPrivateFellowshipOpen, setIsPrivateFellowshipOpen] = useState(false);
  const scholarships = [
    {
      name: "KVPY (Up to Batch 2022)",
      details: (
        <>
          <strong>For 1st to 3rd year</strong>
          <br /> Monthly Scholarship - Rs. 5,000
          <br /> Summer project Grant per annum - Rs. 20,000
          <br /> <br />
          <strong>For 4th and 5th year</strong>
          <br /> Monthly Scholarship - Rs. 7,000
          <br /> Summer project Grant per annum - Rs. 28,000
        </>
      ),
    },
    {
      name: "INSPIRE (SHE)",
      details: (
        <>
          Monthly Scholarship - Rs. 5,000
          <br /> Mentorship Grant per annum - Rs. 20,000
        </>
      ),
    },
    {
      name: "IISc Promotional Scheme (IIScP)",
      details: (
        <>
          Monthly Scholarship - Rs. 5,000
          <br /> 1st to 4th year
          <br /> 5th year for student continuing for Masters
        </>
      ),
    },
  ];

  const privateScholarships = [
    "Dr. Priyadarshini Panda UG Fellowship",
    "IISC - Class of 1998 ME(Int) Fellowship",
    "IISC-AANA Midwest Chapter Fellowship for Women in Science",
    "Mallika Fellowship for Women Students",
    "Pratibodh Foundation",
    "Prof. J. Nagaraju Memorial Fellowship for Women",
    "Smt. Jayalakshmi Late Sri K.T. Venkataramachar Women Fellowship",
    "Vasant Natarajan UG Fellowships",
  ];

  return (
    <div className="rounded-lg">
      <div className="relative w-full h-48">
        {/* Background Image */}
        <img
          src={feestructure}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white text-center">
            Fee structure and Scholarship
          </h1>
        </div>
      </div>

      {/* Fee Structure Section */}
      <div className="mb-6 px-8 mt-5">
        <div
          className="flex items-center cursor-pointer p-4 rounded-lg w-fit"
          onClick={() => setIsFeeStructureOpen(!isFeeStructureOpen)}
        >
          <span className="text-gray-600">
            {isFeeStructureOpen ? <FaCaretDown /> : <FaCaretRight />}
          </span>
          <h2 className="text-xl font-semibold text-gray-700">Fee Structure</h2>
        </div>
        {isFeeStructureOpen && (
          <div>
            <div className="overflow-x-auto px-8">
              <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-200">
                      Particulars
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-200">
                      General/OBC/EWS (in ₹/INR)
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      SC/ST/PwD (in ₹/INR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      Tuition Fee
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      10,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Fully waived
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      Gymkhana Fee
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      1,200
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">1,200</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      Other Academic Fees
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      3,700
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">3,700</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      Students Emergency Fund
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      300
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">300</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      Medical Insurance Premium*
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                      3,292
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">3,292</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-r border-gray-200">
                      TOTAL
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700 border-r border-gray-200">
                      18,492
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                      8,492
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Installment Payment Table */}
            <div className="mt-8 px-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Installment Payment
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-r border-gray-200">
                        Installment
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Installment I
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">35%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Installment II
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">35%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-200">
                        Installment III
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <p className="mt-4 text-sm text-gray-600 px-8">
              *Medical Insurance premium is variable
            </p>
          </div>
        )}
      </div>

      {/* Scholarship Section */}
      <div className="mb-6 pl-8">
        <div
          className="flex items-center cursor-pointer p-4 rounded-lg w-fit"
          onClick={() => setIsScholarshipOpen(!isScholarshipOpen)}
        >
          <span className="text-gray-600">
            {isScholarshipOpen ? <FaCaretDown /> : <FaCaretRight />}
          </span>
          <h2 className="text-xl font-semibold text-gray-700">Scholarship</h2>
        </div>
        {isScholarshipOpen && (
          <div className="px-8 rounded-lg">
            {/* Scholarship Details Table */}
            <div className="mb-8">
              <div
                className="cursor-pointer flex items-center"
                onClick={() => setIsFellowshipOpen(!isFellowshipOpen)}
              >
                <span className="text-gray-600">
                  {isFellowshipOpen ? <FaCaretDown /> : <FaCaretRight />}
                </span>
                <h2 className="text-md font-semibold text-orange-400">
                  Scholarships/Fellowships
                </h2>
              </div>
              {isFellowshipOpen && (
                <div className="overflow-x-auto px-8">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          Scholarship/Fellowship Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a
                            href="https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/school/kishore-vaigyanik-protsahan-yojana-kvpy"
                            target="_blank"
                            className="hover:underline  text-blue-400"
                          >
                            KVPY (Up to Batch 2022)
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <p>For 1st to 3rd year</p>
                          <p>Monthly Scholarship - Rs. 5,000</p>
                          <p>Summer project Grant per annum - Rs. 20,000</p>
                          <p>For 4th and 5th year</p>
                          <p>Monthly Scholarship - Rs. 7,000</p>
                          <p>Summer project Grant per annum - Rs. 28,000</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a
                            href="https://www.online-inspire.gov.in/"
                            className="hover:underline  text-blue-400"
                            target="_blank"
                          >
                            INSPIRE (SHE)
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <p>Monthly Scholarship - Rs. 5,000</p>
                          <p>Mentorship Grant per annum - Rs. 20,000</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a
                            href="https://iisc.ac.in/"
                            className="hover:underline  text-blue-400"
                            target="_blank"
                          >
                            IISc Promotional Scheme (IIScP)
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <p>Monthly Scholarship - Rs. 5,000</p>
                          <p>1st to 4th year</p>
                          <p>5th year for student continuing for Masters</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Private Scholarships/Fellowships Table */}
            <div className="mb-8 ">
              <div
                className="cursor-pointer flex items-center"
                onClick={() =>
                  setIsPrivateFellowshipOpen(!isPrivateFellowshipOpen)
                }
              >
                <span className="text-gray-600">
                  {isPrivateFellowshipOpen ? <FaCaretDown /> : <FaCaretRight />}
                </span>
                <h2 className="text-md font-semibold text-orange-400">
                  Private Scholarships/Fellowships
                </h2>
              </div>
              {isPrivateFellowshipOpen && (
                <div className="overflow-x-auto px-8">
                  <table className="min-w-full bg-white rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          Private Scholarship/Fellowship Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                          Program
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/dr-priyadarshini-panda-ug-women-fellowships/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Dr. Priyadarshini Panda UG Fellowship
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/deep-asher-fellowship/"
                            target="_blank"
                            className="hover:underline"
                          >
                            IISc - Class of 1998 ME(Int) Fellowship
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/iisc-aana-midwest-chapter-fellowship-for-women-in-science/"
                            target="_blank"
                            className="hover:underline"
                          >
                            IISc-AANA Midwest Chapter Fellowship for Women in
                          </a>
                          Science
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/mallika-women-in-science-fellowships/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Mallika Fellowship for Women Students
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/pratibhodh-foundation-fellowship-for-women-students/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Pratibodh Foundation
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/prof-j-nagaraju-memorial-fellowship-for-women-ug-students/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Prof. J. Nagaraju Memorial Fellowship for Women
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/jayalakshmi-venkataramanachar-fellowship-women-students/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Smt. Jayalakshmi Late Sri K.T. Venkataramachar Women
                            Fellowship
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-6 py-4 text-sm  text-blue-400">
                          <a
                            href="https://odaa.iisc.ac.in/vasant-natarajan-ug-fellowships/"
                            target="_blank"
                            className="hover:underline"
                          >
                            Vasant Natarajan UG Fellowships
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Four - Year Bachelor of Science (Research)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeAndScholarship;
