import React from 'react';
import PropTypes from 'prop-types';
import UserAddress from '../UserAddress/UserAddress';

const User = ({ name, email, address }) => (
  <div className="Post__user-info user">
    <p className="user__name">
      {`Full name: ${name}`}
    </p>
    <p className="user__email">
      {`Email: ${email}`}
    </p>
    <UserAddress {...address} />
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape().isRequired,
};

export default User;
