import React, { useState } from "react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

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

  return (
    <nav style={navbarStyle} className="navbarStyle">
      <div style={logoStyle} className=" logoStyle">My Store</div>
      <div style={cartContainerStyle} className="cartContainerStyle">
        <button style={cartButtonStyle} className="cartButtonStyle" onClick={addItemToCart}>
          <img src="cart-icon.png" alt="Cart" style={cartIconStyle} />
          <span style={cartCountStyle}>{cartCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
