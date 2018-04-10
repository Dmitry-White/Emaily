import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
const NewSurvey = () => <h1>Add new survey here! </h1>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    };

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route exact path="/surveys/new" component={NewSurvey}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);
