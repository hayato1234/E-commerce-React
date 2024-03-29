import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { officialItems } from "../shared/officialItems";

export default class OfficialGear extends Component {
  offItems = officialItems.map((item) => {
    return <this.RenderItems item={item} addToCart={this.props.addToCart} />;
  });

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">{this.offItems}</div>
        </div>
      </React.Fragment>
    );
  }

  RenderItems({ item, addToCart }) {
    return (
      <Card className="w-50 p-5">
        <CardImg className="img-fluid" src={item.image} alt={item.title} />
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <CardText>$ {item.price}</CardText>
          <Button onClick={() => addToCart(item)} color="warning">
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    );
  }
}
