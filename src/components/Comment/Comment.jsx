import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = ({ comment }) => (
  <div className="post__comment">
    <h4>{comment.name}</h4>
    <a href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
