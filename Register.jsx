import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/auth";
import { registerUser } from "../services/auth";
import {NavLink} from "react-router-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import login from "../assets/login-removebg-preview.png";
import Logo from "../assets/logo.png";
import gmail from "../assets/gmailbg.png";
import call from "../assets/call2-removebg-preview.png";
import location from "../assets/location1-removebg-preview.png";
import clock from "../assets/clockbg.png";
import fulltshirt from "../assets/tshirtfull.jpg";
import "../style/Register.css";


function Register() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const result = await registerUser({
    username: fullName,
    email: email,
    password: password,
    password2: confirmPassword,
});

            alert(result.message || "Registration successful!");

            window.location.href = "/login";

        } catch (error) {
            alert(error.message || "Registration failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="register_main">
        <div className="register_parent1">
            <img src={fulltshirt} className="register_parent1_img"/>
            <h1 className="register_parent1_text1">Join Our T-Shirt Family</h1>
            <h5 className="register_parent1_text2">Create your account and
                get the latest fashion trends.
            </h5>

        </div>


            <div className="register_parent2">

                <h2 className="register_parent2_text1">
                    Register
                </h2>


                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Full Name*"
                        className="register_parent2_box1"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email*"
                        className="register_parent2_box2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password*"
                        className="register_parent2_box4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength={8}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password*"
                        className="register_parent2_box5"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        minLength={8}
                        required
                    />

                    <button
                        type="submit"
                        className="register_parent2_btn"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>

                <div className="register_parent2_text3">

                    <span>Already have an account?</span>

                    <NavLink
                        to="/login"
                        className="register_parent2_link"
                    >
                        Login
                    </NavLink>

                </div>

            </div>
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

export default Register;
