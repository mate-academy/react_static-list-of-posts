import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ author, email, address }) => (
  <div className="card-header">
    <span>{author}</span>
    <a href={`mailto:${email}`}>{email}</a>
    <span>{address}</span>
  </div>
);

User.propTypes = {
  author: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
};

User.defaultProps = {
  author: '',
  email: '',
  address: '',
};
