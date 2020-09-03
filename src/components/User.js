import React from 'react';

import users from '../api/users';

function User({ userId }) {
  return (
    users.map(user => (
      user.id === userId
        ? (
          <>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>
              Address
              {': '}
              {user.address.city}
              {', '}
              {user.address.street}
              {', '}
              {user.address.suite}
              {', '}
              {user.address.zipcode}
            </p>
          </>
        )
        : null
    ))
  );
}

export default User;
