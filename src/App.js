import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import AuthService from './services/auth.service';

import Dashboard from './components/dashboard.component';
import Login from './components/login.component';
import Home from './components/home.component';
import Profile from './components/profile.comonent';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if(user) {
      this.setState({
        currentUser: user
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
