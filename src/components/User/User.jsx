import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { street, suite, city, zipcode } = user.address;

  return (
    <div className="user">
      <div className="user__photo">{user.name[0]}</div>
      <div className="user__information">
        <span className="user__information-data name">{user.name}</span>
        <span className="user__information-data">{user.email}</span>
        <span className="user__information-data">
          {`${street}, ${suite}, ${city} (${zipcode})`}
        </span>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
