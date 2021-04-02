import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="Comment">
    <h3 className="Comment__name">{name}</h3>
    <p className="Comment__body">{body}</p>
    <p className="Comment__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
