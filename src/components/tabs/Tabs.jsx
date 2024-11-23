import { useState } from "react";
import Table from "../table-pagination/Table";
import StarRating from "../starRating/StarRating";
import Accordion from "../accordion/Accordion";
import AccordionWrapper from "../accordion/AccordionWrapper";

const tabs = ["Table", "Star Rating", "Accordion"];

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          className="border-b-2 border-teal-500 rounded-lg m-4 p-2 px-4"
          onClick={() => setSelectedTab(index)}
          key={tab}
        >
          {tab}
        </button>
      ))}

      {selectedTab === 0 ? (
        <Table />
      ) : selectedTab === 1 ? (
        <StarRating />
      ) : (
        <AccordionWrapper />
      )}
    </div>
  );
}

export default Tabs;
