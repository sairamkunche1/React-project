import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header = () =>{
  const [btnName, setbtnName] = useState("Login");
    return(
    <div className="header">
      <div className="logo-container">
        <img  className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link></li>
          <li><Link style={{textDecoration:"none",color:"black"}} to={"/about"}>About Us</Link></li>
          <li><Link style={{textDecoration:"none",color:"black"}} to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="ac-btn-name" onClick={()=>{
            btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>


    </div>
    )
  }


  export default Header;