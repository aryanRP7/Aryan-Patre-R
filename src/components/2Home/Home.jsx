import React from "react";
import "./Home.css"
function Home() {
  return (

      <div id="home" className="page1">
        {/* writing Box 2 1st page  */}
        <div className="design-page1">
          <i class="fa-solid fa-slash"></i>
          <br />
          <i class="fa-solid fa-slash"></i>
          <br />
          <i class="fa-solid fa-slash"></i>
          <br />
        </div>
        <div className="title-page1">
          <p className="full-stack-page1">FULL-STACK<br/>WEB DEVELOPER</p>
          <p className="name-page1">ARYAN PATRE</p>
        </div>
        <p className="para-page1">I'am a full-stack<br/>web developer</p>
      </div>
  );
}

export default Home;
