// src/components/Preview.jsx
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Template1 from "../Templates/T1";
import Template2 from "../Templates/T2";
import Template3 from "../Templates/T3";
import Template4 from "../Templates/T4";
import Template5 from "../Templates/T5";
import Template6 from "../Templates/T6";
import GetAppIcon from "@mui/icons-material/GetApp";
import ShareIcon from "@mui/icons-material/Share";

const Preview = () => {
  const { selectedTemplate, personalInfo } = useSelector((state) => state.resume);
  const templateRef = useRef(null);

  // Download PDF function
  const handleDownloadPDF = async () => {
    if (!templateRef.current) return;
    
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = templateRef.current;
      
      // Scroll to top to ensure we capture from the beginning
      window.scrollTo(0, 0);
      
      const opt = {
        margin: [5, 5, 5, 5],
        filename: `${personalInfo?.fullName || "resume"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          scrollY: 0,
          scrollX: 0,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          logging: false,
        },
        jsPDF: { 
          unit: "mm", 
          format: "a4", 
          orientation: "portrait",
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };
      html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to print
      window.print();
    }
  };

  // Share function
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${personalInfo?.fullName || "Resume"}'s CV`,
          text: `Check out ${personalInfo?.fullName || "my"} resume`,
          url: window.location.href,
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "Modern Professional":
        return <Template1 ref={templateRef} />;
      case "Classic Traditional":
        return <Template2 ref={templateRef} />;
      case "Minimal Clean":
        return <Template3 ref={templateRef} />;
      case "Creative Modern":
        return <Template4 ref={templateRef} />;
      case "Simple Professional":
        return <Template5 ref={templateRef} />;
      case "Elegant Minimal":
        return <Template6 ref={templateRef} />;
      default:
        return (
          <div className="text-center mt-20 text-gray-500 text-lg">
            Select a Template to Preview
          </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl shadow-sm overflow-auto" style={{ minHeight: 'calc(100vh - 100px)' }}>
     <Navbar/>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">
          {selectedTemplate
            ? `Selected Template: ${selectedTemplate}`
            : "Live Preview"}
        </h2>
        {selectedTemplate && (
          <div className="flex gap-3 mt-5">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg shadow-md transition-colors"
            >
              <GetAppIcon fontSize="small" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
            >
              <ShareIcon fontSize="small" />
              <span>Share</span>
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center bg-transparent rounded-lg pb-2">
        <div className="w-full max-w-[210mm]">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default Preview;
