import React from 'react';

function User(user) {
  return (
    <div className="user">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>
        {`${user.address.city} ${user.address.street} ${user.address.suite}`}
      </p>
    </div>
  );
}

export default User;
