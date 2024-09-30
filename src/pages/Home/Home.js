import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../component/Card";
const Home = () => {
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addItemToCart = () => {
    setCartCount(cartCount + 1);
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
  };

  const logoStyle = {
    fontSize: "24px",
  };

  const cartContainerStyle = {
    position: "relative",
  };

  const cartButtonStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
  };

  const cartIconStyle = {
    width: "30px",
    height: "30px",
  };

  const cartCountStyle = {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  };

  useEffect(() => {
    // Fetch products
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  //get cart count
  const getCartCount = () => {
    return cart.length;
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  return (
    <>
      {/* Navbar */}
      <nav style={navbarStyle} className="navbarStyle">
        <div style={logoStyle} className=" logoStyle">
          My Store
        </div>
        <div style={cartContainerStyle} className="cartContainerStyle">
          <button
            style={cartButtonStyle}
            className="cartButtonStyle"
            onClick={addItemToCart}
          >
            <img src="cart-icon.png" alt="Cart" style={cartIconStyle} />
            <span style={cartCountStyle}> {getCartCount()}</span>
          </button>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
