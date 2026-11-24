
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/OrderSuccess.css";

function OrderSuccess() {

    const location = useLocation();
    const navigate = useNavigate();

    const order = location.state?.order;

    if (!order) {
        return (
            <div>
                <h2>Order information not found</h2>
            </div>
        );
    }

    return (

        <div style={{
            textAlign: "center",
            padding: "50px"
        }}>

            <h1 className="OrderSuccess_placedsuccess">Order Placed Successfully!</h1>

            <h2 className="OrderSuccess_thankyou">Thank You for Shopping</h2>

            <p className="OrderSuccess_orderid">Order ID: {order.id}</p>

            <p className="OrderSuccess_customer">Customer: {order.full_name}</p>

            <p className="OrderSuccess_totalamount">
                Total Amount: ₹{order.total_amount}
            </p>

            <p className="OrderSuccess_payment">Payment: {order.payment_method}</p>

            <p className="OrderSuccess_status">Order Status: {order.status}</p>

            <button className="OrderSuccess_viewbtn" onClick={() => navigate("/my-orders")}>
                View My Orders
            </button>

            <button className="continue_btn" onClick={() => navigate("/shop")}>
                Continue Shopping
            </button>

        </div>

    );

}

export default OrderSuccess;
