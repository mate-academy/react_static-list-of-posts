import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <div className="user">
    <div className="user__name">
      <span><b>User name : </b></span>
      <span>{props.name}</span>
    </div>
    <div className="user__nickname">
      <span><b>Nickname : </b></span>
      <span>{props.username}</span>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
export default User;
