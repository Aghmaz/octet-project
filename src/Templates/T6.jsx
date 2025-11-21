import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const Template6 = forwardRef((props, ref) => {
  const { personalInfo, education, work, skills } = useSelector((state) => state.resume);

  return (
    <div ref={ref} className="bg-gradient-to-r from-yellow-50 to-white text-gray-900 w-[850px] mx-auto shadow-md p-10 rounded-xl">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-600">{personalInfo.fullName}</h1>
        <p className="text-gray-700">{personalInfo.title}</p>
        <p className="text-sm text-gray-500">{personalInfo.email} | {personalInfo.phone}</p>
      </header>

      <section className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold border-b border-yellow-400 mb-2">Work Experience</h2>
          {work.map((job, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{job.position}</p>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm">{job.startDate} - {job.isPresent ? "Present" : job.endDate}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold border-b border-yellow-400 mb-2">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.institution}</p>
            </div>
          ))}

          <h2 className="text-lg font-semibold border-b border-yellow-400 mt-4 mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <li key={i} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">{s}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
});

Template6.displayName = "Template6";

export default Template6;
