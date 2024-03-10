import React from "react";
import "./Skills.css";
import python from "./Assets/python.svg";
import javascript from "./Assets/javascript.svg";
import git from "./Assets/git.svg";
import html from "./Assets/html.svg";
import css from "./Assets/css.svg";


import c from "./Assets/c.svg";
import cpp from "./Assets/cpp.svg";

import react from "./Assets/react.svg";
import node from "./Assets/nodejs.svg";
import express from "./Assets/expressjs.svg";
import mysql from "./Assets/mysql.svg";
import postgres from "./Assets/postgres.svg";
import mongodb from "./Assets/mongodb.svg";
import bootstrap from "./Assets/bootstrap.svg";

function Skills() {
  return (
    <div id="skills" className="container-fluid containerPage5">
      <div className="row row1Page5">
        <div className="col col-md-4 order-2 col-sm-12 border title-page5"></div>
        <div className="col col-md-4 order-3 col-sm-12 border title-page5">
          Skills
        </div>
        <div className="col col-md-4 order-4 col-sm-12 border title-page5"></div>
      </div>

      <div className="row row2Page5">
        <div className="col col-md-3 border">
          <img className="python" src={python} alt="Python"></img>
          <p>Python</p>
        </div>
        <div className="col col-md-3 border">
          <img className="javascript" src={javascript} alt="JavaScript"></img>
          <p>Javascript</p>
        </div>
        <div className="col col-md-3 border">
          <img className="git" src={git} alt="Git Source Control"></img>
          <p>Git Source Control</p>
        </div>

        <div className="col col-md-3 border">
          <img className="html htmlcss" src={html} alt="html"></img>
          <img className="css" src={css} alt="css"></img>
          <p>Html & CSS</p>
        </div>
      </div>

      <div className="row row3Page5">
        <div className="col col-md-3 border">
          <img className="c" src={c} alt="c"></img>
          <img className="cpp" src={cpp} alt="cpp"></img>
          <p>C & C++</p>
        </div>
        <div className="col  col-md-3 border">
          <img className="react" src={react} alt="react"></img>
          <p>React</p>
        </div>
        <div className="col col-md-3 border">
          <img className="node" src={node} alt="node"></img>
          <p>Node.js</p>
        </div>
        <div className="col col-md-3 border">
          <img className="express" src={express} alt="express"></img>
          <p>Express.js</p>
        </div>

      </div>
      <div className="row row4Page5">

        <div className="col  col-md-3 border">
          <img className="mysql" src={mysql} alt="mysql"></img>
          <p>MySQL</p>
        </div>
        <div className="col  col-md-3 border">
          <img className="postgres" src={postgres} alt="postgres"></img>
          <p>Postgres</p>
        </div>
        <div className="col col-md-3 border">
          <img className="mongodb" src={mongodb} alt="mongodb"></img>
          <p>MongoDB</p>
        </div>
        <div className="col col-md-3 border">
          <img className="bootstrap" src={bootstrap} alt="bootstrap"></img>
          <p>Bootstrap</p>
        </div>

      </div>
    </div>
  );
}
export default Skills;


 