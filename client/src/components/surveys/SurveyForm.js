import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    { label: 'Survey Name', name: 'title', icon: "assessment" },
    { label: 'Subject Line', name: 'subject', icon: "title" },
    { label: 'Email Body', name: 'body', icon: "email" },
    { label: 'Recipient List', name: 'list of emails',  icon: "list" }
];

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({label, name, icon}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} icon={icon}/>
        });
    };

    render() {
        return (
            <React.Fragment>
                <h3>Create new survey</h3>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" style={{backgroundColor:"#ee6e73"}} className="btn left white-text">
                        Cancel
                        <i className="material-icons left">clear</i>
                    </Link>
                    <button className="btn right white-text" type="submit">
                        Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </form>
            </React.Fragment>
        );
    };
};

const validate = values => {
    const errors = {};

    errors["list of emails"] = validateEmails(values["list of emails"] || "");

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
};

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);
