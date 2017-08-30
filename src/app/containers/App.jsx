/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
} from '../actions/app.actions';

import Header from '../components/Header';

import getConfig from '../../config';
const config = getConfig().app;

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title={config.title} />
                <div className="main">
                    Nothing to see here yet...
                </div>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(reduction, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

