import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";

export default class UserForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="container mt-5">
          <div class="row">
            <div class="col-12">
              <h2>Send your electronics' information!</h2>
              <hr />
            </div>
            <div class="col-md-10">
              <div class="form-group row">
                <label htmlFor="firstName" class="col-md-2 col-form-label">
                  First Name
                </label>
                <div class="col-md-10">
                  <Input
                    type="text"
                    class="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="lastName" class="col-md-2 col-form-label">
                  Last Name
                </label>
                <div class="col-md-10">
                  <Input
                    type="text"
                    class="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="areaCode" class="col-md-2  col-form-label">
                  Contact Tel.
                </label>
                <div class="col-5 col-md-3">
                  <Input
                    type="text"
                    class="form-control"
                    id="areaCode"
                    name="areaCode"
                    placeholder="Area Code"
                  />
                  <Input
                    type="text"
                    class="form-control"
                    name="telNum"
                    placeholder="Tel Num."
                  />
                </div>
              </div>
              <div class="form-group row">
                <label htmlFor="email" class="col-md-2 col-form-label">
                  Email
                </label>
                <div class="col-md-10">
                  <Input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label htmlFor="user_image">Attach photos</label>
                <Input
                  type="file"
                  id="user_image"
                  name="user_image"
                  class="form-control-file"
                />
              </div>

              <div class="form-group row">
                <label htmlFor="feedback" class="col-md-4 col-form-label">
                  Description/Comments
                </label>
                <div class="col-md-10">
                  <textarea
                    class="form-control"
                    name="feedback"
                    id="feedback"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-10 offset-md-2">
                  <button type="submit" class="btn btn-primary">
                    Submit Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
