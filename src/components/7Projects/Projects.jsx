import React from "react";
import "./Projects.css";
import car from "./Assets/car.jpg";
import traffic from "./Assets/traffic.png";
import blood from "./Assets/blood.jpg";

function Projects() {
  return (
    <div className="container-fluid containerPage7">
      <div className="row row1Page7">
        <div className="col-sm-0 col-md-6 order-1 border title-page7"></div>
        <div className="col-sm-12 col-md-6 order-2 border title-page7">
          My Projects
        </div>
      </div>
      {/* g-0 removes extra padding from bootstrap grid(gutters) g-0 is added in row(parent element of box)*/}
      <div className="row row2Page7"> 
        <div className="col col-md-6 img-div border">
          <img className="project1" src={car} alt="Automatic Speed & Accident Avoidence System"></img>
        </div>
        <div className="col-12 col-md-6 g-0 text-page7">
        <p className="mainpara-page7">Automatic Speed & Accident Avoidence System<br/></p>
        <p className="subpara-page7">The system is developed that can automatically control speed of the vehicle and also help in <span className="blue-color">avoiding vehicle accidents</span> using eye blink sensor, smoke sensor and ultrasonic sensor.</p>
        </div>
      </div>
      <div className="row row3Page7">
        <div  className="col col-md-6 order-sm-2 img-div img-div-project2 border">
          <img className="project2" src={traffic} alt="Smart Traffic Signal Control System"></img>
        </div>
        <div className="col-12 col-md-6 order-sm-1 g-0 text-page7 text-project2-page7 ">
        <p className="mainpara-page7">Smart Traffic Signal Control System<br/></p>
        <p className="subpara-page7">The project provided fast and reliable <span className="blue-color">solution to the traffic congestion</span> problem. The solution is intelligent and have decision-making capabilities depending on the different situations in the various lanes.</p>
        </div>
      </div>
      <div className="row row4Page7">
        <div className="col col-md-6 order-xs-1 img-div border">
          <img className="project3" src={blood} alt="Web Based Blood Bank Management System"></img>
        </div>
        <div className="col-12 col-md-6 order-xs-2 g-0 text-page7">
        <p className="mainpara-page7">Web Based Blood Bank Management System<br/></p>
        <p className="subpara-page7">The project is developed to create <span className="blue-color">e-information</span> about the donor and organization that are related to donating the blood.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
