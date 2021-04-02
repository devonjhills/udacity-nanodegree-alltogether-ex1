import React, { Component } from "react";
import User from "./User";

export default class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleShowGames = () => {
    this.setState((prevState) => ({
      showGamesPlayed: !prevState.showGamesPlayed,
    }));
  };

  render() {
    const gameButton = (
      <div>
        <button className="smallButton" onClick={this.toggleShowGames}>
          {this.state.showGamesPlayed ? "Hide " : "Show "} the Number of Games
          Played
        </button>
      </div>
    );

    return (
      <div>
        <h2>User List</h2>
        {this.props.users && this.props.users.length > 0 ? gameButton : ''}
        <ol>
          {this.props.users.map((user) => (
            <User
              key={user.username}
              user={user}
              showPlayed={this.state.showGamesPlayed}
            />
          ))}
        </ol>
      </div>
    );
  }
}
