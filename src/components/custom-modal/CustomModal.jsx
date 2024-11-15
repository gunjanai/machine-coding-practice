import { useState } from "react";

function CustomModal() {
  const [openModal, setOpenModal] = useState(false);

  const handleModalChange = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleModalChange}>Open Modal</button>
      {openModal && (
        <div className="fixed w-full bg-black bg-opacity-55 z-50 backdrop-blur-md">
          <div className="w-96 bg-white h-full">This is a modal</div>
        </div>
      )}
    </>
  );
}

export default CustomModal;
