import React from "react";
import "../style/Card.css"; // Import the CSS file
import { addToCart } from "../redux/slice/cartSlice"; // Import addToCart action
import { useDispatch } from "react-redux";

function Card({ product }) {  // Correctly pass the product prop
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch addToCart action to Redux
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
          className="btn add-to-cart"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>  );
}

export default Card;
