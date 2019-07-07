import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function User({ user }) {
  return (
    <div className="user-post">
      <i>name:&nbsp;</i>
      <span>
        {user.name}
        &nbsp;&nbsp;&nbsp;
      </span>
      <i>email:&nbsp;</i>
      <span>
        {user.email}
      </span>
        &nbsp;&nbsp;&nbsp;
      <i>address:&nbsp;</i>
      <span>
        {user.address.city}
      </span>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};

export default User;
