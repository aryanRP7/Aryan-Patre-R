import React from "react";
import "./About.css";
import about from "./about3.svg"
import aboutText from "./aboutText.js"

function About() {
  return (
      <div id="about" className="container-fluid containerPage2">
        <div className="row row1Page2">
          <div className="col-sm-0 col-md-4  border title-page2"></div>
          <div className="col-sm-12 col-md-3  border title-page2">About <span className="blue-color">me</span></div>
          <div className="col-sm-0 col-md-5  border title-page2"></div>

        <div className="row row2Page2">
          <div className="col-sm-12 col-md-7 border order-2 text-page2">{aboutText}</div>
          <div className="col-sm-12 col-md-5 border order-1 about-icon-div-page2"><img src={about} className="about-icon"></img></div>
        </div>
        </div>


      </div>
  );
}
export default About;
