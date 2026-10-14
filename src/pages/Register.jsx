import {NavLink} from "react-router-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import login from "../assets/login-removebg-preview.png";
import Logo from "../assets/logo.jpg";
import gmail from "../assets/gmailbg.png";
import call from "../assets/call2-removebg-preview.png";
import location from "../assets/location1-removebg-preview.png";
import clock from "../assets/clockbg.png";
import "../style/Register.css";
function Register() {
    return(
        <>
        <div className="register_main">
            <div className="register_parent1">
                <h4 className="register_parent1_text1">JOIN AXFASHION</h4>
                <h2 className="register_parent1_text2">Create Your Account</h2>
                <h6 className="register_parent1_text3">Get the latest updates,exclusive offers and a better shopping experience</h6>
                <div className="register_parent1_part1">
                    <img className="register_parent1_part1img" src={location}/>
                    <h5 className="register_parent1_part1text1">Exclusive Deals</h5>
                    <h6 className="register_parent1_part1text1">Get special offers and discounts</h6>
                </div>
                <br />
                <div className="register_parent1_part2">
                    <img className="register_parent1_part2img" src={call}/>
                    <h5 className="register_parent1_part2text1">Faster Checkout</h5>
                    <h6 className="register_parent1_part2text1">Save your details for quick orders</h6>
                </div>
                <br />
                <div className="register_parent1_part3">
                    <img className="register_parent1_part3img" src={gmail}/>
                    <h5 className="register_parent1_part3text1">Track Orders</h5>
                    <h6 className="register_parent1_part3text1">Stay updated</h6>
                </div>
                <br />
                <div className="register_parent1_part4">
                    <img className="register_parent1_part4img" src={clock}/>
                    <h5 className="register_parent1_part4text1">Personalized Experience</h5>
                    <h6 className="register_parent1_part4text1">Get recommandations just for you</h6>
                </div>
            </div>
            <div className="register_parent2">
                <h2 className="register_parent2_text1">Register</h2>
                <h6 className="register_parent2_text2">Create your account to start shopping with us</h6>
                <input type="text" placeholder="Full name*" className="register_parent2_box1"/>
                <input type="gmail" placeholder="Your email*" className="register_parent2_box2 "/>
                <input type="tell" placeholder="Mobile number*" className="register_parent2_box3"/>
                <input type="password" placeholder="Password*" className="register_parent2_box4"/>
                <input type="password" placeholder="Confirm password*" className="register_parent2_box5"/>
                <input type="text" placeholder="Your Address" className="register_parent2_box6"/>
                <button className="register_parent2_btn">Register</button>
                <div className="register_parent2_text3">
                <span>Already have an account?</span>
                    <NavLink to="/login" className="register_parent2_link">Login</NavLink>
                </div>
            </div>
            </div>
            <div className="register_parent3">
                    <img className="register_parent3_img1" src={Logo}/>        
                        <h3 className="register_parent3_text1">AX Fashion</h3>
                    <h6 className="register_parent3_text2" style={{fontSize:"9px",fontWeight:"300"}}>
                        Trendy style,comfotable fabrics,affortable prices</h6>
                    <div className="register_parent3_text3">
                        <h5>Shop</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Men's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Women's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Kid's T-Shirt</h6>
                        <div className="register_parent3_line"></div>
                    </div>
                    
                    <div className="register_parent3_text4">
                        <h5>Quick Links</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Home</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Shop</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Cart</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Contact Us</h6>
                    </div>
                    <div className="register_parent3_text5">
                        <h5>Customer Service</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>About Us</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Terms & Conditions</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Privacy Policy</h6>
                    </div>
                    <div className="register_parent3_text6">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="register_parent3_imgtext7">
                        <img style={{height:"20px",width:"20px"}} src={gmail}/>
                        <img style={{height:"20px",width:"20px"}} src={call}/>
                        <img style={{height:"20px",width:"20px"}} src={location}/>
                    </div>
                    <div className="register_parent3_text8">
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>axfashion@gmail.com</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>+91 8428301115</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>1/123,second street,Mk road,Tirupur,India-641605.</h6>
                    </div>
                    <div className="register_parent3_text9">2026 AXfashion. All Rights Reserved.</div>
            </div>
            </>
    );
    
}
export default Register;