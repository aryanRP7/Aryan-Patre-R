import React from "react";
import Emailjs from "./Emailjs.jsx";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="container-fluid containerPage9">
      <div className="row row1Page9">
        <div className="col col-md-4 order-2 col-sm-12 border title-page9"></div>
        <div className="col col-md-4 order-3 col-sm-12 border title-page9 main-title-page9">
          Contact
          <br />
          <p className="sub-title-page9">Get in touch</p>
        </div>
        <div className="col col-md-4 order-4 col-sm-12 border title-page9"></div>
      </div>

      <div className="row row2Page9">
        <div className="col-12 col-md-6 col-sm-12 row2-col1-page9 border">
          I'd love if you reached out to me. Even if it's just to say "Hey!".
          Don't hesitate! Drop me a line and I'll get back to you ASAP!
          <br />
          <br />
          <i class="fa-solid fa-envelope"></i>
          aryanalls100@gmail.com
        </div>
        <div className="col col-md-6 col-sm-12 border">This is image area</div>
      </div>
      <div className="row row3Page9">
        <div className="col-12 col-md-6 col1-row3 border">
          <br />
          <Emailjs />
        </div>
        <div className="col col-md-6 col-sm-12 border">This is image area</div>
      </div>
      <div className="row row4Page9">
        <div className="col col-md-12 col-sm-12 col1-row4 border">
          <FaSquareInstagram
            style={{}}
            className="social-icons-page9 instagram"
          />
          <FaLinkedin
            style={{ color: "#0A66C2", background: "white" }}
            className="social-icons-page9 "
          />
          <SiIndeed
            style={{ color: "#2164f4" }}
            className="social-icons-page9"
          />
          <FaTelegram
            style={{
              color: "#0088CC",
              background: "white",
              borderRadius: "50%",
            }}
            className="social-icons-page9"
          />
        </div>
      </div>
    </div>
  );
}
export default Contact;





    <div id="navbar" className="container-fluid containerPage9">
      <div className="row row1Page9">
        <div className="col-2 col-md-4 order-2 col-sm-12 border title-page9"></div>
        <div className="col-2 col-md-4 order-3 col-sm-12 border title-page9 main-title-page9">
          Aryan Patre
        </div>
        <div className="col col-md-4 order-4 col-sm-12 border title-page9">menu here</div>
      </div>

    </div>

