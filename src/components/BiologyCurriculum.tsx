import { useState } from "react";

const BiologyCurriculum = () => {
  const [activeTab, setActiveTab] = useState(0);
  const subjects = [
    "Cellular Biology: Introduction to cell structure and functions.",
    "Molecular Biology: Gene expression and molecular genetics.",
    "Genetics: Study of inheritance and DNA replication.",
    "Ecology: Principles of ecosystems and conservation.",
    "Physiology: Study of organ systems and homeostasis.",
    "Biochemistry: Enzymes and metabolism in living organisms.",
    "Evolutionary Biology: Evolutionary theory, natural selection, and speciation.",
    "Microbiology: Study of microorganisms and their ecological and medical significance.",
    "Immunology: Study of the immune system and its role in protecting against diseases.",
    "Biostatistics: Statistical analysis in biological research.",
    "Bioinformatics: Computational methods to analyze biological data.",
    "Genomic Medicine: Application of genomics in personalized healthcare.",
    "Neurobiology: Study of the nervous system and brain function.",
    "Developmental Biology: Study of growth, development, and differentiation in organisms.",
    "Plant Biology: Study of plant structures, functions, and interactions with the environment.",
    "Animal Behavior: Study of the behavior of animals in different environments.",
    "Biophysics: Application of physical principles to biological systems.",
    "Environmental Biology: Study of the interactions between organisms and their environment.",
    "Marine Biology: Study of marine organisms and ecosystems.",
    "Virology: Study of viruses, their biology, and their impact on living organisms."
  ];
  
  const semesters = [
    {
      title: "Semester 1",
      courses: [
        { code: "UH 101", name: "Ways of Knowing", credits: "2:0", instructor: "Dr. A. Smith", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083" },
        { code: "UMA 101", name: "Analysis and Linear Algebra I", credits: "4:0", instructor: "Dr. B. Johnson", isElective: false, instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UBL 101", name: "Introductory Biology I", credits: "3:1", instructor: "Dr. C. Williams", isElective: false,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "UCY 101", name: "Introductory Chemistry I", credits: "3:1", instructor: "Dr. D. Taylor", isElective: false, instructorProfile: "https://shreegirirajhospital.com/dr-krupen-tailor/" },
        { code: "UPH 101", name: "Introductory Physics I", credits: "3:1", instructor: "Dr. E. Anderson", isElective: false, instructorProfile: "https://www.westernlasereye.com/about-us/our-doctors/dr-e-anderson-penno/" },
      ],
      totalCredits: "18",
    },
    {
      title: "Semester 2",
      courses: [
        { code: "UH 102", name: "Ways of Seeing", credits: "2:0", instructor: "Dr. F. Lee", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "UENG 103", name: "Introduction to Earth and its Environment", credits: "3:0", instructor: "Dr. G. Kim", isElective: false,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UBL 102", name: "Introductory Biology II", credits: "3:1", instructor: "Dr. H. Davis", isElective: false, isStarred: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "UCY 102", name: "Introductory Chemistry II", credits: "3:1", instructor: "Dr. I. Moore", isElective: false, isStarred: true,instructorProfile: "https://shreegirirajhospital.com/dr-krupen-tailor/" },
        { code: "UPH 102", name: "Introductory Physics II", credits: "3:1", instructor: "Dr. J. White", isElective: false, isStarred: true, instructorProfile: "https://www.westernlasereye.com/about-us/our-doctors/dr-e-anderson-penno/" },
        { code: "UMA 102", name: "Analysis and Linear Algebra II", credits: "4:0", instructor: "Dr. K. Brown", isElective: false, isStarred: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "UENG 102", name: "Electronics", credits: "3:1", instructor: "Dr. L. Green", isElective: true,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
      ],
      totalCredits: "17-21",
    },
    {
      title: "Semester 3",
      courses: [
        { code: "UH 201", name: "Ways of Doing: Mapping Science-Society Relationship", credits: "2:0", instructor: "Dr. M. Clark", isElective: false,instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "UENG 201", name: "Introduction to Material Science", credits: "3:0", instructor: "Dr. N. Harris", isElective: false,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UBL 201", name: "Introductory Biology III", credits: "3:1", instructor: "Dr. O. Lewis", isElective: false, isStarred: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "UCY 201", name: "Introductory Chemistry III", credits: "3:1", instructor: "Dr. P. Walker", isElective: false, isStarred: true,instructorProfile: "https://shreegirirajhospital.com/dr-krupen-tailor/" },
        { code: "UPH 201", name: "Introductory Physics III", credits: "3:1", instructor: "Dr. Q. Young", isElective: false, isStarred: true, instructorProfile: "https://www.westernlasereye.com/about-us/our-doctors/dr-e-anderson-penno/" },
        { code: "UMA 201", name: "Probability and Statistics", credits: "4:0", instructor: "Dr. R. Hall", isElective: false, isStarred: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "UENG 101", name: "Algorithms and Programming", credits: "3:1", instructor: "Dr. S. Martinez", isElective: true,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
      ],
      totalCredits: "17-21",
    },
    {
      title: "Semester 4",
      courses: [
        { code: "UB 205", name: "Introductory Physiology", credits: "2:0", instructor: "Dr. T. Scott", isElective: false,instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "UB 206", name: "Experiments in Biochemistry and Physiology", credits: "0:2", instructor: "Dr. U. Adams", isElective: false,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UB 207", name: "General Biochemistry", credits: "2:0", instructor: "Dr. V. Taylor", isElective: false,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "-", name: "Elective", credits: "11:15", instructor: "-", isElective: true, isStarred: true, instructorProfile: null },
      ],
      totalCredits: "15-21",
    },
    {
      title: "Semester 5",
      courses: [
        { code: "UB 301L", name: "Experiments in Microbiology", credits: "0:1", instructor: "Dr. W. Perez", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "UB 307L", name: "Experiments in Ecology and Evolution", credits: "0:2", instructor: "Dr. X. Robinson", isElective: false,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UB 309", name: "Genetics", credits: "2:0", instructor: "Dr. Y. King", isElective: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" }, 
        { code: "-", name: "Elective", credits: "14:16", instructor: "-", isElective: true, isStarred: true, instructorProfile: null },
      ],
      totalCredits: "16-18",
    },
    {
      title: "Semester 6",
      courses: [
        { code: "UB 302", name: "Developmental Biology", credits: "2:0", instructor: "Dr. Z. Mitchell", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "UB 303", name: "Experiments in Molecular Biophysics", credits: "0:1", instructor: "Dr. A. Carter", isElective: false,instructorProfile:"https://drbjohnsoncu.wordpress.com/" },
        { code: "UB 304", name: "Experiments in Neurobiology", credits: "0:1", instructor: "Dr. B. Evans", isElective: true,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "-", name: "Elective", credits: "14:17", instructor: "-", isElective: true, isStarred: true, instructorProfile: null },
      ],
      totalCredits: "16-21",
    },
    {
      title: "Semester 7",
      courses: [
        { code: "CH 248", name: "Molecular Systems Biology", credits: "3:0", instructor: "Dr. C. Murphy", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
        { code: "CH 242", name: "Special Topics in Theoretical Biology", credits: "3:0", instructor: "Dr. D. Foster", isElective: true, instructorProfile:"https://drbjohnsoncu.wordpress.com/" }, 
        { code: "DS 301", name: "Bioinformatics", credits: "2:0", instructor: "Dr. E. Rogers", isElective: false,instructorProfile: "https://www.illumefertility.com/about-us/fertility-care-team/dr-shaun-williams" },
        { code: "-", name: "Elective", credits: "08:13", instructor: "-", isElective: true, isStarred: true, instructorProfile: null },
        { code: "-", name: "OR", credits: "-", instructor: "-", isElective: true, instructorProfile: null },
        { code: "UB 490", name: "Research Project", credits: "0:16", instructor: "-", isElective: true, instructorProfile: null },
      ],
      totalCredits: "16-21",
      projectOption: true
    },
    {
      title: "Semester 8",
      courses: [
        { code: "UB 400", name: "Project: Biology", credits: "0:16", instructor: "Dr. F. Harris", isElective: false, instructorProfile:"https://www.mayoclinic.org/biographies/smith-anthony-a-m-d/bio-20054083"  },
      ],
      totalCredits: "16",
    },
  ];
  
  
  return (
    <div className="p-8 bg-gray-50">
      {/* Core Courses Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Biology Courses</h2>
        <ul className="space-y-2">
          <li><strong>Cellular Biology:</strong> Introduction to cell structure, function, and processes like mitosis and meiosis.</li>
          <li><strong>Molecular Biology:</strong> Mechanisms of gene expression, protein synthesis, and molecular genetics.</li>
          <li><strong>Genetics:</strong> Study of inheritance patterns, DNA replication, and genetic mutations.</li>
          <li><strong>Ecology:</strong> Principles of ecosystems, populations, and environmental conservation.</li>
          <li><strong>Physiology:</strong> Study of organ systems, homeostasis, and physiological processes in living organisms.</li>
          <li><strong>Evolutionary Biology:</strong> Evolutionary theory, natural selection, and speciation.</li>
          <li><strong>Biochemistry:</strong> Chemical processes in living organisms, enzymes, and metabolism.</li>
          <li><strong>Microbiology:</strong> The study of microorganisms and their ecological and medical significance.</li>
          <li><strong>Immunology:</strong> Study of the immune system and its role in protecting against diseases.</li>
          <li><strong>Biostatistics:</strong> Introduction to statistical analysis in biological research.</li>
          <li><strong>Bioinformatics:</strong> Application of computational methods to analyze biological data.</li>
        </ul>
      </section>

      {/* Soft Core Courses Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b">Soft Core Courses</h2>
        <p className="mb-4">
          The soft core consists of courses from various disciplines, with students required to take at least 17 credits from this list. These courses can be taken as electives or to fulfill requirements in interdisciplinary streams.
        </p>
      </section>

      {/* Courses List in 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="text-gray-700">
            <a href="#" className="text-blue-500 hover:underline">{subject}</a>
          </div>
        ))}
      </div>

      {/* Note Section: Constraints
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b">Note</h2>
        <p className="mb-4">
          Students can register for <strong>atleast and atmost three of</strong>:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-gray-600">
          <li>
            <strong>UBL 102 Introductory Biology II</strong> OR
          </li>
          <li>
            <strong>UCY 102 Introductory Chemistry II</strong> OR
          </li>
          <li>
            <strong>UPH 102 Introductory Physics II</strong> OR
          </li>
          <li>
            <strong>UMA 102 Analysis and Linear Algebra II</strong>
          </li>
        </ul>

        <p className="mt-6 mb-4">
          Students can register for <strong>at most one of</strong>:
        </p>
        <ul className="list-disc ml-8 space-y-2 text-gray-600">
          <li>
            <strong>UBL 201 Introductory Biology III</strong> OR
          </li>
          <li>
            <strong>UCY 201 Introductory Chemistry III</strong> OR
          </li>
          <li>
            <strong>UPH 201 Introductory Physics III</strong> OR
          </li>
          <li>
            <strong>UMA 201 Probability and Statistics</strong>
          </li>
        </ul>
      </section> */}

      <div className="py-8 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Semester-wise Course Requirements</h1>
          <p className="mb-3">For details on these courses, please <a href="https://bs-ug.iisc.ac.in/UG-Biology.pdf" className="text-blue-700 hover:underline" target="_blank">click here</a></p>
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {semesters.map((semester, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === index
                  ? "text-white bg-blue-500"
                  : "text-blue-500 bg-gray-100 hover:bg-gray-200"
              } rounded-t`}
              onClick={() => setActiveTab(index)}
            >
              {semester.title}
            </button>
          ))}
        </div>

{/* Course Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Course Code</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Course Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Instructor</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
              </tr>
            </thead>
            <tbody>
            {semesters[activeTab].courses.map((course, index) => {
              // Check if the course is the OR row
              if (course.name === "OR") {
                return (
                  <tr key={index} className="bg-gray-100">
                    <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-700">
                      OR
                    </td>
                  </tr>
                );
              }
    
              // Regular course rows
              return (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{course.code}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {course.name}
                    {course.isStarred && (
                      <span className={`${course.name === "Elective" ? "text-gray-500" : "text-red-500"} ml-1`}>*</span>
                    )}
                  </td>
                  {course?.instructorProfile ? 
                    <td className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline">
                      <a href={course.instructorProfile} target="_blank">{course.instructor}</a>
                    </td> :
                    <td className="border border-gray-300 px-4 py-2">{course.instructor}</td>
                  }
                  <td className="border border-gray-300 px-4 py-2">{course.credits}</td>
                </tr>
              );
             })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="border border-gray-300 px-4 py-2 font-bold text-right">Total Credits</td>
                <td className="border border-gray-300 px-4 py-2 font-bold">{semesters[activeTab].totalCredits}</td>
              </tr>
            </tfoot>
          </table>
        </div>

         {/* Note Section for Semester 2 and 3 */}
         {(activeTab === 1) && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-red-500 ml-1">* </span> choose any 3 out of 4 from courses in semester {activeTab + 1}
              {/* <ul className="list-disc ml-8 text-gray-600">
                <li>UBL 102</li>
                <li>UCY 102</li>
                <li>UPH 102</li>
                <li>UMA 102</li>
              </ul> */}
            </p>
          </section>
         )}
         {(activeTab === 2) && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
            <span className="text-red-500 ml-1">* </span> choose any 3 out of 4 from courses in semester {activeTab + 1}
              {/* <ul className="list-disc ml-8 text-gray-600">
                <li>UBL 201</li>
                <li>UCY 201</li>
                <li>UPH 201</li>
                <li>UMA 201</li>
              </ul> */}
            </p>
          </section>
         )}
         {(activeTab === 3) && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
            <span className="text-gray-500 ml-1">* </span> choose electives from the soft core courses with respective credits in semester {activeTab + 1}
              
            </p>
          </section>
         )}
         {(activeTab === 4) && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
            <span className="text-gray-500 ml-1">* </span> choose electives from the soft core courses with respective credits in semester {activeTab + 1}
              
            </p>
          </section>
         )}
         {(activeTab === 5) && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
            <span className="text-gray-500 ml-1">* </span> choose electives from the soft core courses with respective credits in semester {activeTab + 1}
              
            </p>
          </section>
         )}
         {(activeTab === 6) && (
      <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
        <h2 className="text-sm font-semibold text-gray-800 mb-2">Semester 7 Options</h2>
        <p className="text-xs text-gray-600 leading-tight">
          Students have two primary options for Semester 7:
          <ol className="list-decimal ml-4 mt-2">
            <li>
              <strong>Course-based Track:</strong> Complete the listed courses with additional electives
              <ul className="list-disc ml-4">
                <li>Molecular Systems Biology (CH 248)</li>
                <li>Bioinformatics (DS 301)</li>
                <li>Optional: Special Topics in Theoretical Biology (CH 242)</li>
                <li>Additional electives to complete credits</li>
              </ul>
            </li>
            <li>
              <strong>Research Project Track:</strong> Undertake a 16-credit research project under departmental guidance
              <ul className="list-disc ml-4">
                <li>Supervised by a departmental advisor</li>
                <li>Provides in-depth research experience</li>
                <li>Potential for publication or further academic exploration</li>
                <li>Additional electives to complete credits</li>
              </ul>
            </li>
          </ol>
        </p>
        <p className="text-xs text-gray-600 mt-2">
          <strong>Note:</strong> Students must consult with their academic advisor to choose the most appropriate track based on their academic and career goals.
        </p>
      </section>
    )}


          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              Electives for Biology Major and Minor: In addition to the above courses, electives offered by the Biological Sciences departments (Biochemistry, Microbiology and Cell Biology, Centre for Neuroscience, Centre for Ecological Sciences, Molecular Biophysics Unit, Developmental Biology and Genetics), courses for Integrated Ph.D. by Biological Science Division (DB Course Codes), and Department of Bioengineering (formerly BSSE) will be considered towards Biology Major and Minor electives.
            </p>
          </section>
            <div className="mt-4 border-gray-200">
              <p className="">
              All students must complete a total of at least 128 credits comprising courses and other components like projects, as specified in the course requirements above. The course load for the first semester is fixed. Each subsequent semester has a “Normal”, “Reduced” and “Enhanced” course load, as specified in Table 1. Based on their CGPA and previous-term TGPA, students must register for an appropriate course load as specified in Table 2 below. In Semesters II and III, only courses listed in Sems I to IV can be credited towards an Enhanced load. Any deviation from the recommended load will be allowed only with the permission of the Dean.
              </p>
            </div>
          {/* Course Load Section */}
          <section className="mt-8 p-6 bg-gray-50 rounded-md border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recomended Course Load</h2>
            <table className="w-full border-collapse border border-gray-300 text-sm text-gray-600">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Semester</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Criteria</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">1st</td>
                  <td className="border border-gray-300 px-4 py-2">Student needs to register for a fixed number of credits</td>
                  <td className="border border-gray-300 px-4 py-2">18</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">2nd</td>
                  <td className="border border-gray-300 px-4 py-2">No CGPA and TGPA requirements</td>
                  <td className="border border-gray-300 px-4 py-2">Min.: 17 and Max.: 21</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">3rd</td>
                  <td className="border border-gray-300 px-4 py-2">No CGPA and TGPA requirements</td>
                  <td className="border border-gray-300 px-4 py-2">Min.: 17 and Max.: 21</td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">4th</td>
                  <td className="border border-gray-300 px-4 py-2">
                    CGPA &lt; 8<br />
                    CGPA ≥ 8
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Min.: 15 and Max.: 17<br />
                    Min.: 15 and Max.: 21
                  </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">5th to 8th</td>
                  <td className="border border-gray-300 px-4 py-2">
                    CGPA &lt; 8 or Preceding term TGPA &lt; 8<br />
                    CGPA ≥ 8 or Preceding term TGPA ≥ 8
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Min.: 16 and Max.: 18<br />
                    Min.: 16 and Max.: 21
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
              <hr className="mt-4 border-b-2 border-black"/>
          <div className="my-4">
          <h2 className="text-xl font-bold mb-4">Continuing for Master of Science Degree:</h2>
          <p className="mb-2">
            Students have the option to continue for their 5th year to obtain a Master of Science degree in Mathematics and Computing. To be eligible to exercise this option, students must:
          </p>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              Have completed all the requirements of the Bachelor of Science  degree at the end of their 8th semester; and
            </li>
            <li>Have a CGPA of 7.0 or more at the end of their 8th semester.</li>
          </ol>
          <p className="mb-2">
            To obtain a Master of Science degree, students need to complete 32 credits with the following breakup:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>13 credits of courses in the 9th and 10th semesters:</strong> Students are required to have completed a minimum of 10 credits of courses, across the 10 semesters of the Bachelor of Science/Master of Science programme.
            </li>
            <li>
              <strong>A project of 20 credits in the 9th and 10th semesters.</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BiologyCurriculum;
