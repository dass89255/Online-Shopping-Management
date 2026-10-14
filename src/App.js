import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route>
          <Route path="/" element={<Home/>}/>
           <Route path="/shop" element={<Shop/>}/>
             <Route path="/aboutus" element={<Aboutus/>}/>
              <Route path="/contact" element={<Contact/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
//  <nav className="parent_nav">
//             <img src={Logo} className="navbar_img1"/>
//             <span className="navbar_companyname">AX Fashion</span>
//             <NavLink to="/home" className="navbar_home">Home</NavLink>
//             <NavLink to="/shop" className="navbar_shop">Shop</NavLink>
//             <NavLink to="/aboutus" className="navbar_aboutus">About Us</NavLink>
//             <NavLink to="/contact" className="navbar_contact">Contact</NavLink>
//             <NavLink to="/login" className="navbar_login">Login</NavLink>
//         </nav>
