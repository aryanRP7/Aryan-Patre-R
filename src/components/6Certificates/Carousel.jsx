import React, { useState , useEffect } from "react";
import "./Carousel.css";
import data from "./data-certificates";
import { CarouselItem } from "./CarouselItem";
function Carousel() {
  const[items]=useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const updateIndex = items.length - 1;
    if (activeIndex < 0) {
      setActiveIndex(updateIndex);
    }
    if (activeIndex > updateIndex) {
      setActiveIndex(0);
    }
  }, [activeIndex, items]);
  useEffect(() => {
    let slider = setInterval(() => {
      setActiveIndex(activeIndex + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [activeIndex]);
  

  return (
    <div className="certificates-main-div-page5">
      <div className="certificates-carousel-page5">
        <div
          className="data-mapping-carousel-page6" 
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"}
             />;
          })}
          
        </div>


          <div className="certificates-carousel-buttons-page6">
          <button
            className="certificates-carousel-button-arrow-page6"
            onClick={() => {
              setActiveIndex(activeIndex - 1);
            }}
          >
            <span class="material-symbols-outlined carousel-arrow-back-icon">arrow_back_ios</span>
          </button>
          <div className="certificates-carousel-indicators-page6">
            {items.map((item, index) => {
              return (
                <button
                  className="certificates-carousel-indicator-buttons-page6"
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "certificate-carousel-indicator-style-active"
                        : "certificate-carousel-indicator-style"
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className="certificates-carousel-button-arrow-page6"
            onClick={() => {
              setActiveIndex(activeIndex + 1);
            }}
          >
            <span class="material-symbols-outlined carousel-arrow-forward-icon">arrow_forward_ios</span>
          </button>
          
        </div>
      </div>
    </div>
  );
}
export default Carousel;
