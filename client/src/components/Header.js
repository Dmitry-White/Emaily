import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                  <Link to="/" className="left brand-logo">Emaily</Link>
                  <ul className="right">
                    <li><Link to="/surveys">Surveys</Link></li>
                    <li><Link to="/surveys/new">New Survey</Link></li>
                    <li><a href="/auth/google">Login With Google</a></li>
                  </ul>
                </div>
            </nav>
        );
    };
};

export default Header;
