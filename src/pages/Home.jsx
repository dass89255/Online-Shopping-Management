import "../style/Home.css";
import img1 from "../assets/fulltshirt15-removebg-preview.png"
import mens from "../assets/mentshirt-removebg-preview.png";
import womens from "../assets/tshirt4-removebg-preview.png"
import kids from "../assets/kidtshirt-removebg-preview.png";
import owntshirt from "../assets/owntshirtre.png";
import owntshirt5 from "../assets/owntshirt5re.png";
import tshirt from "../assets/tshirt1re.png";
import tshirt2 from "../assets/tshirt2re.png";
import tshirt8 from "../assets/tshirt8re.png";
import tshirt10 from "../assets/tshirt10re.png";
import tshirt24 from "../assets/tshirt24re.png";
import tshirt23 from "../assets/tshirt23re.png";
import Logo from "../assets/logo.jpg";
import gmail from "../assets/gmailbg.png";
import call from "../assets/call2-removebg-preview.png";
import location from "../assets/location1-removebg-preview.png";
function Home() {
    return(
        <>
        <div className="home_parent1">
            <h6 className="home_parent1_text1">NEW COLLECTION</h6>
            <h1 className="home_parent1_text2">Find Your Perfect T-Shirt</h1>
            <h5 className="home_parent1_text3">Trendy styles,Comfortable fabrics,Affordable prices</h5>
            <h6 className="home_parent1_text4">Explore our collection of styles and comfortable T-Shirt 
                designed for everyday wear.Choose your favourite style.</h6>
                <div className="home_parent1_box1"></div>
            <img className="home_parent1_img1" src={img1}/>
            </div>
            <div className="home_parent2">
                <h3 className="home_parent2_text1">Available Categories</h3>
                <div className="home_parent2_carts">
                <div className="home_parent2_cart1">
                    <img className="home_parent2_cart1img" src={mens}/>
                    <h3 className="home_parent2_cart1text">Men's T-Shirt</h3>
                </div>
                <div div className="home_parent2_cart2">
                   <img className="home_parent2_cart2img" src={womens}/>
                    <h3 className="home_parent2_cart2text">Women's T-Shirt</h3> 
                </div>
                <div div className="home_parent2_cart3">
                    <img className="home_parent2_cart3img" src={kids}/>
                    <h3 className="home_parent2_cart3text" >Kid's T-Shirt</h3>
                </div>
                </div>
            </div>
            <h3 className="home_parent3">Featured T-Shirts</h3>
            <div className="home_parent4">
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={owntshirt}/>
                    <h4 className="home_parent4_carttext1">Printed T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={owntshirt5}/>
                    <h4 className="home_parent4_carttext1">Printed T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt10}/>
                    <h4 className="home_parent4_carttext1">Fox Printing T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt}/>
                    <h4 className="home_parent4_carttext1">Circle Tie & Tye T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt23}/>
                    <h4 className="home_parent4_carttext1">Tri-Colour T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt24}/>
                    <h4 className="home_parent4_carttext1">Cloudy Colour T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt2}/>
                    <h4 className="home_parent4_carttext1">Ring Colour T-Shirt</h4>
                </div>
                <div className="home_parent4_cart1">
                    <img className="home_parent4_cartimg" src={tshirt8}/>
                    <h4 className="home_parent4_carttext1">Wave Colour T-Shirt</h4>
                </div>
            </div>
            <div className="home_parent5">
                    <img className="home_parent5_img1" src={Logo}/>        
                        <h3 className="home_parent5_text1">AX Fashion</h3>
                    <h6 className="home_parent5_text2" style={{fontSize:"9px",fontWeight:"300"}}>
                        Trendy style,comfotable fabrics,affortable prices</h6>
                    <div className="home_parent5_text3">
                        <h5>Shop</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Men's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Women's T-Shirt</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Kid's T-Shirt</h6>
                        <div className="home_parent4_line"></div>
                    </div>
                    <div className="home_parent5_text4">
                        <h5>Quick Links</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Home</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Shop</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Cart</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Contact Us</h6>
                    </div>
                    <div className="home_parent5_text5">
                        <h5>Customer Service</h5>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>About Us</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Terms & Conditions</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>Privacy Policy</h6>
                    </div>
                    <div className="home_parent5_text6">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="home_parent5_imgtext7">
                        <img style={{height:"20px",width:"20px"}} src={gmail}/>
                        <img style={{height:"20px",width:"20px"}} src={call}/>
                        <img style={{height:"20px",width:"20px"}} src={location}/>
                    </div>
                    <div className="home_parent5_text8">
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>axfashion@gmail.com</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>+91 8428301115</h6>
                        <h6 style={{fontSize:"9px",fontWeight:"300"}}>1/123,second street,Mk road,Tirupur,India-641605.</h6>
                    </div>
                    <div className="home_parent5_text9">2026 AXfashion. All Rights Reserved.</div>
            </div>

        </>
    );
    
}
export default Home;