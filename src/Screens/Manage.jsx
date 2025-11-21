import React from 'react';
import Navbar from '../Components/Navbar';
import { useSelector } from "react-redux";


import { CloudUpload, SaveAlt, Publish } from '@mui/icons-material';

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center py-4 sm:py-6">
    <h3 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
      {value}
    </h3>
    <p className="mt-1 text-center text-xs sm:mt-2 sm:text-sm">{label}</p>
  </div>
);

const Manage = () => {
  const resume = useSelector((state) => state.resume);
  return (
    
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-10 md:px-16">
        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button className="flex items-center gap-2 rounded-xl border border-black px-6 py-2.5 transition-all duration-300 ease-in-out hover:shadow">
            <SaveAlt fontSize="small" />
            <span className="text-sm sm:text-base">Save Resume</span>
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-black px-6 py-2.5 transition hover:shadow focus:outline-none">
            <CloudUpload fontSize="small" />
            <span className="text-sm sm:text-base">Export JSON</span>
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-black px-6 py-2.5 transition hover:shadow focus:outline-none">
            <Publish fontSize="small" />
            <span className="text-sm sm:text-base">Import JSON</span>
          </button>
        </div>

        {/* Saved Resumes Card */}
        <section className="mt-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="text-lg font-bold sm:text-xl">Saved Resumes</h2>
            <p className="mt-1 text-sm text-gray-600">
              Manage your saved resume versions
            </p>

            <div className="flex min-h-[240px] items-center justify-center sm:min-h-[280px] md:min-h-[320px]">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-10 w-10 text-gray-700 sm:h-12 sm:w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6M9 16h6M12 8h.01M5 19a2 2 0 01-2-2V7a2 2 0 012-2h7l5 5v7a2 2 0 01-2 2H5z"
                  />
                </svg>
                <p className="mt-3 text-sm font-semibold text-gray-800 sm:text-base">
                  No saved resumes yet
                </p>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                  Save your current resume to get started
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Statistics Card */}
        <section className="mb-12 mt-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8 md:p-10">
            <h2 className="mb-4 text-lg font-bold sm:text-xl">
              Resume Statistics
            </h2>

           <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
  <Stat value={resume.work.length} label="Work Experience" />
  <Stat value={resume.education.length} label="Education" />
  <Stat value={resume.skills.length} label="Skills" />
  <Stat value={resume.references.length} label="References" />
</div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Manage;
