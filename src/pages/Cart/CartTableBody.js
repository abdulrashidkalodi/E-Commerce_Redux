import { MDBBtn, MDBIcon, MDBInput, MDBTableBody } from "mdb-react-ui-kit";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function CartTableBody({ item, increment, decrement, removeItem }) {
  return (
    <MDBTableBody>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={item.image}
              fluid="true"
              className="rounded-3"
              style={{ width: "120px" }}
              alt={item.title}
            />
          </div>
        </td>
        <td className="align-middle">
          <p className="" style={{ fontWeight: "500" }}>
            {item.title}
          </p>
        </td>
        <td className="align-middle">
          <p className="" style={{ fontWeight: "500" }}>
            {item.description}
          </p>
        </td>
        {/* count section */}
        <td className="align-middle">
          <div className="d-flex flex-row align-items-center">
            <MDBBtn className="px-2" color="link" onClick={decrement}>
              <MDBIcon fas icon="minus" />
            </MDBBtn>

            <MDBInput
              min={0}
              type="number"
              size="sm"
              style={{ width: "50px" }}
              value={item.cartCount}
              readOnly
            />

            <MDBBtn className="px-2" color="link" onClick={increment}>
              <MDBIcon fas icon="plus" />
            </MDBBtn>
          </div>
        </td>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>
            ${(item.price * item.cartCount).toFixed(2)}
          </p>
        </td>
        <td className="align-middle">
          <p className="" style={{ fontWeight: "500" }}>
            <MdDeleteOutline onClick={removeItem} />{" "}
          </p>
        </td>
      </tr>
    </MDBTableBody>
  );
}

export default CartTableBody;
