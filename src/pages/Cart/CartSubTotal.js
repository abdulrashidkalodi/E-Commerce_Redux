import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import React from "react";

function CartSubTotal() {
  return (
    <div lg="4" xl="3">
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "500" }}
      >
        <p className="mb-2">Subtotal</p>
        <p className="mb-2">$23.49</p>
      </div>

      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "500" }}
      >
        <p className="mb-0">Shipping</p>
        <p className="mb-0">$2.99</p>
      </div>

      <hr className="my-4" />

      <div
        className="d-flex justify-content-between mb-4"
        style={{ fontWeight: "500" }}
      >
        <p className="mb-2">Total (tax included)</p>
        <p className="mb-2">$26.48</p>
      </div>

      <MDBBtn block size="lg">
        <div className="d-flex justify-content-between">
          <span>Checkout</span>
          <span>$26.48</span>
        </div>
      </MDBBtn>
    </div>
  );
}

export default CartSubTotal;
