import React from 'react';

function User( { user } ) {
  return (
    <div className="user_container">
      <span>{user.name }</span>
      <a href={`mailto:${user.email}`}>{ user.email }</a>
    </div>
  );
}

export default User;
