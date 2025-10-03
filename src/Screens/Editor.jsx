import React, { useState } from "react";
import Navbar from "../Components/Navbar";
const Editor = () => {
  const [screen, setScreen] = useState(1);
  return (
    <div>
      <Navbar />
      <h1 className="mt-10 font-bold text-4xl text-center text-teal-600">
        Edit Your Resume
      </h1>
      <p className="text-center mt-4 text-gray-400">
        Customize Your Information and See Live Preview
      </p>
      <div className="flex flex-row justify-between mx-40 mt-10">
        {/* Editor */}
        <div className="w-[48%] border border-gray-300 rounded-2xl px-10 py-8 mb-10">
          {screen === 1 ? (
            <div>
              <div className="flex flex-row justify-between items-start">
                <div>
                  <h1 className="font-semibold text-2xl text-gray-700">
                    Personal Info
                  </h1>
                  <p className="font-semibold text-gray-400">
                    Update your basic details
                  </p>
                </div>
                <p className="font-semibold text-3xl text-gray-300">1/5</p>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-8 gap-y-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Designation</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="eg: Software Engineer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Email</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Phone No.</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <textarea
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setScreen(2)}
                  className="px-8 py-2 font-semibold bg-teal-600 text-white rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          ) : screen === 2 ? (
            <div>
              <div className="flex flex-row justify-between items-start">
                <div>
                  <h1 className="font-semibold text-2xl text-gray-700">
                    Personal Info
                  </h1>
                  <p className="font-semibold text-gray-400">
                    Update your basic details
                  </p>
                </div>
                <p className="font-semibold text-3xl text-gray-300">2/5</p>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-8 gap-y-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Designation</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="eg: Software Engineer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Email</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Phone No.</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <textarea
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6 gap-4">
                <button
                  onClick={() => setScreen(1)}
                  className="px-8 py-2 font-semibold text-teal-600 rounded-lg border border-gray-200"
                >
                  Back
                </button>
                <button
                  onClick={() => setScreen(3)}
                  className="px-8 py-2 font-semibold bg-teal-600 text-white rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-between items-start">
                <div>
                  <h1 className="font-semibold text-2xl text-gray-700">
                    Personal Info
                  </h1>
                  <p className="font-semibold text-gray-400">
                    Update your basic details
                  </p>
                </div>
                <p className="font-semibold text-3xl text-gray-300">3/5</p>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-2 gap-8 gap-y-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Designation</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="eg: Software Engineer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Email</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold">Phone No.</label>
                    <input
                      type="text"
                      className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <input
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label className="text-sm font-semibold">Phone No.</label>
                  <textarea
                    type="text"
                    className="border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-400 focus:outline-teal-600 mt-2"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6 gap-4">
                <button
                  onClick={() => setScreen(2)}
                  className="px-8 py-2 font-semibold text-teal-600 rounded-lg border border-gray-200"
                >
                  Back
                </button>
                <button
                  onClick={() => setScreen(4)}
                  className="px-8 py-2 font-semibold bg-teal-600 text-white rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Live Preview */}
        <div className="w-[48%]">right</div>
      </div>
    </div>
  );
};

export default Editor;
