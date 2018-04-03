import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return (
                    <React.Fragment>
                        <li><Link to="/surveys">Surveys</Link></li>
                        <li><Link to="/surveys/new">New Survey</Link></li>
                    </React.Fragment>
                );
        }
    };

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                  <Link to="/" className="left brand-logo">Emaily</Link>
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
