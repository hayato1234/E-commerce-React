import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light sticky="top" expand="md">
          <NavbarBrand className="ms-5" href="/">
            <img
              src="assets/images/RebuildElectronics-logos.jpeg"
              height="30"
              width="30"
              alt="Company Logo"
              className="float-start"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="ms-5">
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <i className="fa fa-home" aria-hidden="true" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/userform">
                  <i className="fa fa-cube" aria-hidden="true"></i> Sell/Donate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/officialgear">
                  <i className="fa fa-certificate" aria-hidden="true"></i>{" "}
                  Official Gear
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  <i className="fa fa-info-circle" aria-hidden="true"></i> About
                  Us
                </NavLink>
              </NavItem>
              <span className="navbar-text">
                <a
                  role="button"
                  data-toggle="modal"
                  data-target="#cartModal"
                >
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: "2rem" }}
                  />
                </a>
              </span>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
