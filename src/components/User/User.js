import React from 'react';
import './User.css';

function User(props) {
  // eslint-disable-next-line react/prop-types
  const { user } = props;

  return (
    <div className="user-info">
      <p className="user-name">{user.name}</p>
      <p className="user-email">{user.email}</p>
      {/* eslint-disable-next-line react/prop-types */}
      {props.showAddress
        ? (
          <p className="user-address">
            {`
            ${user.address.city}, ${user.address.street}, ${user.address.suite}
            `}
          </p>
        )
        : ''
      }
    </div>
  );
}

export default User;
