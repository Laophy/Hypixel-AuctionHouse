import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function NavBarMain() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ height: "3rem", fontSize: "13px" }}
      >
        <Navbar.Brand style={{ paddingLeft: "1rem", fontSize: "19px" }}>
          <Link
            to="/home"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Hypixel Auctions
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/profiles"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Profiles
              </Link>
            </Nav.Link>
            <NavDropdown title="Buy Now" id="collapsible-nav-dropdown">
              <NavDropdown.Header>Buy Now</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/bin-Weapons"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Weapons
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/bin-Armor"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Armor
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/bin-Accessories"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Accessories
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/bin-consumables"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Consumables
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/bin-blocks"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Blocks
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/bin-tools"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Tools
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/auction-all"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  All Items
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Auction" id="collapsible-nav-dropdown">
              <NavDropdown.Header>Auction Items</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/auction-Weapons"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Weapons
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/auction-Armor"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Armor
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/auction-Accessories"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Accessories
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/auction-consumables"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Consumables
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/auction-blocks"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Blocks
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="/auction-tools"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Tools
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link
                  to="/auction-all"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  All Items
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ paddingRight: "1rem" }}>
            <Form inline style={{ display: "flex", paddingRight: "5px" }}>
              <FormControl type="text" placeholder="Search Item" />
              <Button variant="outline-danger" style={{ marginLeft: "5px" }}>
                Search
              </Button>
            </Form>
            <Nav.Link>
              <Link
                to="/bazzar"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Bazzar
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/profile"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
