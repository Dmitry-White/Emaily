import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SurveyForm extends Component {
    render() {
        return (
            <h3>Survey Form here! </h3>
        );
    };
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
