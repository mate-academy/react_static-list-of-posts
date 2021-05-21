import React from 'react';

import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="Comment">
    <h4 className="Comment__author-name">{name}</h4>
    <p className="Comment__text">{body}</p>
    <p className="Comment__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
