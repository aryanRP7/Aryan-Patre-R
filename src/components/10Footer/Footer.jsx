import React from "react";
import "./Footer.css"
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="footer">
    <h6>"Thanks for Scrolling"</h6>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
