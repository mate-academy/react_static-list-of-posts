/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="user">
    <span className="highlighter">User:</span>
    <p className="user__name">
      Name: {name}
    </p>
    <p className="user__email">
      E-mail: {email}
    </p>
    <p className="user__address">
      Address: {address.city}, {address.street}, {address.suite}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default User;
