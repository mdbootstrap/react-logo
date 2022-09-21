import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBNavbarToggler
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setShowNav(!showNav)}
      >
        <MDBIcon icon="bars" fas />
      </MDBNavbarToggler>

      <MDBContainer className="d-flex justify-content-center">
        <MDBRow>
          <MDBCol size="12">
            <MDBNavbarBrand
              href="#"
              className="d-flex justify-content-center mb-3"
            >
              Navbar
            </MDBNavbarBrand>
          </MDBCol>
          <MDBCol size="12">
            <MDBCollapse navbar show={showNav}>
              <MDBNavbarNav className="d-flex justify-content-center">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    <MDBIcon fas icon="plus-circle pe-2" />Post
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <MDBIcon fas icon="bell pe-2" />Alerts
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <MDBIcon fas icon="heart pe-2" />Trips
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBNavbar>
  );
}
