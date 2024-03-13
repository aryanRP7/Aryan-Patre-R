import React from "react";
import SwiperWork from "./SwiperWork.jsx";
import "./Work.css"

function Work() {
  return (
    <div className="container-fluid containerPage8">
      <div className="row row1Page8">
        <div className="col-0 col-md-4 order-2 col-sm-0 border title-page8"></div>
        <div className="col-12 col-md-4 order-3 col-sm-12 border title-page8">
          My Work
        </div>
        <div className="col-0 col-md-4 order-4 col-sm-0 border title-page8"></div>
      </div>

      <div className="row row2Page8">
        <div className="col-0 col-md-2 order-2 col-sm-2 title-page8"></div>
        <div className="col-12 col-md-8 order-3 col-sm-8 title-page8">
          <SwiperWork/>
        </div>
        <div className="col-0 col-md-2 order-4 col-sm-2 title-page8"></div>
      </div>
    </div>
  );
}
export default Work;
