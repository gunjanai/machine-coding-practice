import { useState } from "react";

const carouselImages = ["/banner.png", "/bull.png", "/eagle.png"];
function Carousel() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex items-center">
      <button
        className="w-20 bg-blue-500 p-4 "
        onClick={() => {
          setActive((prev) =>
            prev === 0 ? carouselImages.length - 1 : prev - 1
          );
        }}
      >
        &lt;
      </button>
      <div className="h-96">
        <img
          srcSet={`${carouselImages[active]} 480w, ${carouselImages[active]} 768w, ${carouselImages[active]} 1200w`}
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
          alt="carouselImage"
          className="w-full h-full object-contain"
        />
      </div>
      <button
        className="w-20 bg-blue-500 p-4 "
        onClick={() => {
          setActive((prev) =>
            prev === carouselImages.length - 1 ? 0 : prev + 1
          );
        }}
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
