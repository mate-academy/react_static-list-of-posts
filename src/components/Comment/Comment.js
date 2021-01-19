import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <a href="https://www.gmail.com">{comment.email}</a>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
