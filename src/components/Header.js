import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isDropdownOpen: false,
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen,
    });
  }

  toggleLanguage() {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <header className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-3 col-md-2">
                <img
                  src="assets/images/RebuildElectronics-logos.jpeg"
                  alt="RE logo"
                  className="img-fluid"
                />
              </div>
              <div className="col-9 col-md-6 align-self-center">
                <h1>Rebuild Electronics</h1>
              </div>
              <div className="col-12 col-md-4 dropdown mt-2">
                <Dropdown
                  size="sm"
                  isOpen={this.state.isDropdownOpen}
                  toggle={this.toggleLanguage}
                >
                  <Button
                    id="loginButton"
                    color="primary"
                    size="sm"
                    onClick={this.toggleLoginModal}
                  >
                    <i className="fa fa-user" aria-hidden="true"></i> Sign in
                  </Button>
                  {/* <DropdownToggle
                    caret
                    style={{ "fontSize": "0.65rem", "marginLeft": "3px" }}
                  >
                    <i className="fa fa-globe" aria-hidden="true" /> Language
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem active>English</DropdownItem>
                    <DropdownItem>日本語</DropdownItem>
                  </DropdownMenu> */}
                </Dropdown>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- login modal  --> */}
        <Modal
          isOpen={this.state.isLoginModalOpen}
          toggle={this.toggleLoginModal}
        >
          <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label className="sr-only col-form-label" htmlFor="loginEmail">
                  Email Address
                </Label>
                <Input
                  type="email"
                  name="loginEmail"
                  id="loginEmail"
                  className="form-control form-control-sm"
                  placeholder="Enter Email"
                  required
                />
              </FormGroup>
              <FormGroup className="form-row">
                <div className="form-group col-12">
                  <label
                    className="sr-only col-form-label"
                    htmlFor="loginPassward"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    id="loginPassword"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup className="form-check">
                <label className="form-check-label">
                  <Input
                    type="checkbox"
                    className="form-check-input"
                    name=""
                    id=""
                    value="checkedValue"
                  />
                  Remember me
                </label>
              </FormGroup>
              <FormGroup className="form-row">
                <Button
                  type="button"
                  className="btn btn-secondary btn-sm ml-auto"
                  onClick={this.toggleLoginModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  id="loginBtn"
                  className="btn btn-primary btn-sm ml-1"
                  color="primary"
                  disabled
                >
                  Sign in
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter className="modal-footer">
            <a className="btn btn-link btn-sm" href="#" data-dismiss="modal">
              forgot your password?
            </a>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
