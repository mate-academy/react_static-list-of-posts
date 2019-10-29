import React from 'react';
import './User.css';

function User(props) {
  // eslint-disable-next-line react/prop-types
  const { name, email, address } = props.user;
  // eslint-disable-next-line react/prop-types
  const { showAddress } = props;

  return (
    <div className="user-info">
      <p className="user-name">{name}</p>
      <p className="user-email">{email}</p>
      {showAddress && (
        <p className="user-address">
          {`${address.city}, ${address.street}, ${address.suite}`}
        </p>
      )}
    </div>
  );
}

export default User;
