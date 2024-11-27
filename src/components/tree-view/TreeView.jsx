import TreeNode from "./TreeNode";

function TreeView({ data }) {
  return (
    <div className="flex flex-col ml-10 mt-2">
      {data?.map((node) => (
        <TreeNode node={node} key={node.name} />
      ))}
    </div>
  );
}

export default TreeView;
