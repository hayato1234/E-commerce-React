import React, {Component} from "react";

export default class OfficialGear extends Component{
    render(){
        return (
          <React.Fragment>
            <div className="container mt-5">
              <div className="row">
                <div className="card w-50 p-5">
                  <img
                    className="card-img-top img-fluid"
                    src="assets/images//Gear-tshirt.png"
                    alt="logo t-shirt"
                  />
                  <div className="card-body">
                    <h4 className="card-title">T-shirt</h4>
                    <p className="card-text">$30</p>
                    <button className="btn btn-warning my-4">Add to Cart</button>
                  </div>
                </div>
                <div className="card w-50 p-5">
                  <img
                    className="card-img-top img-fluid"
                    src="assets/images/gear_mug.png"
                    alt="logo mug"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Mug</h4>
                    <p className="card-text">$15</p>
                    <button className="btn btn-warning my-4">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}