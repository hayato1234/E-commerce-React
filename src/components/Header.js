import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-md-2">
                                <img src="assets/images/RebuildElectronics-logos.jpeg" alt="RE logo" class="img-fluid" />
                            </div>
                            <div className="col-9 col-md-6 align-self-center">
                                <h1>Rebuild Electronics</h1>
                            </div>
                            <div className="col-12 col-md-4 dropdown mt-2">
                                <a className="btn btn-sm btn-primary" role="button" id="loginButton">
                                    <i className="fa fa-user" aria-hidden="true"></i> Sign in
                                </a>
                                <button className="btn btn-sm btn-secondary dropdown-toggle mx-2" 
                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" 
                                    aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-globe" aria-hidden="true" /> Language
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item active" href="#">English</a>
                                    <a className="dropdown-item" href="/jp/index.html" lang="jp">日本語</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}