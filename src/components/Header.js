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
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoginModalOpen: false,
      isDropdownOpen: false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen
    });
  }
  toggleLanguage(){
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen
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
                <Button
                  className="btn btn-sm btn-primary"
                  role="button"
                  id="loginButton"
                  color="primary"
                  onClick={this.toggleLoginModal}
                >
                  <i className="fa fa-user" aria-hidden="true"></i> Sign in
                </Button>
                <Dropdown isOpen={this.state.isDropdownOpen} toggle={this.toggleLanguage}>
                  <DropdownToggle caret size="sm">
                    <i className="fa fa-globe" aria-hidden="true" /> Language
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>日本語</DropdownItem>
                  </DropdownMenu>
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
                <Label class="sr-only col-form-label" htmlFor="loginEmail">
                  Email Address
                </Label>
                <Input
                  type="email"
                  name="loginEmail"
                  id="loginEmail"
                  class="form-control form-control-sm"
                  placeholder="Enter Email"
                  required
                />
              </FormGroup>
              <FormGroup class="form-row">
                <div class="form-group col-12">
                  <label class="sr-only col-form-label" for="loginPassward">
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    id="loginPassword"
                    class="form-control form-control-sm"
                    placeholder="Password"
                    required
                  />
                </div>
              </FormGroup>
              <FormGroup class="form-check">
                <label class="form-check-label">
                  <Input
                    type="checkbox"
                    class="form-check-input"
                    name=""
                    id=""
                    value="checkedValue"
                  />
                  Remember me
                </label>
              </FormGroup>
              <FormGroup class="form-row">
                <Button
                  type="button"
                  class="btn btn-secondary btn-sm ml-auto"
                  onClick={this.toggleLoginModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  id="loginBtn"
                  class="btn btn-primary btn-sm ml-1"
                  color="primary"
                  disabled
                >
                  Sign in
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter class="modal-footer">
            <a class="btn btn-link btn-sm" href="#" data-dismiss="modal">
              forgot your password?
            </a>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
