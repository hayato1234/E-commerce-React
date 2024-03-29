import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    this.props.deleteAllCart();
    alert("Thank you for your order! You will get a confirmation email");
  }

  RenderCartItem({ cartHolder }) {
    if (cartHolder.errMsg) {
      <h4>Error: {cartHolder.errMsg}</h4>;
    }
    if (cartHolder.cart <= 0) {
      return <h4>You don't have anything in your cart</h4>;
    }
    return (
      <ol>
        {cartHolder.cart.map((item, index) => {
          return <li key={index}>{item.title} : ${item.price}</li>;
        })}
      </ol>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Container className="m-5">
          <Row className="border-bottom">
            <Col sm={3}>
              <h4>Shipping Address</h4>
            </Col>
            <Col sm={8}>
              <p>James J. Gilstrap</p>
              <p>2066 Paul Wayne Haggerty Road Kenner, LA 70065</p>
            </Col>
            <Col>
              <i className="fa fa-edit" />
            </Col>
          </Row>
          <Row className="pt-3 border-bottom">
            <Col sm={3}>
              <h4>Payment Method</h4>
            </Col>
            <Col sm={8}>
              <p>Visa ending -1234</p>
              <p>Billing Address: same as shipping address</p>
            </Col>
            <Col>
              <i className="fa fa-edit" />
            </Col>
          </Row>

          <Row className="pt-3 border-bottom">
            <Col sm={3}>
              <h4>In your cart</h4>
            </Col>
            <Col>
              <this.RenderCartItem cartHolder={this.props.cartHolder} />
            </Col>
          </Row>

          <Row className=" pt-3">
            <Col sm={3}></Col>
            <Col sm={5}>
              <h4>Order Total: ${this.props.cartHolder.total}</h4>
            </Col>
            <Col>
              <Link to='/'>
                <button
                  id="placeOrderBtn"
                  className="btn btn-warning"
                  onClick={this.handleCheckout}
                >
                  Place your order
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
