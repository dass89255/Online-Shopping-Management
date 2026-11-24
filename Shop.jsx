
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Shop.css";
import mainimg from "../assets/fulltshirt4.png";


function Shop() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState("All");
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    
useEffect(() => {

    setLoading(true);

    fetch("http://127.0.0.1:8000/api/products/")
        .then(async (response) => {

            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Django error:", errorText);

                throw new Error(
                    `Server Error: ${response.status}`
                );
            }

            return response.json();
        })
        .then(data => {
            console.log("Products received:", data);
            setProducts(data);
        })
        .catch(error => {
            console.error("Product loading failed:", error);
            alert(error.message);
        })
        .finally(() => {
            setLoading(false);
        });

}, []);


    const filteredProducts = products.filter((product) => {

        const categoryMatch =
            category === "All" || product.category === category;

        let priceMatch = true;

        if (price === "0-500") {
            priceMatch = product.price >= 0 && product.price <= 500;
        }

        else if (price === "501-1000") {
            priceMatch = product.price >= 501 && product.price <= 1000;
        }

        return categoryMatch && priceMatch;

    });

    const handleAddToCart = async (product) => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login to add products to cart.");
            navigate("/login");
            return;
        }

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/cart/add/",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Token ${token}`
                    },

                    body: JSON.stringify({
                        product_id: product.id,
                        quantity: 1
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Unable to add product to cart");
                return;
            }

            alert("Product added to cart successfully!");

        } catch (error) {

            console.error("Cart Error:", error);
            alert("Server connection failed. Please try again.");

        }
    };

    return (

        <div className="shop-container">

            <div className="shop_parent1">

                <h1 className="shop_parent1_text1">
                    Shop
                </h1>

                <h6 className="shop_parent1_text2">
                    Discover stylish and comfortable t-shirts for every mood and occasion
                </h6>

                <img
                    className="shop_parent1_img"
                    src={mainimg}
                    alt="AXFASHION T-shirts"
                />

            </div>


            <div className="shop_parent2">

                <span className="shop_parent2_text1">
                    Get
                </span>

                <span className="shop_parent2_text2">
                    {" "}20% Offer
                </span>

                <span className="shop_parent2_text3">
                    {" "}for all T-shirts
                </span>

            </div>


            <span>

                <label className="shop_parent3">
                    Categories
                </label>

                <select
                    className="shop_parent3_opt1"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >

                    <option value="All">All Categories</option>
                    <option value="Men">Men's</option>
                    <option value="Women">Women's</option>
                    <option value="Kids">Kids</option>

                </select>

            </span>

            <span>

                <label className="shop_parent4">
                    Prices
                </label>

                <select
                    className="shop_parent4_opt1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >

                    <option value="All">All</option>
                    <option value="0-500">0 - 500</option>
                    <option value="501-1000">501 - 1000</option>

                </select>

            </span>

            {loading ? (

                <h3 className="no_products">
                    Loading products...
                </h3>

            ) : (

                <div className="shop_parent5">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => (

                            <div
                                className="shop_parent5_card"
                                key={product.id}
                            >

                               <img
    className="shop_parent5_card_img"
    src={
        product.image
            ? product.image.startsWith("http")
                ? product.image
                : `http://127.0.0.1:8000${product.image}`
            : mainimg
    }
    alt={product.name}
    onClick={() => {
        setSelectedImage(
            product.image
                ? product.image.startsWith("http")
                    ? product.image
                    : `http://127.0.0.1:8000${product.image}`
                : mainimg
        );
        setIsZoomed(false);
    }}
    style={{ cursor: "zoom-in" }}
/>

                                <h4 className="shop_parent5_card_text">
                                    {product.name}
                                </h4>

                                <h3 className="shop_parent5_card_price">
                                    ₹{product.price}
                                </h3>

                                <button
                                    className="shop_parent5_card_btn"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to cart
                                </button>

                            </div>

                        ))

                    ) : (

                        <h3 className="no_products">
                            No products found!
                        </h3>

                    )}

                </div>

            )}
            {selectedImage && (

    <div
        className="image_preview_overlay"
        onClick={() => {
            setSelectedImage(null);
            setIsZoomed(false);
        }}
    >

        <button
            className="image_preview_close"
            onClick={() => {
                setSelectedImage(null);
                setIsZoomed(false);
            }}
        >
            ×
        </button>

        <img
            src={selectedImage}
            alt="Product Preview"
            className={`image_preview ${isZoomed ? "zoomed" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
            }}
        />

        <p className="image_preview_text">
            Click image to {isZoomed ? "zoom out" : "zoom in"}
        </p>

    </div>

)}

        </div>

    );

}

export default Shop;
