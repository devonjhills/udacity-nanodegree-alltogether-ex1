import React, { Component } from "react";
import User from "./User";

export default class UserList extends Component {

  state = {
    showGamesPlayed: true,
  }

  render() {
    return (
      <div>
        <p>User List</p>
        <ol>
          {this.props.users.map((user) => (
            <User key={user.username} user={user} />
          ))}
        </ol>
      </div>
    );
  }
}
