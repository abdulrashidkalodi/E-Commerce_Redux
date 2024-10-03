import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import "../../style/cartPage.css"; 
import CartTableBody from "./CartTableBody";
import CartSubTotal from "./CartSubTotal";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  removeFromCart,
} from "../../redux/slice/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <section className="h-100 ">
      <MDBContainer className="py-2 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h6">
                    Cart Items
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </MDBTableHead>
              {/* cart table body component */}
              {cartItems.map((item) => (
                <CartTableBody
                  key={item.id}
                  item={item}
                  increment={() => dispatch(incrementCount(item.id))}
                  decrement={() => dispatch(decrementCount(item.id))}
                  removeItem={() => dispatch(removeFromCart(item.id))}
                />
              ))}
            </MDBTable>
          </MDBCol>
          {/* cart subtotal component */}
          <CartSubTotal />
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
