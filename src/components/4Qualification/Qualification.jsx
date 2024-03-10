import React from "react";
import "./Qualification.css";

function Qualification() {
  return (
    <div className="container-fluid containerPage4">
      <div className="row row1Page4">
        <div className="col col-md-4 order-2 col-sm-12 border title-page4"></div>
        <div className="col col-md-4 order-3 col-sm-12 border title-page4">
          Qualification
        </div>
        <div className="col col-md-4 order-4 col-sm-12 border title-page4"></div>
      </div>

      <div className="row row2Page4">
        <div className="col-12 col-md-4 col-sm-4 qualification-text-page4 border">
            <h4>
              Bachelor of Technology (I.T.)
              <br />
            </h4>
            <i class="fa-solid fa-school"></i> MIT ADT - School Of Engineering
            <br />
            CGPA obtained : 7.74
            <br />
            <i class="fa-solid fa-calendar-days"></i> 2023
        </div>
        <div className="col-12 col-md-4 col-sm-4 qualification-text-page4 border">
            <h4>
              XII (MSBSHSE)
              <br />
            </h4>
            <i class="fa-solid fa-school"></i> Sinhgad College Of Arts, Commerce
            & Science
            <br />
            Percentage obtained : 56.15%
            <br />
            <i class="fa-solid fa-calendar-days"></i> 2019
        </div>
        <div className="col-12 col-md-4 col-sm-4 qualification-text-page4 border">
       
            <h4>
              X (MSBSHSE)
              <br />
            </h4>
            <i class="fa-solid fa-school"></i> Aided Highschool <br />
            Percentage obtained : 90.20%
            <br />
            <i class="fa-solid fa-calendar-days"></i> 2017
          </div>
      </div>
    </div>
  );
}
export default Qualification;
