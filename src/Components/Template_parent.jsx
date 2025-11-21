// src/components/TemplateCards.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTemplate } from "../redux/Resume_slice.js";
import TempCard from "./Template_card.jsx";

import temp_1 from "../images/temp_1.jpg";
import temp_2 from "../images/temp_2.jpg";
import temp_3 from "../images/temp_3.jpg";

export default function TemplateCards() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (templateName) => {
    dispatch(selectTemplate(templateName));
    navigate("/editor");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-gray-50">
      <TempCard
        image={temp_1}
        title="Modern Professional"
        tag="Popular"
        description="Clean and professional design with a sidebar layout"
        onSelect={() => handleSelect("Modern Professional")}
      />

      <TempCard
        image={temp_2}
        title="Classic Traditional"
        tag="Classic"
        description="Traditional single-column layout with clear sections"
        onSelect={() => handleSelect("Classic Traditional")}
      />

      <TempCard
        image={temp_3}
        title="Minimal Clean"
        tag="New"
        description="Minimalist design focusing on typography and whitespace"
        onSelect={() => handleSelect("Minimal Clean")}
      />

      <TempCard
        image={temp_3}
        title="Creative Modern"
        tag="Trending"
        description="Bold creative design with strong headings and sections"
        onSelect={() => handleSelect("Creative Modern")}
      />

      <TempCard
        image={temp_1}
        title="Simple Professional"
        tag="Classic"
        description="Simple design with traditional formatting"
        onSelect={() => handleSelect("Simple Professional")}
      />

      <TempCard
        image={temp_2}
        title="Elegant Minimal"
        tag="New"
        description="Elegant design focused on clean typography and spacing"
        onSelect={() => handleSelect("Elegant Minimal")}
      />
    </div>
  );
}
