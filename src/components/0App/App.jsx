import React from "react";
import "./App.css";
// import Swiperjs from "../Swiper/Swiper.jsx";
import Navbar from "../1Navbar/Navbar.jsx";
import Home from "../2Home/Home.jsx";
import About from "../3About/About.jsx";
import Qualification from "../4Qualification/Qualification.jsx"
import Skills from "../5Skills/Skills.jsx";
import Certificates from "../6Certificates/Certificates.jsx"
import Projects from "../7Projects/Projects.jsx";
import Work from "../8Work/Work.jsx"
import Contact from "../9Contact/Contact.jsx";
import Footer from "../10Footer/Footer.jsx";


function App() {
    // <BrowserRouter>
return(
    <div className="App">
        <section className="App-custom-div">

      <Home/>
        </section> 
    <div className="all-components">
      <Navbar />
      {/* <Swiperjs/>  */}
      <About />
      <Qualification />
      <Skills />
      <Certificates/>
      <Projects />
      <Work/>
      <Contact/>
      <Footer />
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;