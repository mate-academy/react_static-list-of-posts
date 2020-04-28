import React from 'react';
import PropTypes from 'prop-types';

import './CommentsList.css';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments }) => (
  <ul className="comments-list">
    {comments.map(comment => (
      <li key={comment.id} className="comments-list__comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
