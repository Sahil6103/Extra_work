import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export const Card = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <div className="col-4">
            <MDBCard>
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt=""
              ></MDBCardImage>
              <MDBCardBody>
                <h1>Hello</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  reiciendis vitae dolor adipisci eveniet repellendus molestiae
                  asperiores assumenda consequatur odit!
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-4">
            <MDBCard>
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt=""
              ></MDBCardImage>
              <MDBCardBody>
                <h1>Hello</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  reiciendis vitae dolor adipisci eveniet repellendus molestiae
                  asperiores assumenda consequatur odit!
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="col-4">
            <MDBCard>
              <MDBCardImage
                src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                alt=""
              ></MDBCardImage>
              <MDBCardBody>
                <h1>Hello</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  reiciendis vitae dolor adipisci eveniet repellendus molestiae
                  asperiores assumenda consequatur odit!
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
