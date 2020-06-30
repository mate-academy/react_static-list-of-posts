import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = ({ comment }) => (
  <li className="Post__Comment-Item">
    {`Name: ${comment.name} Comment: ${comment.body}  Email: ${comment.email}`}
  </li>
);

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
