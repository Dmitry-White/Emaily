import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return (
                    <div style={{height: "100%", paddingTop: "11px", paddingRight: "11px"}}>
                        <div className="preloader-wrapper small active">
                            <div className="spinner-layer" style={{borderColor: "white"}}>
                              <div className="circle-clipper left">
                                <div className="circle"></div>
                              </div><div className="gap-patch">
                                <div className="circle"></div>
                              </div><div className="circle-clipper right">
                                <div className="circle"></div>
                              </div>
                            </div>
                        </div>
                    </div>
                );
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return (
                    <React.Fragment>
                        <li><Payments /></li>
                        <li style={{margin: "0 10px"}}>Credits: {this.props.auth.credits}</li>
                        <li>
                            <Link to="/surveys">
                                Surveys
                                <i className="material-icons left">home</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/surveys/new">
                                New Survey
                                <i className="material-icons left">add_box</i>
                            </Link>
                        </li>
                        <li>
                            <a href="/api/logout">
                                Logout
                                <i className="material-icons left">power_settings_new</i>
                            </a>
                        </li>
                    </React.Fragment>
                );
        }
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                  <Link to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">Emaily</Link>
                  <ul className="right">
                        {this.renderContent()}
                  </ul>
                </div>
            </nav>
        );
    };
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(Header);
