
import React, { useState, useEffect } from "react";
import "../style/AdminOrders.css";

const API_URL = "http://127.0.0.1:8000/api/orders/";

function AdminOrders() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const token = localStorage.getItem("token");

    const statuses = [
        "Pending",
        "Confirmed",
        "Shipped",
        "Delivered",
        "Cancelled"
    ];

    const fetchOrders = async () => {

        try {

            const response = await fetch(
                `${API_URL}admin-orders/`,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Unable to fetch orders");
            }

            const data = await response.json();

            setOrders(data);

        } catch (error) {

            console.error(error);
            alert(error.message);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        if (!token) {
            alert("Admin login required");
            setLoading(false);
            return;
        }

        fetchOrders();

    }, []);

    const updateStatus = async (orderId, newStatus) => {

        try {

            const response = await fetch(
                `${API_URL}admin-orders/${orderId}/status/`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`
                    },

                    body: JSON.stringify({
                        status: newStatus
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Status update failed"
                );
            }

            alert("Order status updated successfully!");

            fetchOrders();

            if (selectedOrder?.id === orderId) {
                setSelectedOrder(data.order);
            }

        } catch (error) {

            alert(error.message);

        }
    };

    const filteredOrders = orders.filter(order => {

        const searchValue = search.toLowerCase();

        return (
            String(order.id).includes(searchValue) ||
            order.full_name.toLowerCase().includes(searchValue) ||
            order.email.toLowerCase().includes(searchValue)
        );

    });

    if (loading) {
        return <h2 className="orders_loading">Loading orders...</h2>;
    }

    return (

        <div className="admin_orders">

            <div className="admin_orders_header">

                <div>
                    <h1>Manage Orders</h1>
                    <p>View and manage AXFASHION customer orders</p>
                </div>

                <div className="orders_count">
                    Total Orders: {orders.length}
                </div>

            </div>

            <div className="orders_summary">

                <div className="order_summary_card">
                    <h3>Total Orders</h3>
                    <h2>{orders.length}</h2>
                </div>

                <div className="order_summary_card">
                    <h3>Pending</h3>
                    <h2>
                        {orders.filter(
                            o => o.status === "Pending"
                        ).length}
                    </h2>
                </div>

                <div className="order_summary_card">
                    <h3>Delivered</h3>
                    <h2>
                        {orders.filter(
                            o => o.status === "Delivered"
                        ).length}
                    </h2>
                </div>

            </div>

            <input
                type="text"
                className="orders_search"
                placeholder="Search by order ID, customer name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="orders_table_container">

                <table className="orders_table">

                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Total Amount</th>
                            <th>Payment</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredOrders.length > 0 ? (

                            filteredOrders.map(order => (

                                <tr key={order.id}>

                                    <td>#{order.id}</td>

                                    <td>{order.full_name}</td>

                                    <td>{order.email}</td>

                                    <td>
                                        ₹{order.total_amount}
                                    </td>

                                    <td>{order.payment_method}</td>

                                    <td>
                                        {new Date(
                                            order.created_at
                                        ).toLocaleDateString("en-IN")}
                                    </td>

                                    <td>

                                        <select
                                            className={`order_status ${order.status.toLowerCase()}`}
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            {statuses.map(status => (

                                                <option
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </option>

                                            ))}

                                        </select>

                                    </td>

                                    <td>

                                        <button
                                            className="view_order_btn"
                                            onClick={() =>
                                                setSelectedOrder(order)
                                            }
                                        >
                                            View
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>
                                <td colSpan="8">
                                    No orders found
                                </td>
                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

            {selectedOrder && (

                <div className="order_details_container">

                    <div className="order_details_header">

                        <h2>
                            Order Details #{selectedOrder.id}
                        </h2>

                        <button
                            onClick={() => setSelectedOrder(null)}
                        >
                            Close
                        </button>

                    </div>

                    <h3>Customer Details</h3>

                    <p>
                        <strong>Name:</strong>{" "}
                        {selectedOrder.full_name}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {selectedOrder.email}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {selectedOrder.phone}
                    </p>

                    <h3>Delivery Address</h3>

                    <p>{selectedOrder.address}</p>

                    <p>
                        {selectedOrder.city},{" "}
                        {selectedOrder.state} -{" "}
                        {selectedOrder.pincode}
                    </p>

                    <h3>Ordered Products</h3>

                    <div className="ordered_products">

                        {selectedOrder.items.map(item => (

                            <div
                                className="ordered_product_item"
                                key={item.id}
                            >

                                <span>{item.product_name}</span>

                                <span>
                                    ₹{item.price} × {item.quantity}
                                </span>

                                <strong>
                                    ₹{item.subtotal}
                                </strong>

                            </div>

                        ))}

                    </div>

                    <h3>
                        Total Amount: ₹{selectedOrder.total_amount}
                    </h3>

                    <p>
                        Payment Method: {selectedOrder.payment_method}
                    </p>

                    <p>
                        Order Status: {selectedOrder.status}
                    </p>

                </div>

            )}

        </div>

    );

}

export default AdminOrders;
