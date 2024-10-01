import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import "../../style/cartPage.css"; // Import the CSS file
import CartTableBody from "./CartTableBody";
import CartSubTotal from "./CartSubTotal";

export default function CartPage() {
  return (
    <section className="h-100 ">
      <MDBContainer className="py-2 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Cart Items
                  </th>
                  <th scope="col">Format</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              {/* cart table body component */}
              <CartTableBody />
              <CartTableBody />
              <CartTableBody />
              <CartTableBody />
              <CartTableBody />
            </MDBTable>
          </MDBCol>
          {/* cart subtotal component */}
          <CartSubTotal />
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
