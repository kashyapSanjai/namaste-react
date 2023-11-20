import { useState } from "react";
import {HEADER_LOGO} from "../utility/constants"

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
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button type="button" className="auth-button">{buttonText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;