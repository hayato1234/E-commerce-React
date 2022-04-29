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
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h2>Send your item's information!</h2>
              <hr />
            </div>
            <div className="col-md-10">
              <div className="form-group row">
                <label htmlFor="firstName" className="col-md-2 col-form-label">
                  First Name
                </label>
                <div className="col-md-10">
                  <Input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="lastName" className="col-md-2 col-form-label">
                  Last Name
                </label>
                <div className="col-md-10">
                  <Input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="areaCode" className="col-md-2  col-form-label">
                  Contact Tel.
                </label>
                <div className="col-5 col-md-3">
                  <Input
                    type="text"
                    className="form-control"
                    id="areaCode"
                    name="areaCode"
                    placeholder="Area Code"
                  />
                  <Input
                    type="text"
                    className="form-control"
                    name="telNum"
                    placeholder="Tel Num."
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-md-2 col-form-label">
                  Email
                </label>
                <div className="col-md-10">
                  <Input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="user_image">Attach photos</label>
                <Input
                  type="file"
                  id="user_image"
                  name="user_image"
                  className="form-control-file"
                />
              </div>

              <div className="form-group row">
                <label htmlFor="feedback" className="col-md-4 col-form-label">
                  Description/Comments
                </label>
                <div className="col-md-10">
                  <textarea
                    className="form-control"
                    name="feedback"
                    id="feedback"
                    rows="8"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-10 offset-md-2">
                  <button type="submit" className="btn btn-primary">
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
