import React from 'react';
import './User.css';

import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <li className="user">
    <h3 className="title">
      {name}
    </h3>
    <p className="email">
    E-mail:
      <span>
        {` ${email}`}
      </span>
    </p>
    <p className="address">
      <span>
      street:
        {` ${address.street}`}
      </span>
      <span>
      suite:
        {` ${address.suite}`}
      </span>
      <span>
      city:
        {` ${address.city}`}
      </span>
      <span>
      zipcode:
        {` ${address.zipcode}`}
      </span>
    </p>
  </li>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
