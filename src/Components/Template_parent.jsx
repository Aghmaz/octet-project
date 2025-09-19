


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
