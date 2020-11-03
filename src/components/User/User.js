import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <h5>{user.name}</h5>
    <p>{user.email}</p>
    <ul>
      <li>{user.address.street}</li>
      <li>{user.address.suite}</li>
      <li>{user.address.city}</li>
      <li>{user.address.zipcode}</li>
    </ul>
  </>
);

User.defaultProps = {
  user: {},
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }),
};
