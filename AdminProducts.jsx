
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/AdminProducts.css";

const API_URL = "http://127.0.0.1:8000/api/products/";

function AdminProducts() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        stock: "",
        image: null
    });

    const token = localStorage.getItem("token");

    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Unable to fetch products");
            }

            const data = await response.json();
            setProducts(data);

        } catch (error) {
            console.error(error);
            alert("Failed to load products");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const resetForm = () => {
        setFormData({
            name: "",
            category: "",
            description: "",
            price: "",
            stock: "",
            image: null
        });

        setEditId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            alert("Admin login required");
            navigate("/admin-login");
            return;
        }

        const data = new FormData();

        data.append("name", formData.name);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("price", formData.price);
        data.append("stock", formData.stock);

        if (formData.image) {
            data.append("image", formData.image);
        }

     const url = editId
    ? `${API_URL}${editId}/`
    : API_URL;

        try {
            const response = await fetch(url, {
    method: editId ? "PATCH" : "POST",
    headers: {
        Authorization: `Token ${token}`
    },
    body: data
});

            if (!response.ok) {
                const error = await response.json();
                console.error(error);
                throw new Error("Product operation failed");
            }

            alert(
                editId
                    ? "Product updated successfully!"
                    : "Product added successfully!"
            );

            resetForm();
            await fetchProducts();

        } catch (error) {
            alert(error.message);
        }
    };

   const handleEdit = (product) => {

    setEditId(product.id);

    setFormData({
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: null
    });

    setShowForm(true);
};

    const handleDelete = async (id) => {

        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}${id}/`, {
                method: "DELETE",
                headers: {
                    Authorization: `Token ${token}`
                }
            });

            if (!response.ok) {
                throw new Error("Unable to delete product");
            }

            alert("Product deleted successfully!");
            fetchProducts();

        } catch (error) {
            alert(error.message);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="admin_products">

            <div className="admin_products_header">
                <div>
                    <h1>Manage Products</h1>
                    <p>Manage your AXFASHION products</p>
                </div>

                <button
                    className="add_product_btn"
                    onClick={() => {
                        resetForm();
                        setShowForm(true);
                    }}
                >
                    + Add Product
                </button>
            </div>

            <input
                type="text"
                className="product_search"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {showForm && (
                <div className="product_form_container">

                    <h2>
                        {editId ? "Edit Product" : "Add New Product"}
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            name="name"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>

                        <textarea
                            name="description"
                            placeholder="Product Description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            required
                        />

                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value={formData.stock}
                            onChange={handleChange}
                            min="0"
                            required
                        />

                        <label>Product Image</label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                        />

                        <div className="product_form_buttons">

                            <button type="submit">
                                {editId ? "Update Product" : "Save Product"}
                            </button>

                            <button
                                type="button"
                                onClick={resetForm}
                                className="cancel_btn"
                            >
                                Cancel
                            </button>

                        </div>

                    </form>
                </div>
            )}

            <div className="products_table_container">

                <table className="products_table">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredProducts.length > 0 ? (

                            filteredProducts.map(product => (

                                <tr key={product.id}>

                                    <td>{product.id}</td>

                                    <td>
                                        {product.image && (
                                           <img
    src={
        product.image?.startsWith("http")
            ? product.image
            : `http://127.0.0.1:8000${product.image}`
    }
    alt={product.name}
    className="admin_product_image"
/>
                                        )}
                                    </td>

                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>₹{product.price}</td>
                                    <td>{product.stock}</td>

                                    <td>
                                        <button
                                            className="edit_btn"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete_btn"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>

                            ))

                        ) : (
                            <tr>
                                <td colSpan="7">No products found</td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default AdminProducts;
