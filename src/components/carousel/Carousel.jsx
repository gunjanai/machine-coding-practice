import { useState } from "react";

const carouselImages = ["/banner.png", "/bull.png", "/eagle.png"];
function Carousel() {
  const [active, setActive] = useState(0);

  const handlePrevImage = () => {
    setActive((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActive((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex flex-col  items-center w-[100vw] h-[100vh]">
      <h1 className="text-4xl font-bold m-8">Carousel</h1>
      <div className="flex">
        <button
          className="px-4 text-8xl font-bold hover:bg-teal-400"
          onClick={handlePrevImage}
        >
          &lt;
        </button>
        <img
          src={carouselImages[active]}
          alt={`carousel ${active}`}
          className="w-[40vw]"
        />
        <button
          className="px-4 text-8xl font-bold hover:bg-teal-400"
          onClick={handleNextImage}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
