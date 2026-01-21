import { useEffect, useState } from "react";
import { electiveData, electiveMonth, semesters } from "../utils/curriculum";
import { coreSemesters } from "../utils/curriculum";
const SubjectsGrid = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState("Biology");
  const [coreActiveTab, setCoreActiveTab] = useState(0);
  const [departmentData, setDepartmentData] = useState();
  const [electiveTab, setElectiveTab] = useState(0);
  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    setCoreActiveTab(0);

    const findDepartment = coreSemesters.find(
      (dept) => dept.coreCourse === department
    );
    setDepartmentData(findDepartment);
  };
  const departments = [
    "Biology",
    "Chemistry",
    "Environmental Science",
    "Materials",
    "Mathematics",
    "Physics",
  ];
  useEffect(() => {
    setSelectedDepartment("Biology");
    setCoreActiveTab(0);
    const findDepartment = coreSemesters.find(
      (dept) => dept.coreCourse === "Biology"
    );
    setDepartmentData(findDepartment);
  }, []);

  return (
    <div className="bg-gray-50">
      <div
        className="relative w-full h-48 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))",
          }}
        ></div>

        {/* Overlay Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Course Structure
          </h1>
        </div>
      </div>
      <div className="py-4  bg-gray-50 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Course Structure Overview
        </h1>
        <p className="mb-2">
          The undergraduate Bachelor of Science (Research) program at IISc is
          designed to provide a strong interdisciplinary foundation. The course
          structure includes three common semesters for all students, where they
          are introduced to essential basic courses across various disciplines.
        </p>
        <p className="">
          At the end of the third semester, students are given the flexibility
          to choose their major specialization from fields such as{" "}
          <b>Biology</b>, <b>Physics</b>, <b>Chemistry</b>, <b>Humanities</b>,{" "}
          <b>Materials</b> and
          <b> Mathematics</b>.
        </p>
      </div>
      <div className="py-8 bg-gray-50 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Basic Courses</h1>
        <p className="mb-4">
          For details on these courses, please{" "}
          <a
            href="https://bs-ug.iisc.ac.in/UG-Biology.pdf"
            className="text-blue-700 hover:underline"
            target="_blank"
          >
            click here
          </a>
        </p>
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {semesters.map((semester, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === index
                  ? "text-white bg-blue-500"
                  : "text-black bg-gray-100 hover:bg-gray-200 font-light"
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
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Course Code
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Course Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Instructor
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Credits
                </th>
              </tr>
            </thead>
            <tbody>
              {semesters[activeTab].courses.map((course, index) => {
                // Check if the course is the OR row
                if (course.name === "OR") {
                  return (
                    <tr key={index} className="bg-gray-100">
                      <td
                        colSpan="4"
                        className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-700"
                      >
                        OR
                      </td>
                    </tr>
                  );
                }

                // Regular course rows
                return (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {course.code}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {course.name}
                      {course.isStarred && (
                        <span className={`text-gray-500 ml-1`}>*</span>
                      )}
                    </td>
                    {course?.instructorProfile ? (
                      <td className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline">
                        <a href={course.instructorProfile} target="_blank">
                          {course.instructor}
                        </a>
                      </td>
                    ) : (
                      <td className="border border-gray-300 px-4 py-2">
                        {course.instructor}
                      </td>
                    )}
                    <td className="border border-gray-300 px-4 py-2">
                      {course.credits}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 px-4 py-2 font-bold text-right"
                >
                  Total Credits
                </td>
                <td className="border border-gray-300 px-4 py-2 font-bold">
                  {semesters[activeTab].totalCredits}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Note Section for Semester 2 and 3 */}
        {activeTab === 1 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-gray-500 ml-1">* </span> choose any 3 out of
              4 from courses in semester {activeTab + 1}
              {/* <ul className="list-disc ml-8 text-gray-600">
                  <li>UBL 102</li>
                  <li>UCY 102</li>
                  <li>UPH 102</li>
                  <li>UMA 102</li>
                </ul> */}
            </p>
          </section>
        )}
        {activeTab === 2 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-gray-500 ml-1">* </span> choose any 3 out of
              4 from courses in semester {activeTab + 1}
              {/* <ul className="list-disc ml-8 text-gray-600">
                  <li>UBL 201</li>
                  <li>UCY 201</li>
                  <li>UPH 201</li>
                  <li>UMA 201</li>
                </ul> */}
            </p>
          </section>
        )}
        {activeTab === 3 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-gray-500 ml-1">* </span> choose electives
              from the soft core courses with respective credits in semester{" "}
              {activeTab + 1}
            </p>
          </section>
        )}
        {activeTab === 4 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-gray-500 ml-1">* </span> choose electives
              from the soft core courses with respective credits in semester{" "}
              {activeTab + 1}
            </p>
          </section>
        )}
        {activeTab === 5 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">Note</h2>
            <p className="text-xs text-gray-600 leading-tight">
              <span className="text-gray-500 ml-1">* </span> choose electives
              from the soft core courses with respective credits in semester{" "}
              {activeTab + 1}
            </p>
          </section>
        )}
        {activeTab === 6 && (
          <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              Semester 7 Options
            </h2>
            <p className="text-xs text-gray-600 leading-tight">
              Students have two primary options for Semester 7:
              <ol className="list-decimal ml-4 mt-2">
                <li>
                  <strong>Course-based Track:</strong> Complete the listed
                  courses with additional electives
                  <ul className="list-disc ml-4">
                    <li>Molecular Systems Biology (CH 248)</li>
                    <li>Bioinformatics (DS 301)</li>
                    <li>
                      Optional: Special Topics in Theoretical Biology (CH 242)
                    </li>
                    <li>Additional electives to complete credits</li>
                  </ul>
                </li>
                <li>
                  <strong>Research Project Track:</strong> Undertake a 16-credit
                  research project under departmental guidance
                  <ul className="list-disc ml-4">
                    <li>Supervised by a departmental advisor</li>
                    <li>Provides in-depth research experience</li>
                    <li>
                      Potential for publication or further academic exploration
                    </li>
                    <li>Additional electives to complete credits</li>
                  </ul>
                </li>
              </ol>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              <strong>Note:</strong> Students must consult with their academic
              advisor to choose the most appropriate track based on their
              academic and career goals.
            </p>
          </section>
        )}
        {/* <div className="mt-4 border-gray-200">
          <p className="">
            All students must complete a total of at least 128 credits
            comprising courses and other components like projects, as specified
            in the course requirements above. The course load for the first
            semester is fixed. Each subsequent semester has a “Normal”,
            “Reduced” and “Enhanced” course load, as specified in Table 1. Based
            on their CGPA and previous-term TGPA, students must register for an
            appropriate course load as specified in Table 2 below. In Semesters
            II and III, only courses listed in Sems I to IV can be credited
            towards an Enhanced load. Any deviation from the recommended load
            will be allowed only with the permission of the Dean.
          </p>
        </div> */}
        {/* Course Load Section */}
      </div>
      <div className="py-8 bg-gray-50 px-8">
        <div className=" bg-gray-50 rounded-lg flex space-x-5 items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Major Disciplines
          </h1>
          {/* <p className="mb-4">
            A student is required to take a specified number of core courses in
            the 1st three semesters. At the end ofthe 3rd semester, each student
            will be assigned a Major discipline (from the lists below) based on
            her/his preferences and CGPA.While a studentspecializesin a Major
            discipline,she/he can also broaden her/his knowledge and skills by
            taking courses in other disciplines. Students who take a sufficient
            number of courses in a discipline other than the chosen Major will
            qualify for a Minor in that discipline.
          </p>
          <p className="mb-6 mt-3">
            The Four-Year Bachelor of Science (Research) Program is organized
            into eight semesters. The following Major disciplines are available
            in the Bachelor of Science (Research) Program.
            <br />
          </p> */}
          <div className="border-l-slate-950 border-l-2 border h-7"></div>
          {/* Department Tabs */}
          <div className="flex space-x-4">
            {departments.map((department, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  selectedDepartment === department
                    ? "text-white bg-sky-600"
                    : "text-blue-500 bg-gray-200 hover:bg-gray-300"
                } `}
                onClick={() => handleDepartmentChange(department)}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
        <hr className="mb-2 mt-5" />
        <p className="mb-10 mt-5">
          For details on these courses, please{" "}
          <a
            href="https://bs-ug.iisc.ac.in/UG-Biology.pdf"
            className="text-blue-700 hover:underline"
            target="_blank"
          >
            click here
          </a>
        </p>
        {/* Tabs for Core Subjects */}
        {selectedDepartment && (
          <div className="flex space-x-4 mb-6">
            {departmentData?.coreSubjects?.map((semester, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium ${
                  coreActiveTab === index
                    ? "text-white bg-blue-500"
                    : "text-black bg-gray-100 hover:bg-gray-200 font-light"
                } rounded-t`}
                onClick={() => setCoreActiveTab(index)}
              >
                {semester.title}
              </button>
            ))}
          </div>
        )}

        {/* Course Table */}
        {selectedDepartment && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Course Code
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Course Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Instructor
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Credits
                  </th>
                </tr>
              </thead>
              <tbody>
                {departmentData?.coreSubjects?.[coreActiveTab].courses.map(
                  (course, index) => {
                    // Check if the course is the OR row
                    if (course.name === "OR") {
                      return (
                        <tr key={index} className="bg-gray-100">
                          <td
                            colSpan="4"
                            className="border border-gray-300 px-4 py-2 text-center font-bold text-gray-700"
                          >
                            OR
                          </td>
                        </tr>
                      );
                    }

                    // Regular course rows
                    return (
                      <tr key={index} className="odd:bg-white even:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {course.code}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.name}
                          {course.isStarred && (
                            <span className={`text-gray-500 ml-1`}>*</span>
                          )}
                        </td>
                        {course?.instructorProfile ? (
                          <td className="border border-gray-300 px-4 py-2 text-blue-600 hover:underline">
                            <a href={course.instructorProfile} target="_blank">
                              {course.instructor}
                            </a>
                          </td>
                        ) : (
                          <td className="border border-gray-300 px-4 py-2">
                            {course.instructor}
                          </td>
                        )}
                        <td className="border border-gray-300 px-4 py-2">
                          {course.credits}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 font-bold text-right"
                  >
                    Total Credits
                  </td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    {departmentData?.coreSubjects?.[coreActiveTab].totalCredits}
                  </td>
                </tr>
              </tfoot>
              {departmentData?.coreSubjects?.[coreActiveTab].ReducedLoad && (
                <tfoot>
                  <tr>
                    <td
                      colSpan="3"
                      className="border border-gray-300 px-4 py-2 font-bold text-right"
                    >
                      Reduced Load
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">
                      {
                        departmentData?.coreSubjects?.[coreActiveTab]
                          .ReducedLoad
                      }
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        )}

        {/* Notes and Electives Section */}
        {selectedDepartment && (
          <>
            {coreActiveTab === 0 && (
              <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-800 mb-2">
                  Note
                </h2>
                <p className="text-xs text-gray-600 leading-tight">
                  <span className="text-gray-500 ml-1">* </span> choose
                  electives with respective credits in semester{" "}
                  {coreActiveTab + 4}
                </p>
              </section>
            )}
            {coreActiveTab === 1 && (
              <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-800 mb-2">
                  Note
                </h2>
                <p className="text-xs text-gray-600 leading-tight">
                  <span className="text-gray-500 ml-1">* </span> choose
                  electives with respective credits in semester{" "}
                  {coreActiveTab + 4}
                </p>
              </section>
            )}
            {coreActiveTab === 2 && (
              <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-800 mb-2">
                  Note
                </h2>
                <p className="text-xs text-gray-600 leading-tight">
                  <span className="text-gray-500 ml-1">* </span> choose
                  electives with respective credits in semester{" "}
                  {coreActiveTab + 4}
                </p>
              </section>
            )}
            {coreActiveTab === 3 && (
              <section className="mt-4 p-4 bg-gray-100 rounded-md border border-gray-200">
                <h2 className="text-sm font-semibold text-gray-800 mb-2">
                  Semester 7 Options
                </h2>
                <p className="text-xs text-gray-600 leading-tight">
                  Students have two primary options for Semester 7:
                  <ol className="list-decimal ml-4 mt-2">
                    <li>
                      <strong>Course-based Track:</strong> Complete the listed
                      courses with additional electives
                      <ul className="list-disc ml-4">
                        <li>Molecular Systems Biology (CH 248)</li>
                        <li>Bioinformatics (DS 301)</li>
                        <li>
                          Optional: Special Topics in Theoretical Biology (CH
                          242)
                        </li>
                        <li>Additional electives to complete credits</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Research Project Track:</strong> Undertake a
                      16-credit research project under departmental guidance
                      <ul className="list-disc ml-4">
                        <li>Supervised by a departmental advisor</li>
                        <li>Provides in-depth research experience</li>
                        <li>
                          Potential for publication or further academic
                          exploration
                        </li>
                        <li>Additional electives to complete credits</li>
                      </ul>
                    </li>
                  </ol>
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Note:</strong> Students must consult with their
                  academic advisor to choose the most appropriate track based on
                  their academic and career goals.
                </p>
              </section>
            )}

            {/* Electives Section */}
            <hr className="mt-4 mb-2 border-b-2 border-black" />
            <p>
              All students must complete a total of at least 131 credits
              comprising courses and other components like projects, as
              specified in the course requirements above. The course load for
              the first three semester are fixed. Each subsequent semester has a
              “Normal” and “Reduced” course load. Based on their CGPA and
              previous-term TGPA, students must register for an appropriate
              course load as specified below. Any deviation from the recommended
              load will be allowed only with the permission of the Dean.
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
              Recomended Course Load
            </h2>
            <section className="mt-1 p-6 bg-gray-50 rounded-md border border-gray-200 px-8">
              <table className="w-full border-collapse border border-gray-300 text-md text-gray-600">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Semester
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Criteria
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Credits
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">1st</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Student needs to register for a fixed number of credits
                    </td>
                    <td className="border border-gray-300 px-4 py-2">18</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">2nd</td>
                    <td className="border border-gray-300 px-4 py-2">
                      No CGPA and TGPA requirements
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Min.: 17 and Max.: 21
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">3rd</td>
                    <td className="border border-gray-300 px-4 py-2">
                      No CGPA and TGPA requirements
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Min.: 17 and Max.: 21
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">4th</td>
                    <td className="border border-gray-300 px-4 py-2">
                      CGPA &lt; 8<br />
                      CGPA ≥ 8
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Min.: 15 and Max.: 17
                      <br />
                      Min.: 15 and Max.: 21
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      5th to 8th
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      CGPA &lt; 8 or Preceding term TGPA &lt; 8<br />
                      CGPA ≥ 8 or Preceding term TGPA ≥ 8
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Min.: 16 and Max.: 18
                      <br />
                      Min.: 16 and Max.: 21
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <div className="mt-4">
              <div className="w-fit pb-4 ">
                <h1 className="text-2xl mt-10 font-semibold">Core Electives</h1>
                <hr className="border-b-1 border-black" />
              </div>
              <div className="mb-4">
                <p>
                  Below is the list of core electives available for students
                  majoring in Biology. These electives are offered by various
                  departments under the Biological Sciences Department i.e;
                  Biochemistry (BC), Microbiology and Cell Biology (MCB), Centre
                  for Neuroscience (CNS), Centre for Ecological Sciences (CES),
                  Molecular Biophysics Unit (MBU), Developmental Biology and
                  Genetics (DBG), and the Department of Bioengineering (formerly
                  BSSE).
                </p>
              </div>
              <div className="mb-5">
                <h3 className="font-semibold">Note :</h3>
                <p>
                  <strong>January Semester</strong>: Please choose courses
                  specifically offered for the January semester. These courses
                  are tailored for the start of the year, and are designed to
                  fit the January academic schedule.
                </p>
                <p>
                  <strong>August Semester</strong>: For those starting in the
                  August semester, select courses that are available for the
                  August intake. These courses align with the second half of the
                  year’s academic calendar.
                </p>
              </div>
              <div className="flex space-x-4 mb-1">
                {electiveMonth.map((month, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm font-medium ${
                      electiveTab === index
                        ? "text-white bg-[#0a6689]"
                        : "text-black bg-gray-100 hover:bg-gray-200"
                    } rounded-t`}
                    onClick={() => setElectiveTab(index)}
                  >
                    {month.title}
                  </button>
                ))}
              </div>
            </div>
            <hr className="mb-5 border-b-1 border-black" />
            {/* Elective Courses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {electiveData?.map((subject, index) => {
                if (subject.title === selectedDepartment) {
                  return subject.courses?.[electiveTab].map((sub) => (
                    <div key={index} className="text-gray-700">
                      <a
                        href={sub?.href ? sub.href : "#"}
                        target={sub?.href ? "_blank" : "_self"}
                        className="text-blue-500 hover:underline"
                      >
                        {sub.code} &nbsp; {sub.name}
                      </a>
                    </div>
                  ));
                }
                return null;
              })}
            </div>
          </>
        )}
      </div>
      {/* Course Load Section */}
      {/* <section className="mt-1 p-6 bg-gray-50 rounded-md border border-gray-200 px-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recomended Course Load
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-md text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Semester
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Criteria
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Credits
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">1st</td>
              <td className="border border-gray-300 px-4 py-2">
                Student needs to register for a fixed number of credits
              </td>
              <td className="border border-gray-300 px-4 py-2">18</td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">2nd</td>
              <td className="border border-gray-300 px-4 py-2">
                No CGPA and TGPA requirements
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Min.: 17 and Max.: 21
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">3rd</td>
              <td className="border border-gray-300 px-4 py-2">
                No CGPA and TGPA requirements
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Min.: 17 and Max.: 21
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">4th</td>
              <td className="border border-gray-300 px-4 py-2">
                CGPA &lt; 8<br />
                CGPA ≥ 8
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Min.: 15 and Max.: 17
                <br />
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
                Min.: 16 and Max.: 18
                <br />
                Min.: 16 and Max.: 21
              </td>
            </tr>
          </tbody>
        </table>
      </section> */}
      <hr className="mt-4 border-b-2 border-black mx-8" />
      <div className="my-4 px-8">
        <h2 className="text-xl font-bold mb-4">
          Continuing for Master of Science Degree:
        </h2>
        <p className="mb-2 ">
          Students have the option to continue for their 5th year to obtain a
          Master of Science degree. To be eligible to exercise this option,
          students must:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>
            Have completed all the requirements of the Bachelor of Science
            degree at the end of their 8th semester
          </li>
          <li>Have a CGPA of 7.0 or more at the end of their 8th semester.</li>
        </ol>
        <p className="mb-2">
          To obtain a Master of Science degree, students need to complete 32
          credits with the following breakup:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>
              13 credits of courses in the 9th and 10th semesters:
            </strong>{" "}
            Students are required to have completed a minimum of 10 credits of
            courses, across the 10 semesters of the Bachelor of Science/Master
            of Science programme.
          </li>
          <li>
            <strong>
              A project of 20 credits in the 9th and 10th semesters.
            </strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubjectsGrid;
