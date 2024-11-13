import React from "react";

function Accordion({ title, description, isOpen, setIsOpen }) {
  console.log(isOpen);
  return (
    <div className="m-4">
      <div
        className="bg-gray-300 p-2 text-left"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {title}
      </div>
      {isOpen && <div className="bg-gray-200 p-4 text-left">{description}</div>}
    </div>
  );
}

export default Accordion;
