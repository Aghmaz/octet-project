import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const Template5 = forwardRef((props, ref) => {
  const { personalInfo, work, education, skills } = useSelector((state) => state.resume);

  return (
    <div ref={ref} className="bg-white text-gray-900 w-[850px] mx-auto p-10 border-t-8 border-red-500 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-red-600">{personalInfo.fullName}</h1>
      <p className="text-gray-500">{personalInfo.title}</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b-2 border-red-500 inline-block">Experience</h2>
        {work.map((job, i) => (
          <div key={i} className="mt-3">
            <p className="font-semibold">{job.position} - {job.company}</p>
            <p className="text-sm text-gray-600">{job.startDate} - {job.isPresent ? "Present" : job.endDate}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b-2 border-red-500 inline-block">Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="mt-2">
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-gray-600">{edu.institution}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold border-b-2 border-red-500 inline-block">Skills</h2>
        <ul className="flex flex-wrap gap-2 mt-2">
          {skills.map((s, i) => (
            <li key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full">{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
});

Template5.displayName = "Template5";

export default Template5;
