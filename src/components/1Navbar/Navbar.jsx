import React, { useState } from "react";
import MenuData from "./MenuData";
import "./NavbarStyles.css";


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // state = {clicked: false};
  function handleClick(){
    setShowMediaIcons(!showMediaIcons)
  }
  return (
    <nav className="NavbarItems">
      {/* first logo part */}
        <h3  className="logo"><a className="logo" href={"#home"}>Aryan Patre</a><i class="fa-solid fa-feather feather"></i></h3>

        <div className="menu-icons" onClick={handleClick}><i  className={showMediaIcons ? "fas fa-times" : "fas fa-bars"}></i></div>
      {/* second menu part */}
      
      <ul  className={showMediaIcons ? "nav-menu active" : "nav-menu"}>
      {MenuData.map((item,index)=>{
         return(

        <li onClick={handleClick} key={index}  >  {/*Hiding menu icons when user clicked on any menu*/}
          <a href={item.url} className={item.cName}> {item.icon}{item.title}</a>
        </li>
        )
      })}
      </ul>

    </nav>
  );
}
export default Navbar;
