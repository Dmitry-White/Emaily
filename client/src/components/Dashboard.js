import React from 'react';
import { Link } from 'react-router-dom';

const dashboard = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Dashboard</h1>
            <div className="fixed-action-btn">
              <Link to='/surveys/new' className="btn-floating btn-large" style={{backgroundColor:"#ee6e73"}}>
                <i className="large material-icons">add</i>
              </Link>
            </div>
        </div>
    );
};


export default dashboard;
