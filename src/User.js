import React from "react";

const User = ({user}) => {
  return (
    <div>
      <li key={user.username}>{user.username} played {user.gamesPlayed} games</li>
    </div>
  );
};

export default User;
