import { useState } from "react";

const carouselImages = ["/banner.png", "/bull.png", "/eagle.png"];
function Carousel() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setActive((prev) =>
            prev === 0 ? carouselImages.length - 1 : prev - 1
          );
        }}
      >
        &lt;
      </button>
      <img src={carouselImages[active]} alt="carouselImage" />
      <button
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
