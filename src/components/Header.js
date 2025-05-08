import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";



const Header = () =>{
  const [btnName, setbtnName] = useState("Login");

  const data = useContext(UserContext);
  console.log(data);
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
          <button className="px-4 cursor-pointer " onClick={()=>{
            btnName ==="Login" ? setbtnName("Logout") : setbtnName("Login");
          }}>{btnName}</button>
           <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
    )
  }


  export default Header;