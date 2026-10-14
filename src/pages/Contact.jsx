import tshirt1 from "../assets/fulltshirt4.png";
import Logo from "../assets/logo.jpg";
import gmail from "../assets/gmailbg.png";
import call from "../assets/call2-removebg-preview.png";
import location from "../assets/location1-removebg-preview.png";
import clock from "../assets/clockbg.png";
import "../style/Contact.css";
function Contact() {
        return(
            <>
            <div className="contact_parent1">
                <h1 className="contact_parent1_text">Contact</h1>
                <img className="contact_parent1_img" src={tshirt1}/>
            </div>
           
            <div className="contact_parent2">
                <h2 className="contact_parent2_text1">Get in Touch</h2>
                <h6 className="contact_parent2_text2">we'd love to hear from you!Whether you 
                have a question ,feedback ,or need assistance,feel free reach out to us.</h6>
                <div className="contact_parent2_part1">
                    <img className="contact_parent2_part1img" src={location}/>
                    <h5 className="contact_parent2_part1text1">Our Address</h5>
                    <h6 className="contact_parent2_part1text1">123,Bharathi Nagar,Chennai-645321,India</h6>
                </div>
                <br />
                <div className="contact_parent2_part2">
                    <img className="contact_parent2_part2img" src={call}/>
                    <h5 className="contact_parent2_part2text1">Phone</h5>
                    <h6 className="contact_parent2_part2text1">+91 4357489654</h6>
                </div>
                <br />
                <div className="contact_parent2_part3">
                    <img className="contact_parent2_part3img" src={gmail}/>
                    <h5 className="contact_parent2_part3text1">Email</h5>
                    <h6 className="contact_parent2_part3text1">axfashion@gmail.com</h6>
                </div>
                <br />
                <div className="contact_parent2_part4">
                    <img className="contact_parent2_part4img" src={clock}/>
                    <h5 className="contact_parent2_part4text1">business Hours</h5>
                    <h6 className="contact_parent2_part4text1">Mon-Sat:9:00am-6:00pm Sunday:closed</h6>
                </div>
            </div>
            <div className="contact_parent3">
                <h2 className="contact_parent3_text1">Send us a Message</h2>
                <h6 className="contact_parent3_text2">Fill out the form below and we'll get back to you as soon as possible</h6>
                <input type="text" className="contact_parent3_box1" placeholder="Your Name*"/>
                <input type="gmail" className="contact_parent3_box2" placeholder="Your gmail*"/>
                <input type="text" className="contact_parent3_box3" placeholder="subject*"/>
                <textarea className="contact_parent3_box4" placeholder="meassage*"></textarea>
                <button className="contact_parent3_btn">Send</button>
            </div>
            <div className="contact_parent4">
                    <img className="contact_parent4_img1" src={Logo}/>        
                        <h3 className="contact_parent4_text1">AX Fashion</h3>
                    <h6 className="contact_parent4_text2" style={{fontSize:"9px",fontWeight:"300"}}>
                        Trendy style,comfotable fabrics,affortable prices</h6>
                    <div className="contact_parent4_text3">
                        <h5>Shop</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Men's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Women's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Kid's T-Shirt</h6>
                        <div className="contact_parent4_line"></div>
                    </div>
                    <div className="contact_parent4_text4">
                        <h5>Quick Links</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Home</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Shop</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Cart</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Contact Us</h6>
                    </div>
                    <div className="contact_parent4_text5">
                        <h5>Customer Service</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>About Us</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Terms & Conditions</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Privacy Policy</h6>
                    </div>
                    <div className="contact_parent4_text6">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="contact_parent4_imgtext7">
                        <img style={{height:"20px",width:"20px"}} src={gmail}/>
                        <img style={{height:"20px",width:"20px"}} src={call}/>
                        <img style={{height:"20px",width:"20px"}} src={location}/>
                    </div>
                    <div className="contact_parent4_text8">
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>axfashion@gmail.com</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>+91 8428301115</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>1/123,second street,Mk road,Tirupur,India-641605.</h6>
                    </div>
                    <div className="contact_parent4_text9">2026 AXfashion. All Rights Reserved.</div>
            </div> 
            </>
        );    
}
export default Contact;