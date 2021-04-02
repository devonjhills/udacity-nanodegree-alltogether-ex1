import React from "react";

const User = ({ user, showPlayed }) => {

  return (
    <div>
      <li key={user.username}>
        {user.username} played {showPlayed ? user.gamesPlayed : '*'} games
      </li>
    </div>
  );
};

export default User;
