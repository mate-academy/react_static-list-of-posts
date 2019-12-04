import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <div className="user__info">
      <p>
NAME:
        {name}
      </p>
      <p>{email}</p>
      <p>{address.street}</p>
      <p>{address.suite}</p>
      <p>
CITY:
        {address.city}
      </p>
      <p>{address.zipcode}</p>
    </div>

  );
};

User.propTypes = { user: PropTypes.objectOf(PropTypes) };
User.defaultProps = {
  user: {
    address: 'no address',
    email: 'no email',
    name: 'no name',
  },
};

export default User;
