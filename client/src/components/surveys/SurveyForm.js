//import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {
    renderFields() {
        /*return _.map(FIELDS, ({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });*/
        return FIELDS.map(({label, name}) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        });
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat left white-text">
                    Cancel
                    <i className="material-icons left">clear</i>
                </Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );
    };
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
