import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = ({ name, body, email }) => (
  <li className="comment-item">
    <p>
      {'Comment author: '}
      {name}
    </p>
    <p>
      {'Email: '}
      {email}
    </p>
    <p>
      {body}
    </p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
