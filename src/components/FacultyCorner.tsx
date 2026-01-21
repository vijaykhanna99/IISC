import anirbanImage from "../assets/anirban-chakraborty.jpg";
import srikantIyer from "../assets/srikanth-iyer.jpg";
import Dipshika from "../assets/Dipshikha-1-scaled.jpg";
import deePakDsouza from "../assets/deepak-dsouza.jpg";
import siddarthaGadgil from "../assets/siddhartha-gadgil.jpg";
import dipanjanGope from "../assets/dipanjan-gope.jpg";
import prasadHegde from "../assets/prasad-hegde.jpg";
import prabalKumarMaiti from "../assets/Prabal-Kumar-Maiti-photo.png";
import shashiJain from "../assets/shashi-jain.jpg";
import vamsiPitam from "../assets/vamsi-pritham.jpg";
import tarunRambha from "../assets/tarun-rambha.jpg";

const FacultyCorner = () => {
  const members = [
    {
      name: "Prabal K. Maiti",
      title: "Dean UG Program",
      image: prabalKumarMaiti,
      profile: "https://physics.iisc.ac.in/~maiti/group-present.html",
    },
    {
      name: "Srikanth K. Iyer",
      title: "Associate Dean BTech Program",
      image: srikantIyer,
      profile: "https://math.iisc.ac.in/~skiyer/",
    },
    {
      name: "Dipshikha Chakravortty",
      title: "Associate dean BS research",
      image: Dipshika,
      profile: "https://mcb.iisc.ac.in/dclab/",
    },
  ];

  const foundingCommitteeMembers = [
    {
      name: "Srikanth Iyer",
      role: "(MA, Chair)",
      image: srikantIyer,
      profile: "https://math.iisc.ac.in/~skiyer/",
    },
    {
      name: "Anirban Chakrabarty",
      role: "(PHY)",
      image: anirbanImage,
      profile: "https://cds.iisc.ac.in/people/anirban-chakraborty/",
    },
    {
      name: "Deepak D'Souza",
      role: "(CSA)",
      image: deePakDsouza,
      profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
    },
    {
      name: "Siddhartha Gadgil",
      role: "(MA)",
      image: siddarthaGadgil,
      profile: "https://math.iisc.ac.in/~gadgil/",
    },
    {
      name: "Dipanjan Gope",
      role: "(ECE)",
      image: dipanjanGope,
      profile: "https://eecs.iisc.ac.in/people/dipanjan-gope/",
    },
    {
      name: "Prasad Hegde",
      role: "(CHEP)",
      image: prasadHegde,
      profile: "https://scholar.google.co.in/citations?user=hvj3D7IAAAAJ&hl=en",
    },
  ];

  const currentCommitteeMembers = [
    {
      name: "Deepak D'Souza",
      role: "(CSA, Chair)",
      image: deePakDsouza,
      profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
    },
    {
      name: "Anirban Chakrabarty",
      role: "(PHY)",
      image: anirbanImage,
      profile: "https://cds.iisc.ac.in/people/anirban-chakraborty/",
    },
    {
      name: "Siddhartha Gadgil",
      role: "(MA)",
      image: siddarthaGadgil,
      profile: "https://math.iisc.ac.in/~gadgil/",
    },
    {
      name: "Dipanjan Gope",
      role: "(ECE)",
      image: dipanjanGope,
      profile: "https://eecs.iisc.ac.in/people/dipanjan-gope/",
    },
    {
      name: "Prasad Hegde",
      role: "(CHEP)",
      image: prasadHegde,
      profile: "https://scholar.google.co.in/citations?user=hvj3D7IAAAAJ&hl=en",
    },
    {
      name: "Shashi Jain",
      role: "(MGMT)",
      image: shashiJain,
      profile: "https://mgmt.iisc.ac.in/shashi-jain/",
    },
    {
      name: "Vamsi Pritam Pingali",
      role: "(MA)",
      image: vamsiPitam,
      profile: "https://math.iisc.ac.in//~vamsipingali/",
    },
    {
      name: "Tarun Rambha",
      role: "(CiSTUP)",
      image: tarunRambha,
      profile: "https://scholar.google.com/citations?user=7lO3hwgAAAAJ&hl=en",
    },
  ];
  //   const facultyAdvisors = [
  //     {
  //       name: "Deepak D'Souza",
  //       role: "(CSA)",
  //       image: deePakDsouza,
  //       profile: "https://eecs.iisc.ac.in/people/deepak-dsouza/",
  //     },
  //     {
  //       name: "Anirban Chakrabarty",
  //       role: "(PHY)",
  //       image: anirbanImage,
  //       profile: "https://cds.iisc.ac.in/people/anirban-chakraborty/",
  //     },
  //     {
  //       name: "Mathew Jacob",
  //       role: "(CHEM)",
  //       image: mathew,
  //       profile:
  //         "https://www.csa.iisc.ac.in/people/matthew-jacob-thazhuthaveetil/",
  //     },
  //     {
  //       name: "Prateek Sharma",
  //       role: "(MATH)",
  //       image: prateekSharma,
  //       profile: "https://physics.iisc.ac.in/people/prateek-sharma/",
  //     },
  //     {
  //       name: "Shishir Kolathaya",
  //       role: "(BIO)",
  //       image: shishirKolathaya,
  //       profile: "https://eecs.iisc.ac.in/people/shishir-kolathaya/",
  //     },
  //   ];

  return (
    <div>
      {/* Deans Section */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold text-blue-800">Deans</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold mt-2 transition-transform duration-300 hover:scale-110  text-blue-600 hover:underline">
                  {member.name}
                </p>
              </a>
              <p className="text-gray-600 text-sm">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Founding Programme Curriculum Committee */}
        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Founding Programme Curriculum Committee
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
          {foundingCommitteeMembers.map((member, index) => (
            <div key={index} className="text-center">
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold mt-2 transition-transform duration-300 hover:scale-110 text-blue-600 hover:underline">
                  {member.name}
                </p>
              </a>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Current Programme Curriculum Committee */}
        <h2 className="text-2xl font-semibold text-blue-800 mt-8">
          Current Programme Curriculum Committee
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4">
          {currentCommitteeMembers.map((member, index) => (
            <div key={index} className="text-center">
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-md mx-auto transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a
                href={member.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-semibold mt-2 transition-transform duration-300 hover:scale-110 text-blue-600 hover:underline">
                  {member.name}
                </p>
              </a>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyCorner;
