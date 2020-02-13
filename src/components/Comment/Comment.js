import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <li className="сomment">
    <span className="сomment__name">{`${name} (${email})`}</span>
    <p className="сomment__body">{body}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
