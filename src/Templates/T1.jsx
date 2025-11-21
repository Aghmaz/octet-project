import React, { forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateThemeColor } from "../redux/Resume_slice";

const Template1 = forwardRef((props, ref) => {
  const { personalInfo, education, work, skills, references, themeColor } = useSelector(
    (state) => state.resume
  );
  const dispatch = useDispatch();

  // Auto Text Contrast System
  const getTextColor = (bg) => {
    const c = bg.substring(1);
    const rgb = parseInt(c, 16);
    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160 ? "text-gray-900" : "text-white";
  };

  const textColor = getTextColor(themeColor);

  return (
    <div className="w-full flex flex-col items-center  ">
      <div ref={ref} className="w-full max-w-7xl bg-white shadow-2xl grid grid-cols-3 rounded-xl overflow-hidden">

        {/* LEFT SIDE */}
        <div
          className="col-span-1 p-10 space-y-16"
          style={{ backgroundColor: themeColor }}
        >

          {/* NAME */}
          <div>
            <h1 className={`text-3xl font-bold ${textColor}`}>
              {personalInfo.fullName || "Your Full Name"}
            </h1>
            <p className={`text-sm mt-1 ${textColor}`}>
              {personalInfo.title || "Professional Title"}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className={`text-lg font-semibold mb-2 ${textColor}`}>Contact</h2>
            <p className={`${textColor} text-sm break-all leading-relaxed`}>{personalInfo.email || "youremail@example.com"}</p>
            <p className={`${textColor} text-sm`}>{personalInfo.phone || "+00 000 0000000"}</p>
            <p className={`${textColor} text-sm break-words`}>{personalInfo.location || "Your City, Country"}</p>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className={`text-lg font-semibold mb-2 ${textColor}`}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded border ${
                      textColor === "text-white" ? "border-white text-white" : "border-gray-700 text-gray-900"
                    } bg-white/10`}
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className={`${textColor} text-sm italic`}>Add skills...</p>
              )}
            </div>
          </div>

          {/* REFERENCES */}
          <div>
            <h2 className={`text-lg font-semibold mb-2 ${textColor}`}>References</h2>
            {references.length > 0 ? (
              references.map((ref, i) => (
                <div key={i} className="space-y-1 mb-3">
                  <p className={`${textColor} text-sm font-semibold`}>
                    {ref.name || "Reference Name"}
                  </p>
                  {ref.title && (
                    <p className={`${textColor} text-xs opacity-90 leading-relaxed break-words`}>
                      {ref.title}
                      {ref.company && ` at ${ref.company}`}
                    </p>
                  )}
                  {ref.email && (
                    <p className={`${textColor} text-xs opacity-75 leading-relaxed break-all`}>
                      {ref.email}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className={`${textColor} text-sm italic`}>Add references...</p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE (MAIN CONTENT) */}
        <div className="col-span-2 p-16 space-y-14 leading-relaxed">

          {/* ABOUT */}
          <section className="space-y-3 min-h-[120px]">
            <h2 className="text-2xl font-semibold text-gray-900">About</h2>
            <p className="text-gray-700 text-sm">
              {personalInfo.about || "Write something about yourself..."}
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="space-y-3 min-h-[220px]">
            <h2 className="text-2xl font-semibold text-gray-900">Work Experience</h2>
            {work.length > 0 ? (
              work.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-semibold text-gray-900 text-lg">
                    {item.position || "Position"} — {item.company || "Company"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.startDate || ""} - {item.isPresent ? "Present" : item.endDate || ""}
                  </p>
                  <p className="text-gray-700 text-sm min-h-[40px]">
                    {item.description || ""}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 italic text-sm">Add work experience...</p>
            )}
          </section>

          {/* EDUCATION */}
          <section className="space-y-3 min-h-[200px]">
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            {education.length > 0 ? (
              education.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-semibold text-gray-900 text-lg">
                    {edu.degree || "Degree"} — {edu.institution || "Institution"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {edu.startDate || ""} - {edu.isPresent ? "Present" : edu.endDate || ""}
                  </p>
                  <p className="text-gray-700 text-sm min-h-[40px]">
                    {edu.description || ""}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 italic text-sm">Add education details...</p>
            )}
          </section>

        </div>
      </div>

      {/* COLOR PICKER */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <p className="text-sm text-gray-700">Choose Sidebar Theme Color:</p>
        <input
          type="color"
          value={themeColor}
          onChange={(e) => dispatch(updateThemeColor(e.target.value))}
          className="w-10 h-10 cursor-pointer border rounded"
        />
      </div>
    </div>
  );
});

Template1.displayName = "Template1";

export default Template1;
