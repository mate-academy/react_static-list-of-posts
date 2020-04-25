import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="user post__user">
    <h4 className="user__name">{`Author: ${name}`}</h4>
    <p className="user__email">{`email: ${email}`}</p>
    <p className="user__city">{`city: ${address.city}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({ city: PropTypes.string }),
};

User.defaultProps = {
  name: 'Anonymous',
  email: null,
  address: null,
};

export default User;
