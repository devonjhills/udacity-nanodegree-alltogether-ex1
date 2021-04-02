import React, { Component } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import ShowHideGamesLiked from "./ShowHideGamesLiked";
import logo from "./logo.svg";
import "./App.css";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [],
  };
  
  handleAddUser = user => {
    this.setState(prevState => ({ users: [...prevState.users, user] }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">All Together: Video Game App</h1>
        </header>
        <AddUser users={this.state.users} handleAddUser={this.handleAddUser}/>
        <UserList users={this.state.users} />
        <ShowHideGamesLiked />
      </div>
    );
  }
}

export default App;
