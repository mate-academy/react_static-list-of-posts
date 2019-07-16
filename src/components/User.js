import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <section>
    <div><i>{user.email}</i></div>
    <div>{user.name}</div>
    <div>
      <span>{user.address.city}</span>
      , &nbsp;
      <span>{user.address.street}</span>
      , &nbsp;
      <span>{user.address.suite}</span>
    </div>
  </section>
);

export default User;

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      suite: PropTypes.string,
    }),
    email: PropTypes.string,
  }).isRequired,
};
