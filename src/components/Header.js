import { useState,useContext } from "react";
import {HEADER_LOGO} from "../utility/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import UserContext from "../utility/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
const [buttonText, setButtontext] = useState("Login");
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
const cartItems = useSelector((store)=>store.cart.items)
console.log("redux",cartItems)


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
            <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} Items)</Link></li>
            <button type="button" className="auth-button">{buttonText}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;