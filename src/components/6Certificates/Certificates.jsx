import React from "react";
import "./Certificates.css"
import Swiperjs from "../Swiper/Swiper.jsx";


function Certificates() {
  return (
    <div className="container-fluid containerPage6">

      <div className="row row1Page6">
        <div className="col-0 col-md-4 order-2 col-sm-0 border title-page6"></div>
        <div className="col-12 col-md-4 order-3 col-sm-12 border title-page6">
          My <span className="blue-color">C</span>ertificates
        </div>
        <div className="col-0 col-md-4 order-4 col-sm-0 border title-page6"></div>
      </div>

      <div className="row row2Page6">
        <div className="col-0 col-md-2 order-2 col-sm-0 border title-page6"></div>
        <div className="col-12 col-md-8 order-3 col-sm-12 border title-page6">
          <Swiperjs />
        </div>
        <div className="col-0 col-md-2 order-4 col-sm-0 border title-page6"></div>
      </div>
    </div>
  );
}
export default Certificates;
