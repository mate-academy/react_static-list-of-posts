import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ info }) => (
  <div>
    <h4>{info.name}</h4>
    <address>{info.address.city}</address>
    <address>{info.address.street}</address>
    <address>{info.address.suite}</address>
    <a href={info.email} className="link link--user">{info.email}</a>
  </div>
);

User.propTypes
  = {
    info: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default User;
