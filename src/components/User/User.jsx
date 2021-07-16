import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
// import { userType } from '../type';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="post__user user">
    <div className="user__name">
      {name}
    </div>
    <div className="user__email">
      {email}
    </div>
    <div className="user__address">
      {`${address.city},
        ${address.street},
        ${address.suite}`}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
