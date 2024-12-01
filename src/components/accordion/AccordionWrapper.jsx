import React, { useState } from "react";
import questions from "./data";
import Accordion from "./Accordion";

function AccordionWrapper() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="w-screen">
      <h1 className="font-bold text-4xl m-8">Accordion</h1>
      {questions.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          description={item.info}
          isOpen={item.id === openIndex}
          setIsOpen={() => {
            item.id === openIndex ? setOpenIndex(null) : setOpenIndex(item.id);
          }}
        />
      ))}
    </div>
  );
}

export default AccordionWrapper;
