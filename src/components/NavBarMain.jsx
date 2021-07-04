import React from "react";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarMain() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        style={{ height: "3rem", fontSize: "13px" }}
      >
        <Navbar.Brand
          href="#home"
          style={{ paddingLeft: "1rem", fontSize: "19px" }}
        >
          Hypixel Auctions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#profiles">Profiles</Nav.Link>
            <NavDropdown title="Buy Now" id="collasible-nav-dropdown">
              <NavDropdown.Header>BIN Items</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Weapons">Weapons</NavDropdown.Item>
              <NavDropdown.Item href="#Armor">Armor</NavDropdown.Item>
              <NavDropdown.Item href="#Accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#Consumables">
                Consumables
              </NavDropdown.Item>
              <NavDropdown.Item href="#Blocks">Blocks</NavDropdown.Item>
              <NavDropdown.Item href="#Tools">Tools</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#All-BIN">All Items</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Auction" id="collasible-nav-dropdown">
              <NavDropdown.Header>Auction Items</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Weapons">Weapons</NavDropdown.Item>
              <NavDropdown.Item href="#Armor">Armor</NavDropdown.Item>
              <NavDropdown.Item href="#Accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#Consumables">
                Consumables
              </NavDropdown.Item>
              <NavDropdown.Item href="#Blocks">Blocks</NavDropdown.Item>
              <NavDropdown.Item href="#Tools">Tools</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#All-Auction">All Items</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ paddingRight: "1rem" }}>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
