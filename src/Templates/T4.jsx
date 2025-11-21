import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const Template4 = forwardRef((props, ref) => {
  const { personalInfo, education, work, skills, references } = useSelector((state) => state.resume);

  // Fixed modern color
  

  // helper: initials
  const initials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  // robust description getter for work item
  const getWorkDescription = (item) => {
    return item.description || item.summary || item.details || item.desc || "";
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center py-8 px-4">
      <div
        ref={ref}
        className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden"
        style={{ minHeight: "auto" }}
      >
        {/* TOP HEADER - centered initials + name + title */}
        <header className="w-full" >
          <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col items-center text-center">
            

            <h1 className={`mt-4 text-2xl md:text-3xl font-bold  uppercase tracking-wide`}>
              {personalInfo.fullName || "YOUR FULL NAME"}
            </h1>
            <p className={`mt-1 text-sm md:text-base  opacity-90 uppercase`}>
              {personalInfo.title || "PROFESSIONAL TITLE"}
            </p>
          </div>
        </header>

        {/* MAIN CONTENT - all stacked vertically below header */}
        <main className="max-w-3xl mx-auto px-6 py-6">
          {/* Contact */}
          <section className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700">Contact</h3>
            <ul className="mt-3 text-sm leading-relaxed space-y-2">
              {personalInfo.email && (
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 bg-gray-400 flex-shrink-0" />
                  <span className="break-words">{personalInfo.email}</span>
                </li>
              )}
              {personalInfo.phone && (
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 bg-gray-400 flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </li>
              )}
              {personalInfo.location && (
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 bg-gray-400 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </li>
              )}
              {personalInfo.website && (
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 bg-gray-400 flex-shrink-0" />
                  <span className="break-words">{personalInfo.website}</span>
                </li>
              )}
            </ul>
          </section>


          {/* Objective */}
          <section className="mb-6  p-4 rounded">
            <h4 className="text-sm text-center p-1 bg-gray-200 font-semibold uppercase tracking-wider">Objective</h4>
            <p className="text-sm  mt-2 whitespace-pre-wrap">
              {personalInfo.about || "Write a short summary of your experience and career objective..."}
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h4 className="text-sm text-center p-1  bg-gray-200 font-semibold text-gray-700 uppercase tracking-wider">Education</h4>
            <div className="mt-3 space-y-4">
              {education && education.length > 0 ? (
                education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-semibold text-gray-900">{edu.institution || "Institution"}</p>
                    <p className="text-sm text-gray-700">{edu.degree || "Degree"} {edu.startDate ? `• ${edu.startDate}` : ""} {edu.isPresent ? "- Present" : edu.endDate ? `- ${edu.endDate}` : ""}</p>
                    {edu.description && <p className="text-gray-700 text-sm mt-2 break-words whitespace-pre-wrap">{edu.description}</p>}
                    
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">Add education details...</p>
              )}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h4 className="text-sm text-center bg-gray-200 p-1 font-semibold text-gray-700 uppercase tracking-wider">Work Experience</h4>
            <div className="mt-3 space-y-4">
              {work && work.length > 0 ? (
                work.map((item, i) => {
                  const desc = getWorkDescription(item);
                  return (
                    <div key={i} className="pb-2 border-b last:border-b-0 border-gray-100">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">{item.position || "Position"}</p>
                          <p className="text-sm text-gray-700 mt-1">{item.company || ""}</p>
                        </div>
                        <div className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                          {item.startDate || ""} {item.isPresent ? "- Present" : item.endDate ? `- ${item.endDate}` : ""}
                        </div>
                      </div>

                      {item.responsibilities && item.responsibilities.length > 0 && (
                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                          {item.responsibilities.map((r, idx) => (
                            <li key={idx} className="break-words">{r}</li>
                          ))}
                        </ul>
                      )}

                      {desc ? <p className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{desc}</p> : null}
                    </div>
                  );
                })
              ) : (
                <p className="text-gray-600 italic text-sm">Add work experience...</p>
              )}
            </div>
          </section>

          {/* Activities */}
          {/* {personalInfo.activities && (
            <section className="mb-6">
              <h4 className="text-sm  text-center font-semibold text-gray-700 uppercase tracking-wider">Activities</h4>
              <p className="text-sm text-gray-700 mt-2 whitespace-pre-wrap">{personalInfo.activities}</p>
            </section>
          )} */}

          <section className="mb-6">
            <h3 className="text-xs text-center bg-gray-200 p-1  font-semibold uppercase tracking-wider text-gray-700">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills && skills.length > 0 ? (
                skills.map((s, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 bg-gray-100 text-gray-800 shadow-sm"
                    title={s}
                  >
                    {s}
                  </span>
                ))
              ) : (
                <p className="text-gray-600 italic text-sm">Add skills...</p>
              )}
            </div>
          </section>

           <section className="mb-6">
            <h3 className="text-xs text-center bg-gray-200 p-1 font-semibold uppercase tracking-wider text-gray-700">Reference</h3>
            <div className="mt-3 text-sm text-gray-700 leading-relaxed">
              {references && references.length > 0 ? (
                references.map((r, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="font-semibold">{r.name}</p>
                    {r.title && <p className="text-xs text-gray-600">{r.title}{r.company && ` • ${r.company}`}</p>}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 italic">Add awards or references...</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

Template4.displayName = "Template4";

export default Template4;
