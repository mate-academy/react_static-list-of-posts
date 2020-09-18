import React from 'react';
import './User.scss';

import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <div>
    {user.name}
    {user.email}
    {user.adress}
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    adress: PropTypes.object,
  }),
};

User.defaultProps = {
  user: {},
};
