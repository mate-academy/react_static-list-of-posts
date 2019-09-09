import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

import users from '../../api/users';

const User = ({ userId, userEmail }) => {
  const { name, email, address } = userId
    ? users.find(item => item.id === userId)
    : { name: '', email: userEmail, address: '' };

  return (
    <div className="user">
      <p className="user--text">
        <span className="user__text">By</span>
        <span className="user__name">{name}</span>
      </p>
      <p className="user__email user--text">{email}</p>
      <p className="user__address user--text">
        {`${address.city}, ${address.street}`}
        <br />
        {address.zipcode}
      </p>
    </div>
  );
};

User.propTypes = {
  userId: PropTypes.string,
  userEmail: PropTypes.string,
};

User.defaultProps = {
  userId: false,
  userEmail: '',
};

export default User;
