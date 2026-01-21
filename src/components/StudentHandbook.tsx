

const StudentHandbook = () => {
    return (
        <div className="p-6 min-h-80">
          <h1 className="text-3xl font-bold text-gray-900">STUDENT HANDBOOK</h1>
          <p className="text-gray-700 mt-2">
            The student handbook of IISc Bangalore provides access to information about the services, 
            resources, policies, and procedures for the students.
          </p>
          📄
          <a 
            href="https://iisc.ac.in/wp-content/uploads/2024/09/UG-Handbook-2024-25-signed.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
             Click here to Download handbook
          </a>
        </div>
      );
}

export default StudentHandbook