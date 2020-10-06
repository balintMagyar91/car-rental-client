import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserProfile().then(
      response => {
        this.setState({
          content: response.data
        })
      }
    )
  }

  render() {
    const { currentUser } = this.state;
    console.log(this.state.content)

    return (
        <div className="conatiner">
            <p>AccessToken: {currentUser.access_token.substring(0, 20)} ...</p>
            <p>Token Type: {currentUser.token_type}</p>
            <p>Scope: {currentUser.scope}</p>
            <p>Username: <strong>{this.state.content.username}</strong></p>
            
        </div>
    )

    /*return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
    );*/
  }
}