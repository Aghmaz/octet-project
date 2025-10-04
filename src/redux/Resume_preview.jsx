


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
        <p key={i}>{w.role} at {w.company} ({w.years})</p>
      ))}

      {/* Education */}
      <h4 className="font-semibold mt-4">Education</h4>
      {education.map((e, i) => (
        <p key={i}>{e.degree} - {e.school} ({e.year})</p>
      ))}

      {/* Skills */}
      <h4 className="font-semibold mt-4">Skills</h4>
      <ul className="list-disc ml-6">
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      {/* References */}
      <h4 className="font-semibold mt-4">References</h4>
      {references.map((r, i) => (
        <p key={i}>{r.name} - {r.contact}</p>
      ))}
    </div>
  );
};

export default ResumePreview;
