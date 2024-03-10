import React, { useState , useEffect } from "react";
import "./Work.css";
import WorkItem from "./WorkItem"
import WorkData from "./WorkData";
function WorkCarousel() {
  const[items]=useState(WorkData);
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
    <div className="work-main-div-page8">
      <div className="work-carousel-page8">
        <div
          className="data-mapping-carousel-page8" 
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <WorkItem item={item} width={"100%"}
             />;
          })}
          
        </div>


          <div className="work-carousel-buttons-page8">
          <button
            className="work-carousel-button-arrow-page8"
            onClick={() => {
              setActiveIndex(activeIndex - 1);
            }}
          >
            <span class="material-symbols-outlined carousel-arrow-back-icon">arrow_back_ios</span>
          </button>
          <div className="work-carousel-indicators-page8">
            {items.map((item, index) => {
              return (
                <button
                  className="work-carousel-indicator-buttons-page8"
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "work-carousel-indicator-style-active"
                        : "work-carousel-indicator-style"
                    }`}
                  >
                    radio_button_checked
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className="work-carousel-button-arrow-page8"
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
export default WorkCarousel;
