import React from 'react';
import { Link } from 'react-router-dom';

import SurveyList from './surveys/SurveyList';

const dashboard = () => {
    return (
        <section style={{textAlign: "center"}}>
            <SurveyList />
            <div className="fixed-action-btn">
              <Link to='/surveys/new' className="btn-floating btn-large" style={{backgroundColor:"#ee6e73"}}>
                <i className="large material-icons">add</i>
              </Link>
            </div>
        </section>
    );
};


export default dashboard;
