
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Checkout.css";

function Checkout() {

    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const token = localStorage.getItem("token");

    useEffect(() => {

        if (!token) {
            navigate("/login");
            return;
        }

        axios.get("http://127.0.0.1:8000/api/cart/", {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        .then((response) => {

    console.log("Cart API Response:", response.data);

    const cartData = Array.isArray(response.data)
        ? response.data
        : response.data.cart_items || response.data.items || [];

    setCart(cartData);

})
        .catch((error) => {
            console.log("Cart error:", error);
        })
        .finally(() => {
            setLoading(false);
        });

    }, [token, navigate]);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const totalAmount = Array.isArray(cart)
    ? cart.reduce(
        (total, item) =>
            total + Number(item.total_price || 0),
        0
    )
    : 0;


    const handleSubmit = async (e) => {

        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty");
            return;
        }

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/api/orders/checkout/",
                formData,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            );

            navigate("/order-success", {
                state: {
                    order: response.data.order
                }
            });

        } catch (error) {

            console.log("Order error:", error.response?.data);

            alert(
                error.response?.data?.error ||
                "Unable to place order"
            );

        }

    };


    if (loading) {
        return <h2>Loading checkout...</h2>;
    }


    return (

        <div className="checkout_container">

            <h1>Checkout</h1>

            <div className="checkout_content">

                <div className="checkout_form">

                    <h2>Delivery Details</h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="full_name"
                            className="checkout_inputone"
                            placeholder="Full Name"
                            value={formData.full_name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            className="checkout_inputtwo"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            className="checkout_inputthree"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="address"
                            placeholder="Full Delivery Address"
                            className="checkout_inputfour"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="checkout_inputfive"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            className="checkout_inputsix"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="pincode"
                            className="checkout_inputseven"
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                        />

                        <h3>Payment Method</h3>

                        <p className="checkout_cashondelivery">Cash on Delivery (COD)</p>

                        <button type="submit">
                            Place Order
                        </button>

                    </form>

                </div>


                <div className="order_summary">

                    <h2>Order Summary</h2>

                    {cart.map((item) => (

                        <div className="summary_item" key={item.id}>


                            <p>{item.name}</p>

                            <p>
                                ₹{item.price} × {item.quantity}
                            </p>

                            <p>
                                ₹{item.total_price}
                            </p>

                        </div>

                    ))}

                    <hr />

                    <h3>
                        Total: ₹{totalAmount.toFixed(2)}
                    </h3>

                </div>

            </div>

        </div>

    );

}

export default Checkout;
