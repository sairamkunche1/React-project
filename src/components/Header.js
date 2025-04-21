import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";


const Header = () =>{
  const [btnName, setbtnName] = useState("Login");
    return(
    <div className="flex justify-between ">
      <div className="logo-container">
        <img  className="w-80 pt-2 mt-3 bg-orange-600" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
      </div>
      <div className="flex items-center px-4">
        <ul className="flex p-4 m-1 jus"> 
          <li className="px-4"><Link style={{textDecoration:"none",color:"black"}} to={"/"}>Home</Link></li>
          <li className="px-4" ><Link style={{textDecoration:"none",color:"black"}} to={"/about"}>About Us</Link></li>
          <li className="px-4"><Link style={{textDecoration:"none",color:"black"}} to={"/contact"}>Contact Us</Link></li>
          <li className="px-4"><Link style={{textDecoration:"none",color:"black"}}>Cart</Link></li>
          <button className="px-4" onClick={()=>{
            btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
    )
  }


  export default Header;