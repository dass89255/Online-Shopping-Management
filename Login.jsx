import React, { useState } from "react";
import { loginUser } from "../services/auth";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import leftimage from "../assets/fulltshirt10.jpg";
import login from "../assets/login-removebg-preview.png";
import Logo from "../assets/logo.png";
import gmail from "../assets/gmailbg.png";
import call from "../assets/call2-removebg-preview.png";
import location from "../assets/location1-removebg-preview.png";
import {NavLink} from "react-router-dom";
import Register from "../pages/Register.jsx";
import "../style/Login.css";



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


const handleLogin = async (e) => {

    e.preventDefault();

    try {

        const response = await loginUser(email, password);

localStorage.setItem("token", response.token);

localStorage.setItem(
    "user",
    JSON.stringify(response.user)
);

if (response.user.is_staff) {

    alert("Welcome Admin!");

    
    window.location.href = "/admin-dashboard";

} else {

    alert("Welcome " + response.user.username);

    
    window.location.href = "/shop";

}

    } catch (error) {

        console.error("Login error:", error);

        alert(error.message);

    }
};


    return (
        <>
            <div className="login_parent1">

                <img
                    className="login_parent1_img1"
                    src={leftimage}
                    alt="Shopping"
                />

                <h4 className="login_parent1_text1">
                    Login to countinue shopping your favorite T-shirt
                </h4>

            </div>

            <div className="login_parent2">

                <img
                    className="login_parent2_img1"
                    src={login}
                    alt="Login"
                />

                <h3 className="login_parent2_text1">
                    Login to Your Account
                </h3>

                <br />

                <form onSubmit={handleLogin}>

   <input
    type="email"
    className="login_parent2_inputone"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
/>

                    <br />

                    <input
                        type="password"
                        className="login_parent2_inputtwo"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br />
                    <br />

                    <NavLink
                        className="login_parent2_link1"
                        to="/forgot-password"
                    >
                        forget password?
                    </NavLink>

                    <br />

                    <button
                        type="submit"
                        className="login_parent2_button1"
                    >
                        Login
                    </button>

                </form>

                <br />

                <h5 className="login_parent2_text4">

                    <span>don't have a account?</span>

                    <span className="login_parent2_link2">
                        <NavLink to="/register">
                            Register Now
                        </NavLink>
                    </span>

                </h5>

            </div>



            <div className="login_parent3">
                    <img className="login_parent3_img1" src={Logo}/>        
                        <h3 className="login_parent3_text1">AX Fashion</h3>
                    <h6 className="login_parent3_text2" style={{fontSize:"9px",fontWeight:"300"}}>
                        Trendy style,comfotable fabrics,affortable prices</h6>
                    <div className="login_parent3_text3">
                        <h5>Shop</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Men's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Women's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Kid's T-Shirt</h6>
                        <div className="login_parent4_line"></div>
                    </div>
                    <div className="login_parent3_text4">
                        <h5>Quick Links</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Home</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Shop</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Cart</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Contact Us</h6>
                    </div>
                    <div className="login_parent3_text5">
                        <h5>Customer Service</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>About Us</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Terms & Conditions</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Privacy Policy</h6>
                    </div>
                    <div className="login_parent3_text6">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="login_parent3_imgtext7">
                        <img style={{height:"20px",width:"20px"}} src={gmail}/>
                        <img style={{height:"20px",width:"20px"}} src={call}/>
                        <img style={{height:"20px",width:"20px"}} src={location}/>
                    </div>
                    <div className="login_parent3_text8">
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>axfashion@gmail.com</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>+91 8428301115</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>1/123,second street,Mk road,Tirupur,India-641605.</h6>
                    </div>
                    <div className="login_parent3_text9">2026 AXfashion. All Rights Reserved.</div>
            </div>
        </>
    );
    
}
export default Login;