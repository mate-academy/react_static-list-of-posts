import React from 'react';
import PropTypes from 'prop-types';

import './Comments.css';

const Comment = ({ name, body, email }) => (
  <li className="comments">
    <p>{name}</p>
    <p>{body}</p>
    <p>
      Email:
      {' '}
      {email}
    </p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
