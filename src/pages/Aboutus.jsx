import "../style/Aboutus.css";
import image2 from "../assets/fulltshirt4.png";
import image1 from "../assets/coloursbg.png";
import image3 from "../assets/makeimg1.jpg";
import image4 from "../assets/colour1bg.png";
import image5 from "../assets/leaf.png";
import image6 from "../assets/shield.jpg";
import image7 from "../assets/custom.jpg";
import image8 from "../assets/customer.jpg";

function Aboutus() {
    return(
        <>
        <div className="about_parent1">
            <img className="about_parent1_img1" src={image1}/>
            <h1 className="about_parent1_text1">About Us</h1>
            <img className="about_parent1_img2" src={image2}/>
        </div>
        <div className="about_parent2">
            <h4 className="about_parent2_text1">OUR STORY</h4>
            <img src={image4} className="about_parent2_img1"/>
            <h2 className="about_parent2_text2">Bringing Colour to Your World</h2>
            <h6 className="about_parent2_text3">At AXFashion,We believe that every t-shirt tells
                a story.Our journey began with a simple idea-to transform plain t-shirts into
                unique,vibrant pieces of art through the power of colour
            </h6>
            <h6 className="about_parent2_text4">We are a dedicated t-shirt dyeing company,offering
                high quality,eco-friendly dyeing services for individuals,businesses and brands.
                From bold solids to custom designs,we bring your ideas to life with vibrant colours 
                and long-lasting results.
            </h6>
            <h6 className="about_parent2_text5">Our mission is to make every t-shirt special
                -with creativity,quality and care,we add colour to your everyday wear.
            </h6>
        </div>
        <div>
            <img src={image3} className="about_parent3_img1"/>
        </div>
        <div className="about_parent4">
            <div className="about_parent4_box1">
                <img className="about_parent4_img" src={image5}/>
                <h5 className="about_parent4_text1">Eco-friendly Process</h5>
                <h6 className="about_parent4_text2">We used safe andsustainable dyeing method</h6>
            </div>
            <div className="about_parent4_box1">
                <img className="about_parent4_img" src={image6}/>
                <h5 className="about_parent4_text1">High Quality</h5>
                <h6 className="about_parent4_text2">Vibrant colours that last wash after wash</h6>
            </div>
            <div className="about_parent4_box1">
                <img className="about_parent4_img" src={image7}/>
                <h5 className="about_parent4_text1">Custom Designs</h5>
                <h6 className="about_parent4_text2">Your style,Your colour,Your way</h6>
            </div>
            <div className="about_parent4_box1">
                <img className="about_parent4_img" src={image8}/>
                <h5 className="about_parent4_text1">Customer Satisfaction</h5>
                <h6 className="about_parent4_text2">We're with you at every step of the process</h6>
            </div>
            <h1 className="about_parent4_line1"></h1>
            <h1 className="about_parent4_line2"></h1>
            <h1 className="about_parent4_line3"></h1>
        </div>
        </>
    );
    
}
export default Aboutus;