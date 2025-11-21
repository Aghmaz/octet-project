import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const Template3 = forwardRef((props, ref) => {
  const { personalInfo, education, work, skills, references } = useSelector(
    (state) => state.resume
  );

  return (
    <div
      ref={ref}
      className="w-full max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md text-gray-900 font-sans"
    >
      {/* NAME + PERSONAL DETAILS */}
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-blue-800">
          {personalInfo.fullName || "Your Full Name"}
        </h1>
        <div className="text-sm text-gray-700 mt-2 space-y-1">
          {personalInfo.title && <div>{personalInfo.title}</div>}
          {personalInfo.email && <div className="break-all">{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
      </header>

      <hr className="border-gray-200 mb-6" />

      {/* WORK / EXPERIENCE */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Experience</h2>

        {work && work.length > 0 ? (
          work.map((job, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-4 mb-6">
              {/* DATE column */}
              <div className="col-span-3 text-sm text-gray-500 mt-1">
                <div className="whitespace-nowrap">
                  {job.startDate || ""} {job.startDate && job.endDate ? " - " : ""}
                  {job.isPresent ? "Present" : job.endDate || ""}
                </div>
              </div>

              {/* CONTENT column */}
              <div className="col-span-9">
                {/* Line 1: Position (left) and optionally date on same line removed because date is in left column */}
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-lg text-gray-900 ">
                    {job.position || "Position"}
                  </div>
                </div>

                {/* Company + Location (line 2) */}
                {(job.company || job.location) && (
                  <div className="text-sm text-gray-600 mt-1">
                    {job.company || ""}
                    {job.company && job.location
                      ? ` • ${job.location}`
                      : job.location
                      ? job.location
                      : ""}
                  </div>
                )}

                {/* Description bullets */}
                {job.description && (
                  Array.isArray(job.description) ? (
                    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700">
                      {job.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700">
                      {job.description.split("\n").map((line, i) =>
                        line.trim() ? <li key={i}>{line}</li> : null
                      )}
                    </ul>
                  )
                )}

                {/* Key Achievement pill */}
                {job.keyAchievement && (
                  <div className="mt-2">
                    <span className="inline-block text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      {job.keyAchievement}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No work experience added...</p>
        )}
      </section>

      {/* EDUCATION */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-blue-800">Education</h2>

        {education && education.length > 0 ? (
          education.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-12 gap-4 mb-6">
              {/* DATE column */}
              <div className="col-span-3 text-sm text-gray-500">
                <div className="whitespace-nowrap mt-1">
                  {edu.startDate || ""} {edu.startDate && edu.endDate ? " - " : ""}
                  {edu.isPresent ? "Present" : edu.endDate || ""}
                </div>
              </div>

              {/* CONTENT */}
              <div className="col-span-9 ">
                <div className="font-semibold text-lg">{edu.degree || "Degree"}</div>
                <div className="text-sm text-gray-600 ">
                  {edu.institution || "Institution"}
                </div>

                {edu.description && (
                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-700">
                    {edu.description.split("\n").map((line, i) =>
                      line.trim() ? <li key={i}>{line}</li> : null
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No education details...</p>
        )}
      </section>

      {/* SKILLS */}
      <section className="mb-6 grid grid-cols-12 gap-4 items-start">
        <div className="col-span-3 text-lg font-bold text-blue-800">Skills</div>
        <div className="col-span-9">
          {skills && skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <span key={i} className="text-sm px-3 py-1 bg-gray-100 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No skills added...</p>
          )}
        </div>
      </section>

      {/* REFERENCES */}
      <section className="mb-6 grid grid-cols-12 gap-4 items-start">
        <div className="col-span-3 text-lg font-bold text-blue-800">References</div>
        <div className="col-span-9">
          {references && references.length > 0 ? (
            references.map((r, i) => (
              <div key={i} className="mb-3">
                <div className="font-semibold">{r.name}</div>
                {r.title && (
                  <div className="text-sm text-gray-600">
                    {r.title}
                    {r.company ? ` • ${r.company}` : ""}
                  </div>
                )}
                {r.email && (
                  <div className="text-sm text-gray-600 mt-1 break-all">{r.email}</div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">No references added...</p>
          )}
        </div>
      </section>
    </div>
  );
});

Template3.displayName = "Template3";
export default Template3;
