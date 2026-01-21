const MessageFromDirector = () => {
    return (
      <div>
        {/* Title Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-700 border-l-4 border-red-700 pl-2">
            Message from the Director
          </h2>
        </div>
  
        {/* Main Content: Image on Left, Text on Right */}
        <div className="flex flex-col items-start lg:flex-row md:items-center p-6 bg-white shadow-md rounded-lg">
          
          {/* Left Section: Image */}
          <div className="p-4">
            <img
              src="https://iiscprofiles.irins.org/assets/profile_images/57785.jpg"
              alt="Director"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          {/* Right Section: Text Content */}
          <div className="lg:w-2/3 p-4">
            <p className="mt-4 text-gray-700">Greetings to all!</p>
            <p className="mt-2 text-gray-600">
              It is with great pleasure that I write this in the capacity of the Director of this
              prestigious institute. I thank all the faculty members, students, and staff of IISc
              Bangalore for their continuing efforts every day in keeping this distinguished
              institute of national importance at the top of the ranking scales, year after year.
            </p>
            <p className="mt-2 text-gray-600">
            The role of a campus in ensuring quality learning is of great significance and IISC, which already has a world-class campus, will now ensure it is further infused with the spirit of inclusivity, by celebrating the pluralism of cultures, nationalities, and personalities in a global world. We envision our campus to reflect the ethos of innovation, entrepreneurship, and dynamism of spirit. Each IISC student should foster an endless, restless quest to look for solutions to real-world problems thereby contributing to the society we live in and helping our nation truly be "atma-nirbhar" (self-reliant). I envisage the good presence of IISC to be perceptibly felt far beyond the walls of our campus, wherein every corner of our country and thereby the world, is able to tangibly feel the difference we intend to make to society with our leading innovations combined with our determined efforts to make the world a better place to live in.
            </p>
            <p className="mt-2 text-gray-600">
            A parallel area of focus should also be the micro-issues that impact the immediate society around us. These could be at a local level, or perhaps even at a community level. We must invest time to work on those problems and come up with feasible solutions. Giving back to society we operate in is a crucial guiding principle we must all bear in mind at all times. I re-affirm my commitment which I've made to ensure enhanced focus on local issues of relevance.
            </p>
            <p className="mt-2 text-gray-600">
            To conclude, I once again welcome you to this great centre of learning where the world amalgamates. Let us all continue to hold the torch high of IISC as we look in to the future.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageFromDirector;
  