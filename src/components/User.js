import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, address } = user;
  const { city } = address;

  return (
    <div className="user-info">
      <span>
        <b>Author:</b>
        {name}
      </span>
      <span>
        <b>Email:</b>
        <a href={`mailto:${email}`}>{email}</a>
      </span>
      <span>
        <b>City:</b>
        {city}
      </span>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
