import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";

export default function CenteredLogo() {
  return (
    <>
      <header className="fixed-top">
        <div className="border-bottom p-3 text-center bg-white">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol
                md="5"
                className="d-flex justify-content-center justify-content-md-start align-items-center d-none d-lg-flex"
              >
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="border-all" />
                </a>
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="home" />
                </a>
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="columns me-1" />
                  <span className="d-none d-xl-inline-block">Boards</span>
                </a>

                <div className="d-flex align-items-center">
                  <MDBInput label="search" />
                  <MDBIcon fas icon="search" className="ms-2" />
                </div>
              </MDBCol>
              <MDBCol md="2" className="d-none d-lg-block">
                <a href="#!" className="ms-md-2">
                  <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                    height="35"
                  />
                </a>
              </MDBCol>
              <MDBCol
                md="5"
                className="d-flex justify-content-center justify-content-md-end align-items-center"
              >
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="plus" />
                </a>
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="info-circle" />
                </a>
                <a className="text-reset me-3" href="#">
                  <MDBIcon fas icon="bell" />
                </a>

                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link d-flex align-items-center p-0"
                    href="#"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                      className="rounded-circle"
                      height="22"
                      alt="Avatar"
                      loading="lazy"
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <MDBNavbar
          expand="lg"
          light
          bgColor="white"
          className="d-none d-lg-block"
        >
          <MDBContainer
            fluid
            className="justify-content-center justify-content-md-between"
          >
            <div className="d-flex align-items-center">
              <MDBBtn outline className="me-1">
                <MDBIcon fas icon="clipboard-list me-1" />
                Board
              </MDBBtn>

              <MDBBtn color="link" className="me-1">
                MDB BOARD
              </MDBBtn>

              <MDBBtn outline className="me-1 px-2">
                <MDBIcon fas icon="star" />
              </MDBBtn>

              <MDBBtn outline className="me-1">
                <MDBIcon fas icon="users me-2" />
                TEAM
              </MDBBtn>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="border rounded-circle"
                  alt=""
                  style={{ height: "30px" }}
                />
              </a>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/3.jpg"
                  className="border rounded-circle"
                  alt=""
                  style={{ height: "30px" }}
                />
              </a>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                  className="border rounded-circle"
                  alt=""
                  style={{ height: "30px" }}
                />
              </a>

              <a href="">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/5.jpg"
                  className="border rounded-circle"
                  alt=""
                  style={{ height: "30px" }}
                />
              </a>
              <MDBBtn
                outline
                floating
                className="me-1"
                style={{ height: "30px", width: "30px" }}
              >
                +2
              </MDBBtn>
              <MDBBtn outline className="me-1">
                <MDBIcon fas icon="user-plus me-2" />
                INVITE
              </MDBBtn>
            </div>
            <div>
              <MDBBtn outline className="me-2">
                <MDBIcon fas icon="concierge-bell me-1" />
                TIPS
              </MDBBtn>

              <MDBBtn outline>
                <MDBIcon fas icon="bars me-1" />
                Show menu
              </MDBBtn>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </header>

      <main
        id="intro"
        className="bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/fluid/city/018.jpg)",
          height: "100vh",
        }}
      >
        <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}></div>
      </main>
    </>
  );
}
