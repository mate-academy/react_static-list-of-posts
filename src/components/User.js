import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import UserAddress from './UserAddress';

const User = ({ info }) => (
  <div className="post__user-info user">
    <UserInfo info={info.user} />
    <UserAddress info={info.user.address} />
  </div>
);

User.propTypes = {
  info: PropTypes.shape({
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export default User;
