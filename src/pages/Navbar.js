import React from "react";
import { useSelector } from "react-redux"; // Import useSelector to get the cart count
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartCount); // Get cart count from Redux
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <Link to={"/"}>
          <a className="navbar-brand">Navbar</a>
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <Link to={"/cartPage"}>
          <span className="material-icons">shopping_cart</span> {cartCount}{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
