import {NavLink} from "react-router-dom";
import "../style/NavBar.css";
import Logo from "../assets/logo.jpg";

function NavBar() {
    return(
        <>
<nav className="parent_nav">
    <img src={Logo} className="navbar_img1"/>
    <span className="navbar_companyname">AX Fashion</span>
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
 <NavLink to="/login" className="navbar_login">Login</NavLink>
</nav>
</>
        
    );
    
};
export default NavBar;