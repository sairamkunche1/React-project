import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header = () =>{
  const [btnName, setbtnName] = useState("Login");
    return(
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link style={{textDecoration:"none",color:"white"}} to={"/"}>Home</Link></li>
          <li><Link style={{textDecoration:"none",color:"white"}} to={"/about"}>About Us</Link></li>
          <li><Link style={{textDecoration:"none",color:"white"}} to={"/contact"}>Contact Us</Link></li>
          <li><Link style={{textDecoration:"none",color:"white"}}>Cart</Link></li>
          <button className="ac-btn-name" onClick={()=>{
            btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>


    </div>
    )
  }


  export default Header;