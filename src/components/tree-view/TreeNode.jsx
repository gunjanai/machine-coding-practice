import { useState } from "react";
import TreeView from "./TreeView";

function TreeNode({ node }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <button onClick={() => setExpand((prev) => !prev)}>{node.name}</button>
      <div className="ml-8">
        {node?.children && expand && <TreeView data={node?.children} />}
      </div>
    </div>
  );
}

export default TreeNode;
