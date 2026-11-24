
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminCustomers from "./pages/AdminCustomers";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/checkout" element={<Checkout />} />
          <Route
                    path="/order-success"
                    element={<OrderSuccess />}
                />

                <Route
                    path="/my-orders"
                    element={<MyOrders />}
                />
                <Route
    path="/admin-dashboard"
    element={<AdminDashboard />}
/>
<Route
    path="/admin-products"
    element={<AdminProducts />}
/>
<Route
    path="/admin-orders"
    element={<AdminOrders />}
/>
<Route
    path="/admin-customers"
    element={<AdminCustomers />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
