import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import UberImg from "./../../resources/Uber-White-Logo.wine.svg";
import "./Navbar.css";
import WalletImg from "./../../resources/wallet-svgrepo-com.svg";
import PromoImg from "./../../resources/promo.svg";
import TripsImg from "./../../resources/trips.svg";
import supportMessageImg from "./../../resources/supportMessage.svg";
import UserSettingsImg from "./../../resources/user-settings.svg";

//user-settings.svg

const NavBar = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="top"
        expand="lg"
        className="navbar-main"
      >
        <Container>
          <Navbar.Brand href="#home" className="align-self-end">
            <img src={UberImg} height="50" width="50" alt="Uber" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="#home" className="active">
                Ride
              </Nav.Link>
              <Nav.Link href="#link" className="active">
                Drive
              </Nav.Link>
              <Nav.Link href="#more" className="active">
                More
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="active">
                Help
              </Nav.Link>

              <NavDropdown title="Rajat" className="nav-dropdown-user">
                <NavDropdown.Item className="greet-user">
                  Hey, Rajat
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <img src={TripsImg} height="10" width="10" alt="" />
                  My trips
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src={WalletImg} height="10" width="10" alt="" />
                  Wallet
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <img src={PromoImg} height="10" width="10" alt="" />
                  Promos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <img src={supportMessageImg} height="15" width="10" alt="" />
                  Support Messages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  <img src={UserSettingsImg} height="15" width="10" alt="" />
                  Profile Settings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
