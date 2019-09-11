import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="content">
    <div className="header">{user.name}</div>
    <div className="item meta">
      <i className="mail icon" />
      <a href={`mailto:${user.email}`} className="content">{user.email}</a>
    </div>
    <div className="item meta">
      <i className="phone icon" />
      <a href={`tel:${user.phone}`} className="content">{user.phone}</a>
    </div>
    <div className="item meta">
      <i className="info icon" />
      <a href={`${user.website}`} className="content">{user.website}</a>
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
