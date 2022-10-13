import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./Search";

export default class ItemDetail extends React.Component {
  render() {
    if (this.props.item) {
      return (
        <RenderItem
          item={this.props.item}
          addToCart={this.props.addToCart}
          carth={this.props.cartHolder}
        />
      );
    } else {
      console.log("false");
      return <div />;
    }
  }
}

const getItemBrand = (title) => {
  const brandEnd = title.search(" ");
  return title.slice(0, brandEnd);
};

function RenderItem({ item, addToCart, carth }) {
  const handleCart = () => {
    addToCart(item);
    console.log(carth.cart);
  };

  return (
    <div className="container">
      {/* <!-- breadcrumb row  --> */}
      <div className="row">
        <div className="col">
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/">
              Home
            </a>
            <a id="breadc-category" className="breadcrumb-item" href="/">
              {item.category ? item.category : "other"}
            </a>
            <span id="breadc-title" className="breadcrumb-item active">
              Nikon D-22
            </span>
          </nav>
        </div>
      </div>

      {/* <!-- search bar  --> */}
      <SearchBar />

      {/* back button */}
      <div className="row">
        <div className="col">
          <Link to="/">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
        </div>
      </div>

      {/* <!-- item info  --> */}
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="media">
            <img
              id="detail-main-img"
              src={item.brand ? "../" + item.image : item.image} //workaround: local items need "../" but API items don't. API items don't have brand.
              alt="item"
              height="100"
              className="d-flex img-fluid w-10"
            />
            <div className="media-body ml-5">
              <h1 id="title">{item.title}</h1>
              <h2 id="price">$ {item.price}</h2>

              <hr />
            </div>
          </div>
        </div>

        <div className="col-md-6 mr-auto">
          <button
            id="item-detail-add-cart"
            className="btn btn-warning my-4"
            onClick={handleCart}
          >
            <i className="fa fa-shopping-cart"></i>
            <span id="item-detail-add-cart-text">Add to Cart</span>
          </button>
          <h3 id="item-detail-brand-text">
            Brand: {item.brand ? item.brand : getItemBrand(item.title)}
          </h3>
          <h3 id="item-detail-condition-text">
            Condition: {item.condition ? item.condition : item.rating.rate}
          </h3>
          <h3 id="item-detail-model-text">
            Model: {item.model ? item.model : "Model 1"}
          </h3>
          <h3 id="item-detail-year-text">
            Year: {item.year ? item.year : "2018"}
          </h3>
          <h3 id="item-detail-comment-text">
            Comment:{" "}
            {item.comment
              ? item.comment
              : "No commented added. Contact for details"}
          </h3>
        </div>
      </div>
    </div>
  );
}
