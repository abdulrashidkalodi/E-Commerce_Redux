import React from "react";
import "../style/Card.css"; 
import { addToCart } from "../redux/slice/cartSlice"; 
import { useDispatch } from "react-redux";

function Card({ product }) {  
  const dispatch = useDispatch();
  // Dispatch addToCart action to Redux
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="card-image" src={product.image} alt={product.title} />
      </div>
      <div className="card-details">
        <h5 className="card-title">{product.title}</h5>
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
