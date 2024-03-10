import React from "react";
import Carousel from "./Carousel";

function Certificates() {
  return (
    <div className="container-fluid containerPage6">
      <div className="row row1Page6">
        <div className="col col-md-4 order-2 col-sm-12 border title-page6"></div>
        <div className="col col-md-4 order-3 col-sm-12 border title-page6">
          My Certificates
        </div>
        <div className="col col-md-4 order-4 col-sm-12 border title-page6"></div>
      </div>

      <div className="row row2Page6">
        <div className="col-0 col-md-2 order-2 col-sm-2 border title-page6"></div>
        <div className="col-12 col-md-8 order-3 col-sm-8 border title-page6">
          <Carousel/>
        </div>
        <div className="col-0 col-md-2 order-4 col-sm-2 border title-page6"></div>
      </div>
    </div>
  );
}
export default Certificates;
