import React, { Component } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = {
        showFormReview: false
    };

    onSurveySubmit = () => {
        this.setState({
            showFormReview: true
        });
    };

    onCancelSubmit = () => {
        this.setState({
            showFormReview: false
        });
    };

    render() {
        return (
            <section>
                {this.state.showFormReview
                    ? <SurveyFormReview onCancelSubmit={this.onCancelSubmit}/>
                    : <SurveyForm onSurveySubmit={this.onSurveySubmit}/>
                }
            </section>
        );
    };
};

export default SurveyNew;
