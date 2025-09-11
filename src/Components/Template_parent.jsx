import TempCard from "./Template_card"

// 🔹 Parent Component
export default function TemplateCards() {
  return (
    



<div className="flex flex-row flex-wrap space-x-10">
       <TempCard 
            image="https://picsum.photos/200"
            title="Modern Professional"
            tag="Popular"
            description="Clean and professional design with a sidebar layout"
            buttonText="Selected"
          />
          

              <TempCard
             image="https://picsum.photos/203"
             title="Classic Traditional"
             tag="Classic"
            description="Traditional single-column layout with clear sections"
            buttonText="Use Template"
          /> 
         
           <TempCard
             image="https://picsum.photos/209"
             title="Minimal Clean"
             tag="New"
             description="Minimalist design focusing on typography and whitespace"
            buttonText="Use Template"
          /> 
</div>
  );
}