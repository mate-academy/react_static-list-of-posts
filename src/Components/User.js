import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userData }) => {
  const { name, email, address } = userData;

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

User.propTypes = { userData: PropTypes.objectOf(PropTypes) };
User.defaultProps = {
  userData: {
    address: 'no address',
    email: 'no email',
    name: 'no name',
  },
};

export default User;
