//import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title', icon: "assessment" },
    { label: 'Subject Line', name: 'subject', icon: "title" },
    { label: 'Email Body', name: 'body', icon: "email" },
    { label: 'Recipient List', name: 'list of emails',  icon: "list" }
];

class SurveyForm extends Component {
    renderFields() {
        /*return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });*/
        return FIELDS.map(({label, name, icon}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} icon={icon}/>
        });
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
                <Link to="/surveys" style={{backgroundColor:"#ee6e73"}} className="btn left white-text">
                    Cancel
                    <i className="material-icons left">clear</i>
                </Link>
                <button className="btn right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );
    };
};

const validate = values => {
    const errors = {};

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
};

export default reduxForm({
    form: 'surveyForm',
    validate
})(SurveyForm);
