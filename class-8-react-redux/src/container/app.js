import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import { Main } from "../components/main"
import { User } from "../components/user"
import { setName } from "../actions/userAction"

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Main changeUserName={() => this.props.setNewName('khan')} />
                <User username={this.props.UserReducer.name} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        UserReducer: state.UserReducer,
        MainReducer: state.MainReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewName: (name) => {
            // setName comes from action
            dispatch(setName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);