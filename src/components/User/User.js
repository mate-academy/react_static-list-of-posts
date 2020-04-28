import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

const User = ({ user }) => (
  <div className="post__autor user" key={user.id}>
    <div className="useinfo">
      <span className="user__info-decor">Autor: </span>
      {user.name}
    </div>
    <div className="userinfo">
      <span className="user__info-decor">Email: </span>
      {user.email}
    </div>
    <div className="user__info">
      <span className="user__info-decor">Address: </span>
      {user.address.city}
      ,
      {user.address.street}
      {' '}
      {user.address.suite}
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default User;
