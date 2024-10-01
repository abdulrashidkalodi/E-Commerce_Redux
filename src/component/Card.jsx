import React, { useState } from "react";
import "../style/Card.css"; // Import the CSS file

function Card({ product }) {  // Correctly pass the product prop
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt={product.name} />
      </div>
      <div className="card-details">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>

        <button
          className={`btn ${cart.find((item) => item.id === product.id) ? "added-to-cart" : "add-to-cart"}`}
          onClick={() => handleAddToCart(product)}
        >
          {cart.find((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart + "}
        </button>
      </div>
    </div>  );
}

export default Card;
