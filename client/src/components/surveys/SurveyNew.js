import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurveyForm from './SurveyForm';
import * as actions from '../../actions';

class SurveyNew extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Add new survey here! </h1>
                <SurveyForm />
            </React.Fragment>
        );
    };
};

export default connect(null, actions)(SurveyNew);
