import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name }) => (
  <div className="user">
    author:
    <span className="user__name">
      {name}
    </span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
