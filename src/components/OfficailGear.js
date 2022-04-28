import React, {Component} from "react";

export default class OfficialGear extends Component{
    render(){
        return (
          <React.Fragment>
            <div class="container mt-5">
              <div class="row">
                <div class="card w-50 p-5">
                  <img
                    class="card-img-top img-fluid"
                    src="assets/images//Gear-tshirt.png"
                    alt="logo t-shirt"
                  />
                  <div class="card-body">
                    <h4 class="card-title">T-shirt</h4>
                    <p class="card-text">$30</p>
                    <button class="btn btn-warning my-4">Add to Cart</button>
                  </div>
                </div>
                <div class="card w-50 p-5">
                  <img
                    class="card-img-top img-fluid"
                    src="assets/images/gear_mug.png"
                    alt="logo mug"
                  />
                  <div class="card-body">
                    <h4 class="card-title">Mug</h4>
                    <p class="card-text">$15</p>
                    <button class="btn btn-warning my-4">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}