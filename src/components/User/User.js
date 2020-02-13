import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ currentUser }) => {
  const { name, email } = currentUser;
  const { city, street, suite, zipcode } = currentUser.address;

  return (
    <div>
      <h3>{name}</h3>
      <div className="user__email">
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="address">
        <div>{city}</div>
        <div>{street}</div>
        <div>{suite}</div>
        <div>{zipcode}</div>
      </div>
    </div>
  );
};

User.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }).isRequired,
};
