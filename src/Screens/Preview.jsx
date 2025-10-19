import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar';
import { Share, Download, GraduationCap, Briefcase, User, Mail, Phone, MapPin, X, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Preview = () => {
  const { personalInfo, work, education, skills, references } = useSelector((state) => state.resume);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShare = (platform) => {
    const resumeUrl = window.location.href;
    const text = `Check out ${personalInfo.fullName || 'my'} resume!`;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(resumeUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + resumeUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resumeUrl)}`,
      instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing via URL
      gmail: `mailto:?subject=${encodeURIComponent('Resume - ' + (personalInfo.fullName || 'Professional'))}&body=${encodeURIComponent(text + '\n\n' + resumeUrl)}`
    };

    if (platform === 'instagram') {
      alert('Instagram does not support direct web sharing. Please share the link manually.');
      return;
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setShowShareModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Resume Preview</h1>
            <p className="text-gray-600 text-sm mt-1">Review your resume before downloading</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              <Share size={18} />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Share Resume</h3>
            <p className="text-gray-600 text-sm mb-6">Choose a platform to share your resume</p>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition"
              >
                <Linkedin className="text-[#0077B5]" size={24} />
                <span className="font-medium text-gray-700">LinkedIn</span>
              </button>
              
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-green-50 hover:border-green-500 transition"
              >
                <MessageCircle className="text-[#25D366]" size={24} />
                <span className="font-medium text-gray-700">WhatsApp</span>
              </button>
              
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-600 transition"
              >
                <Facebook className="text-[#1877F2]" size={24} />
                <span className="font-medium text-gray-700">Facebook</span>
              </button>
              
              <button
                onClick={() => handleShare('instagram')}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-pink-50 hover:border-pink-500 transition"
              >
                <Instagram className="text-[#E4405F]" size={24} />
                <span className="font-medium text-gray-700">Instagram</span>
              </button>
              
              <button
                onClick={() => handleShare('gmail')}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-500 transition col-span-2"
              >
                <Mail className="text-[#EA4335]" size={24} />
                <span className="font-medium text-gray-700">Gmail</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Preview Container */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          {/* Resume Paper */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-8 min-h-[1000px]">
            
            {/* Header Section */}
            <div className="pb-6 border-b-2 border-gray-200">
              {/* Name and Contact */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {personalInfo.fullName || 'Your Name'}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {personalInfo.title || 'Your Title'}
                </p>

                {/* Contact Section */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={16} />
                    <span className="text-sm">{personalInfo.phone || '+1 234 567 8900'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={16} />
                    <span className="text-sm">{personalInfo.email || 'your.email@email.com'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={16} />
                    <span className="text-sm">{personalInfo.location || 'Your Location'}</span>
                  </div>
                </div>

                {/* About Me Section */}
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User size={18} />
                    <h3 className="font-semibold text-gray-900">About Me</h3>
                  </div>
                  {personalInfo.about ? (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {personalInfo.about}
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm italic">No about information added yet</p>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="mt-6 space-y-6">
              
              {/* Education Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={20} className="text-gray-900" />
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  {education && education.length > 0 && education[0].degree ? (
                    education.map((edu, index) => (
                      edu.degree && (
                        <div key={index} className="pl-8 border-l-2 border-gray-200">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                              <p className="text-gray-700">{edu.institution}</p>
                            </div>
                            <div className="text-right text-sm text-gray-600">
                              <p>{edu.startDate} - {edu.isPresent ? 'Present' : edu.endDate}</p>
                              <p>{edu.location}</p>
                            </div>
                          </div>
                          {edu.description && (
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      )
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">No education added yet</p>
                  )}
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={20} className="text-gray-900" />
                  <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
                </div>
                <div className="space-y-4">
                  {work && work.length > 0 && work[0].position ? (
                    work.map((job, index) => (
                      job.position && (
                        <div key={index} className="pl-8 border-l-2 border-gray-200">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h4 className="font-semibold text-gray-900">{job.position}</h4>
                              <p className="text-gray-700">{job.company}</p>
                            </div>
                            <div className="text-right text-sm text-gray-600">
                              <p>{job.startDate} - {job.isPresent ? 'Present' : job.endDate}</p>
                              <p>{job.location}</p>
                            </div>
                          </div>
                          {job.description && (
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                              {job.description}
                            </p>
                          )}
                        </div>
                      )
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">No experience added yet</p>
                  )}
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills && skills.length > 0 ? (
                    skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">No skills added yet</p>
                  )}
                </div>
              </div>

              {/* References Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">References</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {references && references.length > 0 && references[0].name ? (
                    references.map((ref, index) => (
                      ref.name && (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-gray-900">{ref.name}</h4>
                          <p className="text-sm text-gray-700">{ref.title}</p>
                          <p className="text-sm text-gray-600">{ref.company}</p>
                          <p className="text-sm text-gray-600 mt-1">{ref.email}</p>
                        </div>
                      )
                    ))
                  ) : (
                    <p className="text-gray-400 text-sm italic">No references added yet</p>
                  )}
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
