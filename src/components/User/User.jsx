import React from 'react';
import PropTypes from 'prop-types';
import { addressType } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <div className="user">
    <h4 className="user__name-email">
      {`${user.name}  ${user.email}`}
    </h4>

    <h5 className="user__address">
      {`${user.address.street},
        ${user.address.suite},
        ${user.address.city}`}
    </h5>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    address: addressType.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
