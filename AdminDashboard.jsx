
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/AdminDashboard.css";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState({
        total_customers: 0,
        total_products: 0,
        total_orders: 0,
        pending_orders: 0,
        delivered_orders: 0
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://127.0.0.1:8000/api/adminpanel/dashboard/",
                    {
                        headers: {
                            Authorization: `Token ${token}`
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("Unable to load dashboard data");
                }

                const data = await response.json();

                setDashboard(data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        fetchDashboard();

    }, []);

    if (loading) {
        return <h2 className="admin_loading">Loading Dashboard...</h2>;
    }

    return (

        <div className="admin_dashboard">

            <aside className="admin_sidebar">

                <h2>AXFASHION</h2>

                <h4>ADMIN PANEL</h4>

                <Link to="/admin-dashboard">Dashboard</Link>

                <Link to="/admin-products">Products</Link>

                <Link to="/admin-orders">Orders</Link>

                <Link to="/admin-customers">Customers</Link>

                <Link to="/">Visit Website</Link>

            </aside>

            <main className="admin_main">

                <header className="admin_header">
                    <h2>Admin Dashboard</h2>
                    <p>Welcome to AXFASHION Admin Panel</p>
                </header>

                {error && (
                    <p className="admin_error">{error}</p>
                )}

                <div className="admin_cards">

                    <div className="admin_card">
                        <h3>Total Customers</h3>
                        <h1>{dashboard.total_customers}</h1>
                    </div>

                    <div className="admin_card">
                        <h3>Total Products</h3>
                        <h1>{dashboard.total_products}</h1>
                    </div>

                    <div className="admin_card">
                        <h3>Total Orders</h3>
                        <h1>{dashboard.total_orders}</h1>
                    </div>

                    <div className="admin_card">
                        <h3>Pending Orders</h3>
                        <h1>{dashboard.pending_orders}</h1>
                    </div>

                    <div className="admin_card">
                        <h3>Delivered Orders</h3>
                        <h1>{dashboard.delivered_orders}</h1>
                    </div>

                </div>

            </main>

        </div>

    );
}

export default AdminDashboard;
