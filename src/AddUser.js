import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    gamesPlayed: 0,
    usernameTaken: false,
  };

  usernameTaken = (currentUsername) => {
    const users = this.props.users;
    for(let user of users) {
      if(user.username === currentUsername) {
        return true;
      }
    }
    return false;
  }

  inputIsEmpty = () => {
    return (
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.username === ""
    );
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addUser = (event) => {
    event.preventDefault();

    const usernameTaken = this.usernameTaken(this.state.username);

    if(!usernameTaken) {
      this.props.handleAddUser(this.state);
    }

    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      gamesPlayed: 0,
      userExists: usernameTaken,
    });
  };

  render() {
    return (
      <div>
      <form onSubmit={this.addUser}>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button className='smallButton' disabled={this.inputIsEmpty()}>Add User</button>
      </form>
      {this.state.userExists ? (
        <p className='error'>That username is taken</p>
      ) : (
        ''
      )}
      </div>
    );
  }
}
