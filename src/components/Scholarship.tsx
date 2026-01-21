
const Scholarship = () => {
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
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Scholarships and Fellowships</h2>

      <h3 className="text-lg font-semibold mb-2">Details of Scholarships/Fellowships</h3>

      <table className="w-full border-collapse border border-gray-400 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Scholarship/Fellowship Name</th>
            <th className="border border-gray-400 p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 p-2 font-semibold">{scholarship.name}</td>
              <td className="border border-gray-400 p-2">{scholarship.details}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Private Scholarships/Fellowships</h3>

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Private Scholarship/Fellowship Name</th>
            <th className="border border-gray-400 p-2">Program</th>
          </tr>
        </thead>
        <tbody>
          {privateScholarships.map((scholarship, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 p-2">{scholarship}</td>
              <td className="border border-gray-400 p-2">Four - Year Bachelor of Science (Research)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scholarship;
