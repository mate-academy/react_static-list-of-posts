import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user-name">
      {`Name: ${name}`}
    </p>
    <a href={`mailto${email}`} className="user-email">
      {email}
    </a>
    <p className="user-address">
      <span>{`city: ${address.city}`}</span>
      <span>{`street: ${address.street}`}</span>
      <span>{`suite: ${address.suite}`}</span>
      <span>{`zip: ${address.zipcode}`}</span>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
