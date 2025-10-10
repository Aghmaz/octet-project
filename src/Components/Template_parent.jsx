// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { selectTemplate } from "../redux/Resume_slice.js";
// import TempCard from "./Template_card.jsx"; 

// import temp_1 from "../images/temp_1.png";
// import temp_2 from "../images/temp_2.png";
// import temp_3 from "../images/temp_3.webp";

//  Parent Component
// export default function TemplateCards() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSelect = (templateName) => {
//     dispatch(selectTemplate(templateName));
//     navigate("/editor");
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {/* <TempCard
        image={temp_1}
        title="Modern Professional"
        tag="Popular"
        description="Clean and professional design with a sidebar layout"
        buttonText="Use Template"
        onSelect={() => handleSelect("Modern Professional")}
      /> */}
{/* 
      <TempCard
        image={temp_2}
        title="Classic Traditional"
        tag="Classic"
        description="Traditional single-column layout with clear sections"
        buttonText="Use Template"
        onSelect={() => handleSelect("Classic Traditional")}
      />

      <TempCard
        image={temp_3}
        title="Minimal Clean"
        tag="New"
        description="Minimalist design focusing on typography and whitespace"
        buttonText="Use Template"
        onSelect={() => handleSelect("Minimal Clean")}
      />

      <TempCard
        image={temp_3}
        title="Creative Modern"
        tag="Trending"
        description="Bold creative design with strong headings and sections"
        buttonText="Use Template"
        onSelect={() => handleSelect("Creative Modern")}
      />

      <TempCard
        image={temp_1}
        title="Simple Professional"
        tag="Classic"
        description="Simple design with traditional formatting"
        buttonText="Use Template"
        onSelect={() => handleSelect("Simple Professional")}
      />

      <TempCard
        image={temp_2}
        title="Elegant Minimal"
        tag="New"
        description="Elegant design focused on clean typography and spacing"
        buttonText="Use Template"
        onSelect={() => handleSelect("Elegant Minimal")}
      /> */}
    {/* </div>
  );
} */}




import TempCard from "./Template_card.jsx";
import temp_1 from "../images/temp_1.webp";
import temp_2 from "../images/temp_2.png";
import temp_3 from "../images/temp_3.webp";


//  Parent Component
export default function TemplateCards() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 ">
      <TempCard
        image={temp_1}
        title="Modern Professional"
        tag="Popular"
        description="Clean and professional design with a sidebar layout"
        buttonText="Selected"
      />

      <TempCard
        image={temp_2}
        title="Classic Traditional"
        tag="Classic"
        description="Traditional single-column layout with clear sections"
        buttonText="Use Template"
      />

      <TempCard
        image={temp_3}
        title="Minimal Clean"
        tag="New"
        description="Minimalist design focusing on typography and whitespace"
        buttonText="Use Template"
      />

      <TempCard
        image={temp_3}
        title="Modern Professional"
        tag="Popular"
        description="Clean and professional design with a sidebar layout"
        buttonText="Use Template"
      />

      <TempCard
        image={temp_1}
        title="Classic Traditional"
        tag="Classic"
        description="Traditional single-column layout with clear sections"
        buttonText="Use Template"
      />

      <TempCard
        image={temp_2}
        title="Minimal Clean"
        tag="New"
        description="Minimalist design focusing on typography and whitespace"
        buttonText="Use Template"
      />
    </div>
  );
}