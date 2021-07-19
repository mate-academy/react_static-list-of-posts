import React from 'react';
import './User.scss';
import propTypes from 'prop-types';

export const User = ({ user }) => (
  <li className="user">
    <div>{`By ${user.name}`}</div>
    <div>{user.email}</div>
    <div>
      {`${user.address.street} ${user.address.suite},
      ${user.address.city}, ${user.address.zipcode}`}
    </div>
  </li>
);

User.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    address: propTypes.shape({
      street: propTypes.string.isRequired,
      suite: propTypes.string.isRequired,
      city: propTypes.string.isRequired,
      zipcode: propTypes.string.isRequired,
    }),
  }).isRequired,
};
