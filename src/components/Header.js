import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';




const Header = ()=>{

    // const[btnName,setBtnName] = useState("Login");
   

    const onlineStatus = useOnlineStatus();

    
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    //subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
        <div className="logo-container">
            <img className="w-28" src={LOGO_URL} alt="" />
        </div>
        <div className="flex items-center">
        <ul className="flex p-4 m-2">
            <li className="px-4">
                {onlineStatus ?  "Online" : "Offline"}
            </li>
            <li className="px-4">
            <Link to= "/">Home</Link>
            </li>
            <li className="px-4">
            <Link to ="/about">About Us</Link>
            </li>
            {/* <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            </li> */}
            <li className="px-4 font-bold">
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <sup className="cart-count">{cartItems.length}</sup></Link>
            </li>
            {/* <button className="login-btn"
                onClick={()=>{
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button> */}
            <li className="px-4">{loggedInUser}</li>
        </ul>

        </div>

        </div>
    )
}

export default Header;