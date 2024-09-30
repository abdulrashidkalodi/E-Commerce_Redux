import React, { useState } from "react";

function Card(product) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  };
  return (
    <div>
      <div
        key={product.id}
        style={{
          border: "1px solid #ddd",
          padding: "16px",
          width: "250px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "auto", borderRadius: "4px" }}
        />
        <div style={{ marginTop: "10px" }}>
          <h5 style={{ fontSize: "1.2em", margin: "0.5em 0" }}>
            {product.name}
          </h5>
          <p style={{ fontSize: "1em", color: "#333" }}>${product.price}</p>
          <p
            style={{
              fontSize: "0.9em",
              color: "#666",
              marginBottom: "16px",
            }}
          >
            {product.description}
          </p>

          <button
            style={{
              padding: "10px 15px",
              fontSize: "1em",
              backgroundColor: cart.find((item) => item.id === product.id)
                ? "#28a745"
                : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => handleAddToCart(product)}
          >
            {cart.find((item) => item.id === product.id)
              ? "Added to Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
