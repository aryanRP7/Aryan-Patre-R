import React from "react";
import "./Work.css"

function WorkItem ({ item, width }) {
  return (
    <div className="carousel-work-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-work-item-img-page8" src={item.image} alt="Work"/>
      <div className="carousel-work-item-description-page8">{item.description}</div>
      
    </div>
  );
};
export default WorkItem;