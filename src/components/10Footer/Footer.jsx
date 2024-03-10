import React from "react";
import "./Footer.css"
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer">
    <h4>"Thanks for Scrolling"</h4>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
