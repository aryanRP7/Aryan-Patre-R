import React from "react";
import "./About.css";
import aboutText from "./aboutText.js"

function About() {
  return (
      <div id="about" className="container-fluid containerPage2">
        <div className="row row1Page2">
          <div className="col-sm-0 col-md-4 order-1 border title-page2"></div>
          <div className="col-sm-12 col-md-3 order-2 border title-page2">About<br/>me</div>
          <div className="col-sm-0 col-md-5 order-3 border title-page2"></div>

        </div>

        <div className="row row2Page2">
          <div className="col-sm-0 col-md-5 border"></div>
          <div className="col-sm-12 col-md-7 border text-page2">{aboutText}</div>
        </div>

      </div>
  );
}
export default About;
