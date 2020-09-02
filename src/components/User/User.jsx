import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ oneUser }) => (
  <div className="author">
    <p className="name">{oneUser.name}</p>
    <p className="email">{oneUser.email}</p>
    <p className="adress">{oneUser.address.city}</p>
  </div>
);

User.propTypes = {
  oneUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,

};
