


import React from 'react';
import { useSelector } from 'react-redux';

const ResumePreview = () => {
  const { personalInfo, work, education, skills, references, selectedTemplate } = useSelector((state) => state.resume);

  return (
    <div className="p-4 bg-white border rounded-lg shadow min-h-[400px]">
      <h3 className="text-lg font-bold mb-2">
        {/* Template: {selectedTemplate ? selectedTemplate : "None Selected"} */}
      </h3>

      {/* Personal Info */}
      <h4 className="font-semibold mt-2">Personal Information</h4>
      <p><strong>Name:</strong> {personalInfo.fullName}</p>
      <p><strong>Title:</strong> {personalInfo.title}</p>
      <p><strong>Email:</strong> {personalInfo.email}</p>
      <p><strong>Phone:</strong> {personalInfo.phone}</p>
      <p><strong>Location:</strong> {personalInfo.location}</p>
      <p><strong>About:</strong> {personalInfo.about}</p>

      {/* Work */}
      <h4 className="font-semibold mt-4">Work Experience</h4>
      {work.map((w, i) => (
        <div key={i} className="mb-3 border-l-2 border-blue-500 pl-3">
          <p><strong>{w.position}</strong> at <strong>{w.company}</strong></p>
          <p className="text-sm text-gray-600">{w.location}</p>
          <p className="text-sm text-gray-600">
            {w.startDate} - {w.isPresent ? 'Present' : w.endDate}
          </p>
          <p className="text-sm mt-1">{w.description}</p>
        </div>
      ))}

      {/* Education */}
      <h4 className="font-semibold mt-4">Education</h4>
      {education.map((e, i) => (
        <div key={i} className="mb-3 border-l-2 border-green-500 pl-3">
          <p><strong>{e.degree}</strong></p>
          <p className="text-sm text-gray-600">{e.institution} - {e.location}</p>
          <p className="text-sm text-gray-600">
            {e.startDate} - {e.isPresent ? 'Present' : e.endDate}
          </p>
          <p className="text-sm mt-1">{e.description}</p>
        </div>
      ))}

      {/* Skills */}
      <h4 className="font-semibold mt-4">Skills</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {s}
          </span>
        ))}
      </div>

      {/* References */}
      <h4 className="font-semibold mt-4">References</h4>
      {references.map((r, i) => (
        <div key={i} className="mb-3 border-l-2 border-purple-500 pl-3">
          <p><strong>{r.name}</strong> - {r.title}</p>
          <p className="text-sm text-gray-600">{r.company}</p>
          <p className="text-sm text-gray-600">{r.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumePreview;
