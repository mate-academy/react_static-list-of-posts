import React from 'react';
import PropTypes from 'prop-types';

function User({ user: { name, email,
  address: { street, city, suite, zipcode } } }) {
  return (
    <div className="posts__user">
      <span className="posts__user-name">
        {`Name: ${name}`}
      </span>
      <a href={`mailto:${email}`} className="posts__user-email">
        {email}
      </a>
      <p className="posts__user-address">
        <span>{`City: ${city}`}</span>
        <span>{`street: ${street}`}</span>
        <span>{`suite: ${suite}`}</span>
        <span>{`zip: ${zipcode}`}</span>
      </p>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
