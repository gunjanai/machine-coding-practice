import { useState } from "react";
import TreeView from "./TreeView";

function TreeNode({ node }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <button
        className="my-4 mr-4 p-4 bg-[#F1E8C8] border border-[#D1C8B0] hover:bg-[#D69F57] cursor-pointer text-[#3E4B3A] rounded-lg"
        onClick={() => setExpand((prev) => !prev)}
      >
        <span className="mr-2">{expand && node.children ? "-" : "+"}</span>
        {node.name}
      </button>
      <div className="ml-8">
        {node?.children && expand && <TreeView data={node?.children} />}
      </div>
    </div>
  );
}

export default TreeNode;
