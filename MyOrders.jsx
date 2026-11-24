
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/MyOrders.css";

function MyOrders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    useEffect(() => {

        if (!token) {
            setLoading(false);
            return;
        }

        axios.get(
            "http://127.0.0.1:8000/api/orders/my-orders/",
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            }
        )
        .then((response) => {

            setOrders(response.data);

        })
        .catch((error) => {

            console.log("My Orders Error:", error.response?.data);

        })
        .finally(() => {

            setLoading(false);

        });

    }, [token]);


    if (loading) {
        return <h2>Loading your orders...</h2>;
    }

    if (!token) {
        return <h2>Please login to view your orders.</h2>;
    }


    return (

        <div className="orders_container">

            <h1 className="orders_myorders">My Orders</h1>

            {orders.length === 0 ? (

                <h3 className="orders_noorders">You have not placed any orders yet.</h3>

            ) : (

                orders.map((order) => (

                    <div className="orders_card" key={order.id}>

                        <h2>Order #{order.id}</h2>

                        <p>
                            Date: {
                                new Date(order.created_at).toLocaleDateString()
                            }
                        </p>

                        <p>
                            Customer: {order.full_name}
                        </p>

                        <p>
                            Total: ₹{order.total_amount}
                        </p>

                        <p>
                            Status: {order.status}
                        </p>

                        <h3>Ordered Products</h3>

                        {order.items.map((item) => (

                            <div key={item.id} className="order_product">

                                <p>{item.product_name}</p>

                                <p>Price: ₹{item.price}</p>

                                <p>Quantity: {item.quantity}</p>

                                <p>Subtotal: ₹{item.subtotal}</p>

                            </div>

                        ))}

                    </div>

                ))

            )}

        </div>

    );

}

export default MyOrders;
