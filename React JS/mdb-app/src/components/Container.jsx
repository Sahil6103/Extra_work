import React from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export const Container = () => {
  return (
    <>
      <MDBContainer>
        <MDBBtn
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          Click Me
        </MDBBtn>

        <div className="modal fade" role="dialog" id="login">
          <div className="modal-dialog">
            <div className="modal-content p-5">
              <h2>Login</h2>
            </div>
          </div>
        </div>
      </MDBContainer>
    </>
  );
};
