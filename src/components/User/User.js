import React from 'react';
import './User.css';

import PropTypes from 'prop-types';

export const User = ({ username, name, email, address }) => (
  <div className="User">
    <div className="UserNickname">
      Post by:
      {username}
    </div>
    <div className="UserName">{name}</div>
    <div className="UserCity">{address.city}</div>
    <a href="/" className="UserEmail">{email}</a>
  </div>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.shape(),
  ).isRequired,
};
