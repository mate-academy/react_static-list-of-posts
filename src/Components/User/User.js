import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, email, address }) => {
  const { street, suite, city, zipcode } = address;

  return (
    <div className="post__user">
      <div className="post__user-name">
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <div className="post__user-address">
        <p>{street}</p>
        <p>{suite}</p>
        <p>{city}</p>
        <p>{zipcode}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
};
