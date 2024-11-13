import React from "react";

function Button({ onClick }) {
  console.log("button re rendered");
  return (
    <>
      <button onClick={onClick}>Button</button>
    </>
  );
}

export default React.memo(Button);
