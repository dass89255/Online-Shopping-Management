
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Cart.css";

function Cart() {

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const API_URL = "http://127.0.0.1:8000/api/cart/";

    // Get cart products from Django
    const fetchCart = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login to view your cart.");
            navigate("/login");
            return;
        }

        try {

            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                }
            });

            const data = await response.json();

            console.log("Cart API Response:", data);

            if (!response.ok) {

                if (response.status === 401) {
                    alert("Your session is invalid. Please login again.");
                    navigate("/login");
                    return;
                }

                throw new Error(data.detail || data.error || "Unable to load cart");
            }

            // Supports both list and object API responses
            setCart(Array.isArray(data) ? data : (data.cart_items || []));

        } catch (error) {

            console.error("Cart loading error:", error);
            alert(error.message);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Remove product from Django cart
    const removeItem = async (id) => {

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(`${API_URL}remove/${id}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to remove product");
            }

            setCart(prevCart => prevCart.filter(item => item.id !== id));

            alert("Product removed from cart!");

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Update product quantity in Django
    const updateQuantity = async (id, quantity) => {

        if (quantity < 1) return;

        const token = localStorage.getItem("token");

        try {

            const response = await fetch(`${API_URL}update/${id}/`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify({ quantity: quantity })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to update quantity");
            }

            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === id ? data : item
                )
            );

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Calculate total
    const totalPrice = cart.reduce(
        (total, item) =>
            total + Number(item.total_price || Number(item.product_price || item.price || 0) * item.quantity),
        0
    );

    if (loading) {
        return <div className="cart_container">
            <h2>Loading your cart...</h2>
        </div>;
    }

    return (

        <div className="cart_container">

            <h1>My Shopping Cart</h1>

            {cart.length === 0 ? (

                <h3>Your cart is empty!</h3>

            ) : (

                <>

                    <div className="cart_products">

                        {cart.map((item) => {

                            const productName =
                                item.product_name || item.name;

                            const productImage =
                                item.product_image || item.image;

                            const productPrice =
                                Number(item.product_price || item.price || 0);

                            return (

                                <div className="cart_card" key={item.id}>

                                    <img
                                        src={productImage}
                                        alt={productName}
                                        width="150"
                                    />

                                    <h3>{productName}</h3>

                                    <h4>₹{productPrice}</h4>

                                    <button
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity - 1)
                                        }
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </button>

                                    <span> {item.quantity} </span>

                                    <button
                                        onClick={() =>
                                            updateQuantity(item.id, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>

                                    <h4>
                                        Subtotal: ₹
                                        {Number(
                                            item.total_price ||
                                            productPrice * item.quantity
                                        )}
                                    </h4>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>

                                </div>

                            );
                        })}

                    </div>

                    <h2>Total Amount: ₹{totalPrice.toFixed(2)}</h2>


<button className="checkout_btn" onClick={() => navigate("/checkout")}>
    Proceed to Checkout
</button>

                </>

            )}

        </div>
    );
}

export default Cart;
