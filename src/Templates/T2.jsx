import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const Template2 = forwardRef(({ hideAvatar = false }, ref) => {
  const { personalInfo, education, work, skills, references } = useSelector(
    (state) => state.resume
  );

  return (
    <div className="w-full flex justify-center">
      <article ref={ref} className="w-[900px] max-w-full shadow-2xl bg-white rounded-lg overflow-hidden">
    
        <div className="p-10">
       
         <header className="flex flex-wrap justify-between items-start gap-4 border-b border-gray-300 pb-4 mt-6">
  {/* Left side — Name and Title */}
  <div className="flex-1 min-w-0">
    <h1 className="text-3xl font-bold text-gray-900 break-words">
      {personalInfo.fullName || "Your Full Name"}
    </h1>
    <p className="text-sm text-gray-600 mt-1 break-words">
      {personalInfo.title || "Professional Title"}
    </p>
  </div>

  {/* Right side — Contact Info */}
  <div className="text-right text-sm text-gray-700 leading-relaxed flex-shrink-0">
    <div className="break-words break-all">{personalInfo.email || "youremail@example.com"}</div>
    <div className="break-words">{personalInfo.phone || "+00 000 0000000"}</div>
    <div className="break-words">{personalInfo.location || "City, Country"}</div>
  </div>
</header>

          <hr className="my-6 border-gray-200" />

          {/* About */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">About</h2>
            <p className="text-gray-700 mt-2 text-sm break-words whitespace-pre-wrap">{personalInfo.about || "Write something about yourself..."}</p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Work Experience</h2>
            <div className="mt-3 space-y-4">
              {work && work.length > 0 ? (
                work.map((job, i) => (
                  <div key={i} className="pb-3 border-b last:border-b-0 border-gray-200">
                    <p className="font-semibold text-lg text-gray-900 break-words">
                      {job.position || "Position"} <span className="font-normal text-gray-600">— {job.company || "Company"}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1 break-words">{(job.startDate || "")} {job.startDate && job.endDate ? "—" : ""} {job.isPresent ? "Present" : job.endDate || ""}</p>
                    <p className="text-gray-700 text-sm mt-2 break-words whitespace-pre-wrap">{job.description || "Add responsibilities and achievements..."}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">Add work experience...</p>
              )}
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            <div className="mt-3 space-y-4">
              {education && education.length > 0 ? (
                education.map((edu, i) => (
                  <div key={i} className="pb-3 border-b last:border-b-0 border-gray-200">
                    <p className="font-semibold text-lg text-gray-900 break-words">{edu.degree || "Degree"} <span className="font-normal text-gray-600">— {edu.institution || "Institution"}</span></p>
                    <p className="text-xs text-gray-500 mt-1 break-words">{(edu.startDate || "")} {edu.startDate && edu.endDate ? "—" : ""} {edu.isPresent ? "Present" : edu.endDate || ""}</p>
                    {edu.description && <p className="text-gray-700 text-sm mt-2 break-words whitespace-pre-wrap">{edu.description}</p>}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">Add education details...</p>
              )}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills && skills.length > 0 ? (
                skills.map((s, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full border border-gray-300 text-gray-800 bg-gray-50">{s}</span>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">Add skills...</p>
              )}
            </div>
          </section>

          

          {/* References */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">References</h2>
            <div className="mt-3 space-y-4 text-sm text-gray-700">
              {references && references.length > 0 ? (
                references.map((r, i) => (
                  <div key={i}>
                    <div className="font-semibold text-gray-900 break-words">{r.name || "Reference Name"}</div>
                    {r.title && <div className="text-xs text-gray-500 break-words">{r.title}{r.company && ` — ${r.company}`}</div>}
                    {r.email && <div className="mt-1 break-words break-all">{r.email}</div>}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic">Add references...</p>
              )}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
});

Template2.displayName = "Template2";

export default Template2;
