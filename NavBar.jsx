import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import {NavLink} from "react-router-dom";
import "../style/NavBar.css";
import Logo from "../assets/logo.png";
import cart from"../assets/cart.png";

function NavBar() {
const navigate = useNavigate();
const handleLogout = async () => {

    const confirmLogout = window.confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {

        await logoutUser();

    } catch (error) {

        console.error("Logout error:", error.message);

    } finally {

        navigate("/login");

    }
};


const handleCartClick = () => {
  
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please login or register to access your cart!");
        navigate("/login");
    } else {
        navigate("/cart");
    }
};

const handleMyOrdersClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please login or register to view your orders!");
        window.location.href = "/login";
    } else {
        navigate("/my-orders");
    }
};
    return(
        <>
<nav className="parent_nav">
    <img src={Logo} className="navbar_img1"/>
    <span className="navbar_companyname">AX</span>
    <span className="navbar_companyname2">Fashion</span>
<span className="navbar_home">
  <NavLink to="/" className={({ isActive }) => (isActive ? "navbar_home active" : "navbar_home")}>Home</NavLink>
</span>
<span className="navbar_shop">
  <NavLink to="/shop" className={({ isActive }) => (isActive ? "navbar_shop active" : "navbar_shop")}>Shop</NavLink>
</span>
<span className="navbar_aboutus">
  <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "navbar_aboutus active" : "navbar_aboutus")}>About Us</NavLink>
</span>
<span className="navbar_contact">
  <NavLink to="/contact" className={({ isActive }) => (isActive ? "navbar_contact active" : "navbar_contact")}>Contact</NavLink>
</span>
<span>
  <NavLink to="/cart" className="navbar_cart" >
  
  <img className="navbar_cart" src={cart} onClick={handleCartClick}/>
  </NavLink>
</span>
<button type="button" className="navbar_myorder" onClick={handleMyOrdersClick}>
    My Orders</button>
 <NavLink to="/login" className="navbar_login">Login</NavLink>

      <button className="logout_btn" onClick={handleLogout}>Logout</button>
            </nav>
</>
        
    );
    
};
export default NavBar;
