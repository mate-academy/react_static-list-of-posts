import React from "react";
import "../user/User.css";

const User = ({ user }) => {
  return (
    <p className="user">
      <h3>Author</h3>
      <span className="highlitedText">{user.name}</span>, {`<${user.username}>`}
      , {user.address.zipcode}, {user.address.city}, {user.address.street},{" "}
      {user.address.suite}
    </p>
  );
};

export default User;
