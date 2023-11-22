import { useState } from "react";
import {HEADER_LOGO} from "../utility/constants"
import { Link } from "react-router-dom";

const Header = () => {
const [buttonText, setButtontext] = useState("Login");


    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={HEADER_LOGO}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li>Cart</li>
            <button type="button" className="auth-button">{buttonText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;