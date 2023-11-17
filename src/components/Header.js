import { useEffect, useState } from "react";
import "../../kushal.css";
import { LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";
const Header = () => {
  // const btnName = "Login";
  const [btnNameReact,setBtnNameReact] = useState("Login");
  console.log("Header Render");

  // if no dependency array => useEffect is called on every render.
  // if dependency array is empty = [] => useEffect is called on initial render(Just Once).
  // if dependency array has btnNameReact => useEffect is called everytime when btnNameReact is updated. 
  useEffect(()=>{
    console.log("useEffect Called");
  },[btnNameReact])
  
  return (   
    <header className="navbar">
      <div className="logo">
        <img src={LOGO_URL} alt="Swiggy Logo" />
      </div>
      <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <button className="login"
                    onClick={()=>{
                      btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}
                    style={{ backgroundColor: btnNameReact === "Login" ? "green" : "red" }}
                  >
                    <NavLink className="login-btn-nav" to="/authentication"> {btnNameReact}</NavLink>
                   
            </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;







 // <div className="header">
    //   <div className="logo-container">
    //     <img
    //       className="logo"
    //       src={LOGO_URL} alt="swiggy_logo"

    //     />
    //   </div>

    //   <div className="nav-items">
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact Us</li>
    //       <li>Cart</li>
    //     </ul>
    //   </div>
    // </div>
