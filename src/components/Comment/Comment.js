import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <li className="Comment">
    <span className="CommentName">{`${name} (${email})`}</span>
    <p className="CommentBody">{body}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
