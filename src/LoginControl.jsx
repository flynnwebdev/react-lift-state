import React, { Component } from 'react'
import Greeting from './Greeting';
import { LogoutButton, LoginButton } from './Buttons';

export default class LoginControl extends Component {
    state = {
        isLoggedIn: false
    }

    handleLogin = (e) => {
        this.setState({ isLoggedIn: true })
    }

    handleLogout = (e) => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        // let button
        // if (this.state.isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogout} />
        // } else {
        //     button = <LoginButton onClick={this.handleLogin} />
        // }
        return (
            <div>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
                {this.state.isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogout} />
                ) : (
                        <LoginButton onClick={this.handleLogin} />
                    )}
            </div>
        )
    }
}
