import React from 'react';
import './User.css';

import PropTypes from 'prop-types';

export const User = ({ name, nick, email, city }) => (
  <div className="User">
    <div className="UserNickname">
      Post by:
      {nick}
    </div>
    <div className="UserName">{name}</div>
    <div className="UserCity">{city}</div>
    <a href="/" className="UserEmail">{email}</a>
  </div>
);

User.propTypes = {
  nick: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
