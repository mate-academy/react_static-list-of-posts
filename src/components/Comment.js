import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <li className="post__comment comment">
    <p className="comment__name">
      {name}
    </p>
    <p className="comment__body">
      {body}
    </p>
    <a href={`mailto:${email}`} className="comment__email">
      {email}
    </a>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
