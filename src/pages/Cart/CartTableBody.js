import { MDBBtn, MDBIcon, MDBInput, MDBTableBody } from "mdb-react-ui-kit";
import React from "react";

function CartTableBody() {
  return (
    <MDBTableBody>
      <tr>
        <th scope="row">
          <div className="d-flex align-items-center">
            <img
              src="https://i.imgur.com/2DsA49b.webp"
              fluid
              className="rounded-3"
              style={{ width: "120px" }}
              alt="Book"
            />
            <div className="flex-column ms-4">
              <p className="mb-2">Thinking, Fast and Slow</p>
              <p className="mb-0">Daniel Kahneman</p>
            </div>
          </div>
        </th>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>
            Digital
          </p>
        </td>
        <td className="align-middle">
          <div class="d-flex flex-row align-items-center">
            <MDBBtn className="px-2" color="link">
              <MDBIcon fas icon="minus" />
            </MDBBtn>

            <MDBInput
              min={0}
              type="number"
              size="sm"
              style={{ width: "50px" }}
              defaultValue={2}
            />

            <MDBBtn className="px-2" color="link">
              <MDBIcon fas icon="plus" />
            </MDBBtn>
          </div>
        </td>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>
            $9.99
          </p>
        </td>
      </tr>
    </MDBTableBody>
  );
}

export default CartTableBody;
