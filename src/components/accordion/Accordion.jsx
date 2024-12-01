import React from "react";

function Accordion({ title, description, isOpen, setIsOpen }) {
  return (
    <div className="m-4">
      <div
        className="bg-teal-800 p-2 text-left text-white"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {title}
      </div>
      {isOpen && <div className="bg-teal-100 p-4 text-left">{description}</div>}
    </div>
  );
}

export default Accordion;
