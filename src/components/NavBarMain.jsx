import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Link
} from "react-router-dom";

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
          style={{ paddingLeft: "1rem", fontSize: "19px" }}
        >
          <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>Hypixel Auctions</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link><Link to="/profiles" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profiles</Link></Nav.Link>
            <NavDropdown title="Buy Now" id="collapsible-nav-dropdown">
              <NavDropdown.Header>BIN Items</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/bin-Weapons" style={{ color: 'inherit', textDecoration: 'inherit'}}>Weapons</Link></NavDropdown.Item>
              <NavDropdown.Item href="#BIN-Armor">Armor</NavDropdown.Item>
              <NavDropdown.Item href="#BIN-Accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="#BIN-Consumables">
                Consumables
              </NavDropdown.Item>
              <NavDropdown.Item href="#BIN-Blocks">Blocks</NavDropdown.Item>
              <NavDropdown.Item href="#BIN-Tools">Tools</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#BIN-All"><Link to="/bin-all" style={{ color: 'inherit', textDecoration: 'inherit'}}>All Items</Link></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Auction" id="collapsible-nav-dropdown">
              <NavDropdown.Header>Auction Items</NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Auction-Weapons">Weapons</NavDropdown.Item>
              <NavDropdown.Item href="#Auction-Armor">Armor</NavDropdown.Item>
              <NavDropdown.Item href="#Auction-Accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/auction-consumables" style={{ color: 'inherit', textDecoration: 'inherit'}}>Consumables</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/auction-blocks" style={{ color: 'inherit', textDecoration: 'inherit'}}>Blocks</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/auction-tools" style={{ color: 'inherit', textDecoration: 'inherit'}}>Tools</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/auction-all" style={{ color: 'inherit', textDecoration: 'inherit'}}>All Items</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ paddingRight: "1rem" }}>
            <Nav.Link><Link to="/bazzar" style={{ color: 'inherit', textDecoration: 'inherit'}}>Bazzar</Link></Nav.Link>
            <Nav.Link><Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Profile</Link></Nav.Link>
            <Nav.Link>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
