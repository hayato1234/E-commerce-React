import React, {Component} from "react";

export default class About extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col mt-2">
                                <h2>About us</h2>
                                <hr />
                        </div>
                    </div>
                    <div className="row pb-2 border-bottom">
                        <div className="col col-sm-6">
                            <h3>Our Mission</h3>
                            <p>We believe that electronics should be used much longer just like furniture. 
                                According to the research, 40% of electronics that are thrown away in the United States can be reused with an easy and inexpensive repair. 
                                We could significantly reduce the bad impact on the environment by extending the life of electronics.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <h3 className="card-header bg-primary text-white">
                                    Facts at a Glance
                                </h3>
                                <div className="card-body">
                                    <dl className="row">
                                        <dt className="col-6">Founded</dt>
                                        <dd className="col-6">December 3, 2020</dd>
                                        <dt className="col-6">No. of item sold in 2021</dt>
                                        <dd className="col-6">342</dd>
                                        <dt className="col-6">No. of items repaired in 2021</dt>
                                        <dd className="col-6">446</dd>
                                        <dt className="col-6">Employees</dt>
                                        <dd className="col-6">3</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- comments carousel  --> */}
                    <div className="row">
                        <div className="col">
                            <h3>Comments from our customers</h3>
                        </div>
                    </div>
                    <div className="row mx-2 pb-2 border-bottom">
                        <div className="col-md-9 mx-auto">
                            <div id="user_review" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#user_review" data-slide-to="0" className="active"></li>
                                    <li data-target="#user_review" data-slide-to="1"></li>
                                    <li data-target="#user_review" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner p-3" role="listbox">
                                    <div className="carousel-item active">
                                        <h3>I bought a DSLR camera from Rebuild Electronics,</h3>
                                        <h3 className="text-right">and I am super happy with the purchase!</h3>
                                        <p className="text-right">Shari J. Jackson   Brooksville, FL</p>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>I contacted Rebuild Electronics because I had a broken air conditioner. The representative was very kind and instructed me what to do with it.</h3>
                                        <p className="text-right">Adam R. Cobb   Columbia, MD</p>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>I had always felt bad whenever I throw away broken electronics into trash, but now I don’t.  Rebuild Electronics does the perfect job recycling!</h3>
                                        <p className="text-right">Mary S. Gallant   Poughkeepsie, NY</p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#user_review" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#user_review" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- table for e-waste data  --> */}
                    <div className="row mt-4">
                        <div className="col-sm-10">
                            <h2>Facts &amp; Figures</h2>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="bg-primary text-light">
                                        <tr>
                                            <th></th>
                                            <th>E-waste</th>
                                            <th>E-waste per household</th>
                                        </tr>
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