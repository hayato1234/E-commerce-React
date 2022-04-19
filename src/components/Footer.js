import React, { Component } from "react";
import 'bootstrap-social/bootstrap-social.css';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="site-footer mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-2 offset-1">
                                <h5>Links</h5>
                                <ul className="list-unstyled">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="aboutus.html">About</a></li>
                                    <li><a href="userform.html">Sell/Donate</a></li>
                                    <li><a href="contactus.html">Officail Goods</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-5 text-center">
                                <h5>Social</h5>
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                                <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                            </div>
                            <div className="col-sm-4 text-center">
                                <a role="button" href="btn btn-link btn-secondary"><i className="fa fa-phone fa-lg text-primary"></i> 1-206-555-1234</a><br />
                                <a role="button" href="btn btn-link"><i className="fa fa-envelope-o fa-lg text-primary"></i> contact@rebuildelectronics.com</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}