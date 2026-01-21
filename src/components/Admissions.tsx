import React, { useState } from "react";

const Admissions = () => {
  const [faqOpen, setFaqOpen] = useState({});

  // Toggle FAQ answer visibility
  const toggleFaq = (id) => {
    setFaqOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "When do admissions start?",
      answer: "Admissions start every year in January.",
    },
    {
      id: 2,
      question: "What is the selection process?",
      answer:
        "The selection process includes an entrance exam and an interview.",
    },
    {
      id: 3,
      question: "How can I apply online?",
      answer:
        "You can apply online by clicking the 'Apply Online' button above.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Admissions</h1>

      {/* Apply Online Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Apply Online</h2>
        <p className="text-gray-700 mb-4">
          Click the button below to start your application.
        </p>
        <a
          href="/apply"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Apply Online
        </a>
      </section>

      {/* Admission Dates Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Admission Dates</h2>
        <p className="text-gray-700">
          Admissions are open from{" "}
          <strong className="text-blue-600">January 1st to March 31st</strong>{" "}
          every year.
        </p>
      </section>

      {/* Selection Process Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Selection Process</h2>
        <p className="text-gray-700">
          Our selection process includes the following steps:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Submission of online application</li>
          <li>Entrance exam</li>
          <li>Personal interview</li>
          <li>Final selection and offer letter</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg overflow-hidden">
              <div
                className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition duration-300"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              </div>
              {faqOpen[faq.id] && (
                <div className="p-4 bg-white border-t text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admissions;
