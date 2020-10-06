import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import AuthService from './services/auth.service';
import UserService from './services/user.service';

import Login from './components/login.component';
import Home from './components/home.component';
import Profile from './components/profile.comonent';

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = UserService.
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                CarRental
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                    Home
                </Link>
                </li>

                {currentUser && (
                <li className="nav-item">
                    <Link to={"/user"} className="nav-link">
                    User
                    </Link>
                </li>
                )}
            </div>

            {currentUser ? (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                    </a>
                </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                    Login
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                    Sign Up
                    </Link>
                </li>
                </div>
            )}
            </nav>

            <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/home"]} component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
            </div>
        </div>
        )
    }
}

export default Dashboard;