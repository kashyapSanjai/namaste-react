import { useState } from "react";
import {HEADER_LOGO} from "../utility/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const Header = () => {
const [buttonText, setButtontext] = useState("Login");
const onlineStatus = useOnlineStatus();


    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 xl:bg-green-50">
        <div className="logo-container">
          <img className="w-36"
            src={HEADER_LOGO}
            alt=""
          />
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex  p-4 m-4">
            <li className="px-4"><Link to="/">Online Status {onlineStatus?"🟢":"🔴"} </Link> </li>
            <li className="px-4"><Link to="/">Home</Link> </li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact-us">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4">Cart</li>
            <button type="button" className="auth-button">{buttonText}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;