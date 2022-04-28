import React, {Component} from "react";

export default class About extends Component{
    render(){
        return (
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col mt-2">
                                <h2>About us</h2>
                                <hr />
                        </div>
                    </div>
                    <div class="row pb-2 border-bottom">
                        <div class="col col-sm-6">
                            <h3>Our Mission</h3>
                            <p>We believe that electronics should be used much longer just like furniture. 
                                According to the research, 40% of electronics that are thrown away in the United States can be reused with an easy and inexpensive repair. 
                                We could significantly reduce the bad impact on the environment by extending the life of electronics.
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <h3 class="card-header bg-primary text-white">
                                    Facts at a Glance
                                </h3>
                                <div class="card-body">
                                    <dl class="row">
                                        <dt class="col-6">Founded</dt>
                                        <dd class="col-6">Decenmber 3, 2020</dd>
                                        <dt class="col-6">No. of item sold in 2021</dt>
                                        <dd class="col-6">342</dd>
                                        <dt class="col-6">No. of items repaired in 2021</dt>
                                        <dd class="col-6">446</dd>
                                        <dt class="col-6">Employees</dt>
                                        <dd class="col-6">3</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- comments carousel  --> */}
                    <div class="row">
                        <div class="col">
                            <h3>Comments from our customers</h3>
                        </div>
                    </div>
                    <div class="row mx-2 pb-2 border-bottom">
                        <div class="col-md-9 mx-auto">
                            <div id="user_review" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#user_review" data-slide-to="0" class="active"></li>
                                    <li data-target="#user_review" data-slide-to="1"></li>
                                    <li data-target="#user_review" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner p-3" role="listbox">
                                    <div class="carousel-item active">
                                        <h3>I bought a DSLR camera from Rebuild Electronics,</h3>
                                        <h3 class="text-right">and I am super happy with the purchase!</h3>
                                        <p class="text-right">Shari J. Jackson   Brooksville, FL</p>
                                    </div>
                                    <div class="carousel-item">
                                        <h3>I contacted Rebuild Electronics because I had a broken air conditioner. The representative was very kind and instructed me what to do with it.</h3>
                                        <p class="text-right">Adam R. Cobb   Columbia, MD</p>
                                    </div>
                                    <div class="carousel-item">
                                        <h3>I had always felt bad whenever I throw away broken electronics into trash, but now I don’t.  Rebuild Electronics does the perfect job recycling!</h3>
                                        <p class="text-right">Mary S. Gallant   Poughkeepsie, NY</p>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#user_review" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#user_review" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- table for e-waste data  --> */}
                    <div class="row mt-4">
                        <div class="col-sm-10">
                            <h2>Facts &amp; Figures</h2>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="bg-primary text-light">
                                        <th></th>
                                        <th>E-waste</th>
                                        <th>E-waste per household</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>in the US</th>
                                            <td>2.57 million tons</td>
                                            <td>10 lb.</td>
                                        </tr>
                                        <tr>
                                            <th>World</th>
                                            <td>2,703.7 million tons</td>
                                            <td>1.4 lb.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}