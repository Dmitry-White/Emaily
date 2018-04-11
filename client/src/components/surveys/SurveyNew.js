import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurveyForm from './SurveyForm';
import * as actions from '../../actions';

class SurveyNew extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>New survey form</h3>
                <SurveyForm />
            </React.Fragment>
        );
    };
};

export default connect(null, actions)(SurveyNew);
