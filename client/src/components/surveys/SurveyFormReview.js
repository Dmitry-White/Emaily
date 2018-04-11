import React from 'react';
import { connect } from 'react-redux';

import FIELDS from './formFields';

const surveyFormReview = ({ values, onCancelSubmit }) => {
    const renderFields = FIELDS.map(({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{values[name]}</div>
            </div>
        )
    });

    return (
        <React.Fragment>
            <h3>Confirm your entry</h3>
            {renderFields}
            <button onClick={onCancelSubmit} className="btn yellow darken-3 left white-text">
                Back
                <i className="material-icons left">arrow_back</i>
            </button>
            <button className="btn right white-text" type="submit">
                Send
                <i className="material-icons right">email</i>
            </button>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        values: state.form.surveyForm.values
    };
};

export default connect(mapStateToProps)(surveyFormReview);
