import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";

function CartSubTotal() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount);
  // calculate sub totel
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.cartCount;
  }, 0);

  return (
    <div lg="4" xl="3">
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "500" }}
      >
        <p className="mb-2">Subtotal ({cartCount} items)</p>
        <p className="mb-2">$ {subtotal.toFixed(2)}</p>
      </div>
      <hr className="my-4" />
      <MDBBtn block size="lg">
        <div className="d-flex justify-content-between">
          <span>Checkout</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </MDBBtn>
    </div>
  );
}

export default CartSubTotal;
