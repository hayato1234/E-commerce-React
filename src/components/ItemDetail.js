import React from "react";

export default function ItemDetail(props) {
    if(props.item){
        console.log("true");
        return (
            // <RenderItem item={props.item} />
            <div />
        );
    }else{
        console.log("false");
        return(
            <div />
        );
    }
}

function RenderItem({item}) {
    return (
        <div className="container">
            {/* <!-- breadcrumb row  --> */}
            <div className="row">
                <div className="col">
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="index.html">Home</a>
                        <a id="breadc-category" className="breadcrumb-item" href="#">Camera and Photo</a>
                        <span id="breadc-title" className="breadcrumb-item active">Nikon D-22</span>
                    </nav>
                </div>
            </div>

            {/* <!-- search bar  --> */}
            <div className="form-row align-items-center mt-4">
                <div className="col-6 mx-auto">
                    <div className="form-inline">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for items..." />
                            <button className="btn btn-sm btn-secondary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* <!-- item info  --> */}
            <div className="row mt-5">
                <div className="col">
                    <div className="media">
                        <img id="detail-main-img" src="assets/images/camera.jpg" alt="item picture" className="d-flex img-fluid w-50" />
                        <div className="media-body ml-5">
                            <h1 id="title">Title</h1>
                            <h2 id="price" >Price</h2>
                            <button id="item-detail-add-cart" className="btn btn-warning my-4">
                                <i className="fa fa-shopping-cart"></i>
                                <span id="item-detail-add-cart-text">Add to Cart</span>
                            </button>
                            <hr />
                            <p id="item-detail-brand-text">Brand: </p>
                            <p id="item-detail-condition-text">Condition: </p>
                            <p id="item-detail-model-text">Model: </p>
                            <p id="item-detail-year-text">Year: </p>
                            <p id="item-detail-comment-text">Comment: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}