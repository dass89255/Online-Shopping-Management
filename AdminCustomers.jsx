
import React, { useState, useEffect } from "react";
import "../style/AdminCustomers.css";

const API_URL = "http://127.0.0.1:8000/api/auth/admin-customers/";

function AdminCustomers() {

    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const fetchCustomers = async () => {

        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            if (!response.ok) {
                throw new Error("Unable to fetch customers");
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!token) {
            alert("Please login as admin");
            setLoading(false);
            return;
        }
        fetchCustomers();
    }, []);


    const filteredCustomers = customers.filter(customer => {

        const searchValue = search.toLowerCase();

        return (
            customer.username.toLowerCase().includes(searchValue) ||
            customer.email.toLowerCase().includes(searchValue) ||
            customer.first_name.toLowerCase().includes(searchValue) ||
            customer.last_name.toLowerCase().includes(searchValue) ||
            String(customer.id).includes(searchValue)
        );
    });
    if (loading) {
        return (
            <h2 className="customers_loading">Loading customers...</h2>
        );
    }

    const handleDelete = async (userId) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this customer?");
    if (!confirmDelete) return;
    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            `http://127.0.0.1:8000/api/auth/admin-customers/${userId}/delete/`,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to delete customer");
        }
        alert("Customer deleted successfully!");
        fetchCustomers();
    } catch (error) {
        console.error("Delete error:", error);
        alert(error.message);
    }
};

    return (

        <div className="admin_customers">
            <div className="customers_header">
                <div>
                    <h1>Manage Customers</h1>
                    <p>View all registered AXFASHION customers</p>
                </div>
                <div className="customers_count">Total Customers: {customers.length}
                </div>
            </div>

            <div className="customers_summary">
                <div className="customer_summary_card">
                    <h3>Total Customers</h3>
                    <h2>{customers.length}</h2>
                </div>

                <div className="customer_summary_card">
                    <h3>Active Customers</h3>
                    <h2>
                        {customers.filter(customer => customer.is_active).length}
                    </h2>
                </div>

                <div className="customer_summary_card">
                    <h3>Inactive Customers</h3>
                    <h2>
                        {customers.filter(customer => !customer.is_active).length}
                    </h2>
                </div>

            </div>

            <input type="text" className="customers_search" placeholder="Search by customer name, email or ID..."
                value={search}onChange={(e) => setSearch(e.target.value)}/>

            <div className="customers_table_container">
                <table className="customers_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Registered Date</th>
                            <th>Status</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers.length > 0 ? (
                            filteredCustomers.map(customer => (
                                <tr key={customer.id}>
                                    <td>#{customer.id}</td>
                                    <td>{customer.username}</td>
                                    <td>
                                        {customer.first_name || "-"}
                                    </td>
                                    <td>
                                        {customer.last_name || "-"}
                                    </td>
                                    <td>{customer.email}</td>
                                    <td>
                                        {new Date(customer.date_joined).toLocaleDateString("en-IN")}
                                    </td>

                                    {/* <td>
    <button className="customer_delete_btn" onClick={() => handleDelete(customer.id)}>
        Delete</button>
</td> */}
                                    <td>
                                        <span className={customer.is_active
                                                ? "customer-active"
                                                : "customer-inactive"
                                        }>
                                            {customer.is_active
                                                ? "Active"
                                                : "Inactive"}
                                        </span>
                                    </td>
                                    <td>
    <button className="customer_delete_btn" onClick={() => handleDelete(customer.id)}>
        Delete</button>
</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">    No customers found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AdminCustomers;
