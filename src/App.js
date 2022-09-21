import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">Basic</MDBBtn>
      </Link>
      <Link to="/centered-logo">
        <MDBBtn className="m-3">Centered Logo</MDBBtn>
      </Link>
      <Link to="/logo-above">
        <MDBBtn className="m-3">Logo above</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
