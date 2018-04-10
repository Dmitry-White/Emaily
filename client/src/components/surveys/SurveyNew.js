import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class SurveyNew extends Component {
    render() {
        return (
            <h1>Add new survey here! </h1>
        );
    };
};

export default connect(null, actions)(SurveyNew);
