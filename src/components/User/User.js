import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

function User({ user }) {
  const {
    name, email, address = {},
  } = user;

  const {
    street, suite, city, zipcode,
  } = address;

  return (
    <div className="user">
      <h3>{name}</h3>
      <a href={`mailto:${email}`}>{email}</a>
      <div className="user__address">
        <span>{street}</span>
        <span>{suite}</span>
        <span>{city}</span>
        <span>{zipcode}</span>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
