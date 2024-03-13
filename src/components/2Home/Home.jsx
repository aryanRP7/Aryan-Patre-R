import React from "react";
import "./Home.css";
function Home() {
  return (
    <div id="home" className="page1">
    <section className="section-wave-page1">
            <div className="wave-page1 wave1-page1"></div>
            <div className="wave-page1 wave2-page1"></div>
            <div className="wave-page1 wave3-page1"></div>
            <div className="wave-page1 wave4-page1"></div>
        </section>
      <div className="title-page1">
        <p className="full-stack-page1">
          FULL-STACK
          <br />
          WEB DEVELOPER
        </p>
        <p className="name-page1">ARYAN <span className="patre">P</span>ATRE</p>
      </div>
      <p className="para-page1">
        I'am a full-stack
        <br />
        web developer
      </p>
    </div>
  );
}

export default Home;
