import React from "react";
import "./Carousel.css"

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-certificate-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-certificate-item-img-page6" src={item.image} alt="certificates"/>
      <div className="carousel-certificate-item-description-page6">{item.description}</div>
      
    </div>
  );
};