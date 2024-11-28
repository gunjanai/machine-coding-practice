import { data } from "./data";
import TreeView from "./TreeView";

function TreeContainer() {
  return (
    <div>
      <h1 className="font-bold text-3xl m-10 text-[#A77C4C]">
        Tree View or Folder structure Imitation
      </h1>
      <TreeView data={data} />
    </div>
  );
}

export default TreeContainer;
