import React, { Component } from "react";
import {
  Button,
  Nav,
  Navbar,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isCartModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleCartModal = this.toggleCartModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleCartModal() {
    console.log("cart clicked")
    this.setState({
      isCartModalOpen: !this.state.isCartModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light sticky="top" expand="sm">
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
            </Nav>
            <span className="navbar-text">
              <a role="button" onClick={this.toggleCartModal}>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </span>
          </Collapse>
        </Navbar>

        {/* shopping cart modal */}
        <Modal
          isOpen={this.state.isCartModalOpen}
          toggle={this.toggleCartModal}
        >
          <ModalHeader toggle={this.toggleCartModal}>
            Your shopping cart
          </ModalHeader>
          <ModalBody>
            <ol>
              <li>Item 1</li>
              <li>Item 1</li>
            </ol>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleCartModal}>
              Close
            </Button>
            {/* <NavItem>
              <NavLink color="primary" to="/aboutus">
                Checkout
              </NavLink>
            </NavItem> */}
            <Link onClick={this.toggleCartModal} to="/checkout">
              <Button color="primary">checkout</Button>
            </Link>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
